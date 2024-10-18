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
  const score = userAnswers.reduce((acc, answer, index) => acc + (answer === questions[index].correctAnswer - 1 ? 1 : 0), 0);
  const totalQuestions = questions.length;
  const answeredQuestions = userAnswers.length;
  const averageTime = timeSpent.reduce((a, b) => a + b, 0) / answeredQuestions;

  // 나머지 코드는 동일...

  return (
    <>
    <Header />
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-100 to-white min-h-screen mt-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* ... */}
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
              문제 {index + 1} {Array(5).fill('★').fill('☆', question.difficulty).join('')}
            </h3>
            <div className="mb-2">{parseMathText(question.text)}</div>
            {question.hasImage && (
              <div className="mt-2 mb-2 flex justify-center">
                <img src={question.imageUrl} alt="문제 이미지" className="max-w-full h-auto" />
              </div>
            )}
            <p className="mb-2">사용자 답변: {parseMathText(question.options[userAnswers[index]])}</p>
            <p className="mb-2">정답: {parseMathText(question.options[question.correctAnswer - 1])}</p>
            <p>소요 시간: {timeSpent[index].toFixed(0)}초</p>
          </div>
        ))}
        {/* ... */}
      </div>
    </div>
  </>
  );
};

export default Results;
