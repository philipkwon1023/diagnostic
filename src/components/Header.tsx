import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white p-1 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold cursor-pointer" onClick={() => navigate('/')}>
          Math-Ray
        </h1>
        <nav className="flex items-center w-full">
          {/*<button
            onClick={() => navigate('/test')}
            className="hover:underline mr-4"
          >
            홈
          </button>
          <button
            onClick={() => navigate('/results')}
            className="hover:underline mr-4"
          >
            결과 보기
          </button>*/}
          <button
            onClick={handleLogout}
            className="ml-auto flex items-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-150 ease-in-out"
          >
            <LogOut className="mr-2 h-5 w-5" />
            로그아웃
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;