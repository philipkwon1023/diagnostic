import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Header from './Header';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userAnswers, timeSpent, questions } = location.state as ResultsState;
  const { user, setUser, setIsLoggedIn } = useUser();

  // correctAnswer에 -1을 해줌
  const score = userAnswers.reduce(
    (acc, answer, index) =>
      acc + (answer === questions[index].correctAnswer - 1 ? 1 : 0),
    0
  );
  const totalQuestions = questions.length;
  const answeredQuestions = userAnswers.length;
  const averageTime = timeSpent.reduce((a, b) => a + b, 0) / answeredQuestions;

  const [diagnosticResult, setDiagnosticResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // 진단 결과 생성 로직...
    // 이 부분은 기존 코드와 동일하게 유지됩니다.
    const generateDiagnosticResult = async () => {
      // 진단 결과 생성 로직
      setIsLoading(false);
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
    if (percentage >= 90) return '우수';
    if (percentage >= 70) return '양호';
    if (percentage >= 50) return '보통';
    return '노력 필요';
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
    return <LoadingSpinner />;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 bg-gradient-to-b from-blue-100 to-white min-h-screen mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Math-Ray 분석결과
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg mb-2">
                정답률:{' '}
                <span className="font-semibold">
                  {((score / answeredQuestions) * 100).toFixed(2)}%
                </span>
              </p>
              <p className="text-lg mb-2">
                맞은 문제:{' '}
                <span className="font-semibold">
                  {score} / {answeredQuestions}
                </span>
              </p>
              <p className="text-lg mb-4">
                평균 소요 시간:{' '}
                <span className="font-semibold">{averageTime.toFixed(2)}초</span>
              </p>
              <p className="text-xl font-semibold mb-4">
                {user?.username}님의 수준:{' '}
                <span className="text-blue-600">{interpretResult()}</span>
              </p>
            </div>
            <div>
              <Bar data={chartData} options={options} />
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">진단 해석</h2>
            {/* 진단 결과 표시 부분 */}
            <div
              className="markdown-content bg-gray-100 p-4 rounded-lg shadow-md"
              dangerouslySetInnerHTML={{ __html: diagnosticResult }}
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">문항별 결과</h2>
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={`mb-4 p-4 rounded-lg ${
                userAnswers[index] === question.correctAnswer - 1
                  ? 'bg-gray-100'
                  : 'bg-[rgb(255,207,207)]'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">
                문제 {index + 1}{' '}
                {Array(5)
                  .fill('★')
                  .fill('☆', question.difficulty)
                  .join('')}
              </h3>
              <div className="mb-2">{parseMathText(question.text)}</div>
              {question.hasImage && (
                <div className="mt-2 mb-2 flex justify-center">
                  <img
                    src={question.imageUrl}
                    alt="문제 이미지"
                    className="max-w-full h-auto"
                  />
                </div>
              )}
              <p className="mb-2">
                사용자 답변:{' '}
                {parseMathText(question.options[userAnswers[index]])}
              </p>
              <p className="mb-2">
                정답:{' '}
                {parseMathText(
                  question.options[question.correctAnswer - 1]
                )}
              </p>
              <p>소요 시간: {timeSpent[index].toFixed(0)}초</p>
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
    </>
  );
};

export default Results;
