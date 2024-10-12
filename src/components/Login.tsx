import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { LogIn, User } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useUser(); // 전역 상태에서 로그인 함수 가져오기

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // 실제 로그인 로직 구현 부분 (현재는 임시 로그인 처리)
    localStorage.setItem('token', 'fake-jwt-token');
    setIsLoggedIn(true); // 로그인 상태를 true로 설정
    setUser({ username }); // 사용자 정보 설정
    navigate('/test');
  };

  return (
  <div className="flex items-center justify-center h-screen bg-gradient-to-b from-blue-100 to-white">
    <div className="px-4 py-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
      <img 
        src="https://i.ibb.co/KmS3Vwr/DALL-E-2024-10-11-17-59-36-Main-image-for-a-math-skills-diagnostic-service-using-AI-with-an-X-ray-th.webp" 
        alt="Math Skills Diagnostic Service" 
        className="w-full h-auto mb-4 rounded-lg object-cover"
      />
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">Math-Ray</h3>
      <form onSubmit={handleLogin}>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
              사용자 이름
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <User className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="text"
                placeholder="사용자 이름"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
              비밀번호
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-gray-400" />
              </span>
              <input
                type="password"
                placeholder="비밀번호"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <button
              type="submit"
              className="w-full px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out"
            >
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);
};

export default Login;
