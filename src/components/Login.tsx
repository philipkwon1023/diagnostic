import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { LogIn, User } from 'lucide-react';

interface LoginProps {
  setIsLoggedIn: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic here
    // For now, we'll just simulate a successful login
    localStorage.setItem('token', 'fake-jwt-token');
    setIsLoggedIn(true);
    setUser({ username });
    navigate('/test');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg w-full max-w-md">
        <h3 className="text-3xl font-bold text-center text-blue-600 mb-6">수학 진단평가 로그인</h3>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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