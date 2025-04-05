import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import UserProfile from './components/userProfile'; // Adjust the path if necessary

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={isLogin ? <UserProfile /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/userProfile/:username" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;