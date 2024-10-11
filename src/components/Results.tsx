import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { LogOut } from 'lucide-react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 로딩 애니메이션 컴포넌트
const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col justify-center items-center min-h-screen bg-white">
    <div className="spinner-border animate-spin inline-block w-60 h-60 border-6 rounded-full text-blue-4600 flex items-center justify-center" role="status">
      <span className="visually-hidden text-center text-3xl font-bold">Math-Ray</span>
    </div>
    <p className="text-2xl font-bold mt-4 text-blue-600">정밀촬영 중...</p>
  </div>
);

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: number;
  concept: number;
  hasImage: boolean;
  imageUrl: string;
}

interface ResultsState {
  userAnswers: number[];
  timeSpent: number[];
  questions: Question[];
}

const parseMathText = (text: string) => {
  const parts = text.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={index}>{part.slice(2, -2)}</BlockMath>;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index}>{part.slice(1, -1)}</InlineMath>;
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

// Google Gemini API 호출 함수
const callGeminiAPI = async (userRawData: string, prompt: string) => {
  try {
    const response = await fetch('http://localhost:4000/api/gemini', { // 백엔드로 요청
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userRawData,
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // 마크다운 형식의 결과를 반환
    return data.result;
  } catch (error) {
    console.error('Gemini API 호출 중 오류 발생:', error);
    return '진단 결과를 생성하는 중 오류가 발생했습니다. 네트워크 상태를 확인하거나 나중에 다시 시도해주세요.';
  }
};

// 진단 결과를 표시하는 컴포넌트
const DiagnosticResult: React.FC<{ markdown: string }> = ({ markdown }) => {
  const convertMarkdownToHtml = (markdown: string) => {
    const html = markdown
      .replace(/^# (.*$)/gm, '<h1 class="bg-gray-100 p-2">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="bg-gray-100 p-2">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="bg-gray-100 p-2">$1</h3>')
      .replace(/\*\*(.*)\*\*/gm, '<strong class="bg-gray-100 p-1">$1</strong>')
      .replace(/\*(.*)\*/gm, '<em class="bg-gray-100 p-1">$1</em>')
      .replace(/\n/gm, '<br>')
      .replace(/^(.+)$/gm, '<p class="bg-gray-100 p-2">$1</p>');

    return html;
  };

  const htmlContent = convertMarkdownToHtml(markdown);

  return (
    <div className="markdown-content bg-gray-100 p-4 rounded-lg shadow-md"> {/* 회색 박스 스타일 추가 */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswers, timeSpent, questions } = location.state as ResultsState;
  const { user, setUser, setIsLoggedIn } = useUser(); // 컴포넌트 최상단에서 훅 호출

  const score = userAnswers.reduce((acc, answer, index) => acc + (answer === questions[index].correctAnswer ? 1 : 0), 0);
  const totalQuestions = questions.length;
  const answeredQuestions = userAnswers.length;
  const averageTime = timeSpent.reduce((a, b) => a + b, 0) / answeredQuestions;

  const [diagnosticResult, setDiagnosticResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateDiagnosticResult = async () => {
      setIsLoading(true);
      const userRawData = `
        총점: ${score}/${totalQuestions}
        평균 소요 시간: ${averageTime.toFixed(2)}초
        문항별 결과:
        ${questions.map((q, i) => `
          문제 ${i + 1}: ${userAnswers[i] === q.correctAnswer ? '정답' : '오답'}
          문제 원문: ${q.text}
          소요 시간: ${timeSpent[i].toFixed(2)}초
          난이도: ${q.difficulty}
          개념: ${q.concept}
        `).join('\n')}
      `;

      const prompt = `
위 데이터를 바탕으로 사용자의 수학 학습 상태를 진단하고, 강점과 약점을 분석해주세요. 
참고로 난이도는 1~5 사이의 정수로 표현되며, 난이도가 높을수록 어려운 문제를 의미합니다. 
출력 형식은 불필요한 제목은 없이 바로 다음 structure와 유사한 구조를 유지하고 마크다운 언어로 출력해주세요. 구조를 유지하는 것이지 내용은 학습자 데이터에 따라 다양하게 분석해주세요.

structure={
**총평** 
*총점이 3점으로 아직 수학 개념에 대한 이해도가 부족한 것으로 판단됩니다.*

**강점**
*문제에서 정답을 맞힌 부분에 대한 강점 분석*

**약점**
*문제에서 틀린 부분에 대한 약점 분석*

**학습 조언**
*기본 개념부터 탄탄하게 학습.*
*오답 노트를 활용하여 반복 학습.*
*다양한 문제 유형을 풀어보면서 문제 해결 전략을 익히기.*
*꾸준한 학습을 통해 실력 향상 가능.*

*수학은 조금만 노력하면 재미를 느낄 수 있는 학문입니다. 꾸준한 노력과 재미를 느끼며 수학을 공부해보세요. 힘내요!*
}
`;

      try {
        const result = await callGeminiAPI(userRawData, prompt);
        setDiagnosticResult(result);
      } catch (error) {
        console.error("Gemini API 호출 오류:", error);
        setDiagnosticResult("진단 결과를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setIsLoading(false);
      }
    };

    generateDiagnosticResult();
  }, [score, totalQuestions, averageTime, questions, userAnswers, timeSpent]);

  const chartData = {
    labels: ['정답률', '평균 소요 시간'],
    datasets: [
      {
        label: '결과',
        data: [(score / answeredQuestions) * 100, averageTime],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 159, 64, 0.6)'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Math-Ray 분석결과',
      },
    },
  };

  const interpretResult = () => {
    const percentage = (score / answeredQuestions) * 100;
    if (percentage >= 90) return "우수";
    if (percentage >= 70) return "양호";
    if (percentage >= 50) return "보통";
    return "노력 필요";
  };

  const handleRetry = () => {
    navigate('/test', { replace: true });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
  };

  if (isLoading) {
    return <LoadingSpinner />; // 로딩 중일 때 표시
  }

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Math-Ray 분석결과</h1>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-150 ease-in-out ml-auto"
          >
            <LogOut className="mr-2 h-5 w-5" />
            로그아웃
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-lg mb-2">정답률: <span className="font-semibold">{((score / answeredQuestions) * 100).toFixed(2)}%</span></p>
            <p className="text-lg mb-2">맞은 문제: <span className="font-semibold">{score} / {answeredQuestions}</span></p>
            <p className="text-lg mb-4">평균 소요 시간: <span className="font-semibold">{averageTime.toFixed(2)}초</span></p>
            <p className="text-xl font-semibold mb-4">
              {user?.username}님의 수준: <span className="text-blue-600">{interpretResult()}</span>
            </p>
          </div>
          <div>
            <Bar data={chartData} options={options} />
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">진단 해석</h2>
          <DiagnosticResult markdown={diagnosticResult} />
        </div>
        <h2 className="text-2xl font-semibold mb-4">문항별 결과</h2>
        {questions.map((question, index) => (
          <div 
            key={question.id} 
            className={`mb-4 p-4 rounded-lg ${
              userAnswers[index] === question.correctAnswer 
                ? 'bg-gray-100' 
                : 'bg-[rgb(255,207,207)]'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">
              문제 {index + 1} {Array(5).fill('★').fill('☆', question.difficulty).join('')}
            </h3>
            <div className="mb-2">{parseMathText(question.text)}</div>
            {question.hasImage && (
              <div className="mt-2 mb-2">
                <img src={question.imageUrl} alt="문제 이미지" className="max-w-full h-auto" />
              </div>
            )}
            <p className="mb-2">사용자 답변: {parseMathText(question.options[userAnswers[index]])}</p>
            <p className="mb-2">정답: {parseMathText(question.options[question.correctAnswer])}</p>
            <p>소요 시간: {timeSpent[index].toFixed(2)}초</p>
            <p className="mt-2 font-semibold">
              {userAnswers[index] === question.correctAnswer ? '정답' : '오답'}
            </p>
          </div>
        ))}
        <div className="text-center">
          <button
            onClick={handleRetry}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-150 ease-in-out"
          >
            다시 시도하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
