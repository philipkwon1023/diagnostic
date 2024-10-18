import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { LogOut } from 'lucide-react';
import { selectNextQuestion, isTestComplete } from '../utils/adaptiveTestAlgorithm';
import { questions as allQuestions } from '../data/questions';
import Header from './Header'; // Header 컴포넌트 가져오기

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

// 수식을 파싱하고 줄바꿈 태그를 처리하는 함수
const parseMathText = (text: string) => {
  // $$...$$와 $...$ 및 <br />을 모두 처리할 수 있는 정규식
  const parts = text.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$|<br\s*\/?>)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      // $$로 감싸진 부분은 BlockMath로 줄바꿈 수식 처리
      return <BlockMath key={index}>{part.slice(2, -2)}</BlockMath>;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      // $로 감싸진 부분은 InlineMath로 인라인 수식 처리
      return <InlineMath key={index}>{part.slice(1, -1)}</InlineMath>;
    } else if (part === '<br />' || part === '<br>') {
      // <br /> 태그는 줄바꿈으로 처리
      return <br key={index} />;
    } else {
      // 나머지는 일반 텍스트로 처리
      return <span key={index}>{part}</span>;
    }
  });
};

const DiagnosticTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeSpent, setTimeSpent] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();
  const { user, setUser, setIsLoggedIn } = useUser(); // useUser 훅에서 로그인 상태 관리 함수 가져오기

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
    //console.log('로그아웃 시작');
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
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
    <>
    <Header />
    <div className="container mx-auto p-4 pt-0 bg-gradient-to-b from-blue-100 to-white min-h-screen mt-12">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-0 mb-0">
        {/*<div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mr-4">Math-Ray 진단평가</h1>
          <button
            onClick={handleLogout}
            className="flex items-center px-3 py-1 sm:px-4 sm:py-2 bg-red-500 text-white text-sm sm:text-base rounded hover:bg-red-600 transition duration-150 ease-in-out"
          >
            <LogOut className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            로그아웃
          </button>
        </div>*/}
        <div className="flex justify-between items-center mb-6 py-1 px-4">

          <p className="text-lg font-semibold">
            문제 {answeredQuestions.length + 1} / 10
          </p>
          <p className="text-lg font-semibold">
            경과 시간: {elapsedTime.toFixed(0)}초
          </p>
        </div>
        <div className="mb-6 p-4">
          <div className="text-lg">{parseMathText(currentQuestion.text)}</div>
          {currentQuestion.hasImage && (
            <div className="mt-4 flex justify-center">
              <img src={currentQuestion.imageUrl} alt="문제 이미지" className="max-w-2xl h-auto" />
            </div>


          )}
        </div>
        <div className="space-y-2">
          {shuffledOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(currentQuestion.options.indexOf(option))}
              className="w-full px-2 py-0.1 text-left bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-150 ease-in-out"
            >
              {parseMathText(option)}
            </button>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default DiagnosticTest;
