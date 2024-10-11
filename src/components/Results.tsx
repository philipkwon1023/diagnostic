import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: number;
  concept: number;
}

const Results: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  const { userAnswers, timeSpent, questions } = location.state as { userAnswers: number[], timeSpent: number[], questions: Question[] };

  const score = userAnswers.reduce((acc, answer, index) => acc + (answer === questions[index].correctAnswer ? 1 : 0), 0);
  const totalQuestions = questions.length;
  const answeredQuestions = userAnswers.length;
  const averageTime = timeSpent.reduce((a, b) => a + b, 0) / answeredQuestions;

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
        text: '진단평가 결과',
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
    navigate('/test');
  };

  return (
    <div className="container mx-auto p-4 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">진단평가 결과</h1>
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
          <h2 className="text-2xl font-semibold mb-4">문항별 결과</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">문항</th>
                  <th className="px-6 py-3">정답 여부</th>
                  <th className="px-6 py-3">소요 시간</th>
                  <th className="px-6 py-3">난이도</th>
                  <th className="px-6 py-3">연관 개념</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((question, index) => (
                  <tr key={question.id} className="bg-white border-b">
                    <td className="px-6 py-4">문제 {index + 1}</td>
                    <td className="px-6 py-4">
                      {index < userAnswers.length ? 
                        (userAnswers[index] === question.correctAnswer ? 
                          <span className="text-green-600">정답</span> : 
                          <span className="text-red-600">오답</span>
                        ) : 
                        <span className="text-yellow-600">미응답</span>
                      }
                    </td>
                    <td className="px-6 py-4">{timeSpent[index] ? `${timeSpent[index].toFixed(2)}초` : 'N/A'}</td>
                    <td className="px-6 py-4">{question.difficulty}/5</td>
                    <td className="px-6 py-4">{question.concept}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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