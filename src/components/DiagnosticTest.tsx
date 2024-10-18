import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
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
  const [shuffledCorrectIndex, setShuffledCorrectIndex] = useState<number | null>(null);
  const [shuffledToOriginalIndices, setShuffledToOriginalIndices] = useState<number[]>([]); // 추가된 상태
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [timeSpent, setTimeSpent] = useState<number[]>([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();
  const { user, setUser, setIsLoggedIn } = useUser(); // useUser 훅에서 로그인 상태 관리 함수 가져오기

  // 선지를 섞고 정답의 새로운 위치를 반환하는 함수
  const shuffleOptions = (options: string[], correctAnswerIndex: number) => {
    // 각 옵션을 원래 인덱스와 함께 배열로 묶음
    const indexedOptions = options.map((option, index) => ({ option, index }));

    // 옵션을 섞음
    const shuffled = indexedOptions.sort(() => Math.random() - 0.5);

    // 섞인 배열에서의 새로운 옵션과 새로운 정답 인덱스를 반환
    const newOptions = shuffled.map(item => item.option);
    const newCorrectIndex = shuffled.findIndex(item => item.index === correctAnswerIndex); // 섞인 배열에서 정답 인덱스 찾기

    // 셔플된 인덱스에서 원본 인덱스로의 매핑 생성
    const shuffledToOriginalIndices = shuffled.map(item => item.index);

    return { newOptions, newCorrectIndex, shuffledToOriginalIndices };
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
      const { newOptions, newCorrectIndex, shuffledToOriginalIndices } = shuffleOptions(currentQuestion.options, currentQuestion.correctAnswer - 1); // correctAnswer에 -1을 해줌
      setShuffledOptions(newOptions);
      setShuffledCorrectIndex(newCorrectIndex); // 섞인 후의 정답 인덱스 저장
      setShuffledToOriginalIndices(shuffledToOriginalIndices); // 셔플된 인덱스 매핑 저장
    }
  }, [currentQuestion]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/login', { replace: true });
  };

  const handleAnswer = (answerIndex: number) => {
    const timeElapsed = (Date.now() - startTime) / 1000;

    // 선택한 셔플된 인덱스를 원본 인덱스로 변환
    const originalAnswerIndex = shuffledToOriginalIndices[answerIndex];

    const newUserAnswers = [...userAnswers, originalAnswerIndex]; // 원본 인덱스를 저장
    const newTimeSpent = [...timeSpent, timeElapsed];
    const newAnsweredQuestions = [...answeredQuestions, currentQuestion!.id];

    // 정답 여부를 검토 (correctAnswer에 -1을 해줌)
    const isCorrect = originalAnswerIndex === currentQuestion!.correctAnswer - 1;

    //console.log(`선택한 원본 인덱스: ${originalAnswerIndex + 1}, 정답 인덱스: ${currentQuestion!.correctAnswer}, 정답 여부: ${isCorrect}`);

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
              onClick={() => handleAnswer(index)} // 섞인 인덱스를 그대로 사용
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
