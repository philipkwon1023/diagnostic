import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { LogOut } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: number;
  concept: number;
}

const DiagnosticTest: React.FC = () => {
  const [questions] = useState<Question[]>([
    { id: 1, text: "다음 적분을 계산하시오: \\int_{0}^{\\pi} \\sin x dx", options: ["0", "1", "2", "-1", "\\pi"], correctAnswer: 1, difficulty: 3, concept: 12 },
    { id: 2, text: "함수 f(x) = x^2의 x = 3에서의 미분 계수를 구하시오.", options: ["3", "6", "9", "12", "18"], correctAnswer: 1, difficulty: 2, concept: 5 },
    { id: 3, text: "다음 극한값을 구하시오: \\lim_{x \\to 0} \\frac{\\sin x}{x}", options: ["0", "\\frac{1}{2}", "1", "\\pi", "\\infty"], correctAnswer: 2, difficulty: 4, concept: 8 },
    { id: 4, text: "함수 f(x) = e^x의 역함수를 구하시오.", options: ["\\ln x", "\\log x", "e^{-x}", "\\frac{1}{x}", "x^e"], correctAnswer: 0, difficulty: 3, concept: 15 },
    { id: 5, text: "다음 급수의 합을 구하시오: \\sum_{n=1}^{\\infty} \\frac{1}{n^2}", options: ["\\frac{\\pi^2}{3}", "\\frac{\\pi^2}{6}", "\\frac{\\pi^2}{12}", "\\pi", "2\\pi"], correctAnswer: 1, difficulty: 5, concept: 20 },
    { id: 6, text: "함수 f(x) = x^3 - 3x + 1의 극값을 구하시오.", options: ["1, -1", "2, -2", "3, -3", "0, 0", "1, -2"], correctAnswer: 0, difficulty: 3, concept: 7 },
    { id: 7, text: "다음 미분방정식을 풀어라: \\frac{dy}{dx} = 2x", options: ["y = x^2 + C", "y = 2x + C", "y = x^2 - C", "y = 2x^2 + C", "y = \\frac{1}{2}x^2 + C"], correctAnswer: 0, difficulty: 4, concept: 18 },
    { id: 8, text: "함수 f(x) = \\sin x의 2차 테일러 다항식을 구하시오.", options: ["x", "x - \\frac{x^2}{2}", "x - \\frac{x^3}{6}", "1 - \\frac{x^2}{2}", "x + \\frac{x^3}{6}"], correctAnswer: 2, difficulty: 5, concept: 25 },
    { id: 9, text: "다음 적분을 계산하시오: \\int \\frac{dx}{1+x^2}", options: ["\\tan^{-1}x + C", "\\sin^{-1}x + C", "\\ln|x| + C", "\\frac{1}{x} + C", "x + C"], correctAnswer: 0, difficulty: 3, concept: 14 },
    { id: 10, text: "함수 f(x,y) = x^2 + y^2의 (1,1)에서의 그래디언트를 구하시오.", options: ["(1,1)", "(2,2)", "(0,0)", "(1,2)", "(2,1)"], correctAnswer: 1, difficulty: 4, concept: 30 },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeSpent, setTimeSpent] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((Date.now() - startTime) / 1000);
    }, 100);

    return () => clearInterval(timer);
  }, [startTime]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  const handleAnswer = (answerIndex: number) => {
    const timeElapsed = (Date.now() - startTime) / 1000;
    const newUserAnswers = [...userAnswers, answerIndex];
    const newTimeSpent = [...timeSpent, timeElapsed];
    setUserAnswers(newUserAnswers);
    setTimeSpent(newTimeSpent);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setStartTime(Date.now());
      setElapsedTime(0);
    } else {
      // Test is complete, navigate to results
      navigate('/results', { state: { userAnswers: newUserAnswers, timeSpent: newTimeSpent, questions } });
    }
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">AI 수학 진단평가</h1>
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
            문제 {currentQuestionIndex + 1} / {questions.length}
          </p>
          <p className="text-lg font-semibold">
            경과 시간: {elapsedTime.toFixed(0)}초
          </p>
        </div>
        <div className="mb-8">
          <h2 className="text-xl mb-4">
            <BlockMath>{currentQuestion.text}</BlockMath>
          </h2>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-3 text-left border rounded-lg hover:bg-blue-50 transition duration-150 ease-in-out"
              >
                <InlineMath>{option}</InlineMath>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTest;