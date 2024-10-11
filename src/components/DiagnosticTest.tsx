import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { LogOut } from 'lucide-react';
import { selectNextQuestion, isTestComplete } from '../utils/adaptiveTestAlgorithm';
import { questions as allQuestions } from '../data/questions';

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

interface DiagnosticTestProps {
  setIsLoggedIn: (value: boolean) => void;
}

// 수식을 파싱하여 수식과 텍스트를 분리하는 함수
const parseMathText = (text: string) => {
  // $$...$$와 $...$를 모두 처리할 수 있는 정규식
  const parts = text.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$)/g); 
  
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      // $$로 감싸진 부분은 BlockMath로 줄바꿈 수식 처리
      return <BlockMath key={index}>{part.slice(2, -2)}</BlockMath>;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      // $로 감싸진 부분은 InlineMath로 인라인 수식 처리
      return <InlineMath key={index}>{part.slice(1, -1)}</InlineMath>;
    } else {
      // 나머지는 일반 텍스트로 처리
      return <span key={index}>{part}</span>;
    }
  });
};

const DiagnosticTest: React.FC<DiagnosticTestProps> = ({ setIsLoggedIn }) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  const shuffleOptions = (options: string[]) => {
    return [...options].sort(() => Math.random() - 0.5);
  };
  
  useEffect(() => {
    setCurrentQuestion(null);
    setAnsweredQuestions([]);
    setUserAnswers([]);
    setTimeSpent([]);
    setStartTime(Date.now());
    setElapsedTime(0);
  }, []);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeSpent, setTimeSpent] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  useEffect(() => {
    if (allQuestions.length > 0 && currentQuestion === null) {
      const nextQuestion = selectNextQuestion(allQuestions, answeredQuestions, userAnswers);
      setCurrentQuestion(nextQuestion);
    }
  }, [allQuestions, answeredQuestions, userAnswers, currentQuestion]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((Date.now() - startTime) / 1000);
    }, 100);

    return () => clearInterval(timer);
  }, [startTime]);

  useEffect(() => {
    if (currentQuestion) {
      setShuffledOptions(shuffleOptions(currentQuestion.options));
    }
  }, [currentQuestion]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false); // 로그인 상태 업데이트
    navigate('/login');
  };

  const handleAnswer = (answerIndex: number) => {
    const timeElapsed = (Date.now() - startTime) / 1000;
    const newUserAnswers = [...userAnswers, answerIndex];
    const newTimeSpent = [...timeSpent, timeElapsed];
    const newAnsweredQuestions = [...answeredQuestions, currentQuestion!.id];
  
    setUserAnswers(newUserAnswers);
    setTimeSpent(newTimeSpent);
    setAnsweredQuestions(newAnsweredQuestions);
  
    if (!isTestComplete(newAnsweredQuestions)) {
      const nextQuestion = selectNextQuestion(allQuestions, newAnsweredQuestions, newUserAnswers);
      setCurrentQuestion(nextQuestion);
      setStartTime(Date.now());
      setElapsedTime(0);
    } else {
      const answeredQuestionObjects = newAnsweredQuestions.map(id => allQuestions.find(q => q.id === id)!);
      navigate('/results', { 
        state: { 
          userAnswers: newUserAnswers, 
          timeSpent: newTimeSpent, 
          questions: answeredQuestionObjects 
        } 
      });
    }
  };

  if (currentQuestion === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">Math-Ray 진단평가</h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-150 ease-in-out"
          >
            <LogOut className="mr-2 h-5 w-5" />
            로그아웃
          </button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-semibold">
            문제 {answeredQuestions.length + 1} / 10
          </p>
          <p className="text-lg font-semibold">
            경과 시간: {elapsedTime.toFixed(0)}초
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">문제:</h2>
          <div className="text-lg">{parseMathText(currentQuestion.text)}</div>
          {currentQuestion.hasImage && (
            <div className="mt-4">
              <img src={currentQuestion.imageUrl} alt="문제 이미지" className="max-w-full h-auto" />
            </div>
          )}
        </div>
        <div className="space-y-2">
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(currentQuestion.options.indexOf(option))}
              className="w-full p-2 text-left bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-150 ease-in-out"
            >
              {parseMathText(option)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTest;