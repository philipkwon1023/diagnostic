import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import DiagnosticTest from './components/DiagnosticTest';
import Results from './components/Results';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };

    checkLoginStatus();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route path="/login" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/test" />} />
            <Route path="/test" element={isLoggedIn ? <DiagnosticTest /> : <Navigate to="/login" />} />
            <Route path="/results" element={isLoggedIn ? <Results /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isLoggedIn ? "/test" : "/login"} />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;