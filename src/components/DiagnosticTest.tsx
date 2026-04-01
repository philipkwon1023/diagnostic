import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import {
  selectNextQuestion,
  isTestComplete,
  createInitialTestState,
  processAnswer,
  type TestState,
} from '../utils/adaptiveTestAlgorithm';
import { questions as allQuestions } from '../data/questions';
import Header from './Header';

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

const parseMathText = (text: string) => {
  const parts = text.split(/(\$\$[^\$]+\$\$|\$[^\$]+\$|<br\s*\/?>)/g);

  return parts.map((part, index) => {
    if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={index}>{part.slice(2, -2)}</BlockMath>;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={index}>{part.slice(1, -1)}</InlineMath>;
    } else if (part === '<br />' || part === '<br>') {
      return <br key={index} />;
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

const DiagnosticTest: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [shuffledToOriginalIndices, setShuffledToOriginalIndices] = useState<number[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeSpent, setTimeSpent] = useState<number[]>([]);
  const [testState, setTestState] = useState<TestState>(createInitialTestState());
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);

  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useUser();

  const shuffleOptions = (options: string[], correctAnswerIndex: number) => {
    const indexedOptions = options.map((option, index) => ({ option, index }));
    const shuffled = [...indexedOptions].sort(() => Math.random() - 0.5);

    const newOptions = shuffled.map((item) => item.option);
    const newCorrectIndex = shuffled.findIndex(
      (item) => item.index === correctAnswerIndex
    );

    const shuffledToOriginal = shuffled.map((item) => item.index);

    return { newOptions, newCorrectIndex, shuffledToOriginal };
  };

  useEffect(() => {
    const initialState = createInitialTestState();
    setCurrentQuestion(null);
    setAnsweredQuestions([]);
    setUserAnswers([]);
    setTimeSpent([]);
    setTestState(initialState);
    setStartTime(Date.now());
    setElapsedTime(0);
  }, []);

  useEffect(() => {
    if (allQuestions.length > 0 && currentQuestion === null) {
      const nextQuestion = selectNextQuestion(allQuestions, answeredQuestions, testState);
      setCurrentQuestion(nextQuestion);
    }
  }, [answeredQuestions, currentQuestion, testState]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((Date.now() - startTime) / 1000);
    }, 100);

    return () => clearInterval(timer);
  }, [startTime]);

  useEffect(() => {
    if (currentQuestion) {
      const { newOptions, shuffledToOriginal } = shuffleOptions(
        currentQuestion.options,
        currentQuestion.correctAnswer - 1
      );

      setShuffledOptions(newOptions);
      setShuffledToOriginalIndices(shuffledToOriginal);
    }
  }, [currentQuestion]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
  };

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion) return;

    const timeElapsed = (Date.now() - startTime) / 1000;
    const originalAnswerIndex = shuffledToOriginalIndices[answerIndex];

    const newUserAnswers = [...userAnswers, originalAnswerIndex];
    const newTimeSpent = [...timeSpent, timeElapsed];
    const newAnsweredQuestions = [...answeredQuestions, currentQuestion.id];

    const nextTestState = processAnswer(
      testState,
      currentQuestion,
      originalAnswerIndex,
      timeElapsed
    );

    setUserAnswers(newUserAnswers);
    setTimeSpent(newTimeSpent);
    setAnsweredQuestions(newAnsweredQuestions);
    setTestState(nextTestState);

    if (!isTestComplete(newAnsweredQuestions)) {
      const nextQuestion = selectNextQuestion(
        allQuestions,
        newAnsweredQuestions,
        nextTestState
      );
      setCurrentQuestion(nextQuestion);
      setStartTime(Date.now());
      setElapsedTime(0);
    } else {
      const answeredQuestionObjects = newAnsweredQuestions.map(
        (id) => allQuestions.find((q) => q.id === id)!
      );

      navigate('/results', {
        state: {
          userAnswers: newUserAnswers,
          timeSpent: newTimeSpent,
          questions: answeredQuestionObjects,
          testState: nextTestState,
        },
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
          <div className="flex justify-between items-center mb-6 py-1 px-4">
            <p className="text-lg font-semibold">
              문제 {answeredQuestions.length + 1} / 10
            </p>
            <p className="text-lg font-semibold">
              경과 시간: {elapsedTime.toFixed(0)}초
            </p>
          </div>

          <div className="px-4 pb-2 text-sm text-gray-500">
            추정 능력치: {testState.ability.toFixed(2)}
          </div>

          <div className="mb-6 p-4">
            <div className="text-lg">{parseMathText(currentQuestion.text)}</div>
            {currentQuestion.hasImage && (
              <div className="mt-4 flex justify-center">
                <img
                  src={currentQuestion.imageUrl}
                  alt="문제 이미지"
                  className="max-w-2xl h-auto"
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full px-2 py-1 text-left bg-white border border-gray-300 rounded-lg hover:bg-blue-50 transition duration-150 ease-in-out"
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
