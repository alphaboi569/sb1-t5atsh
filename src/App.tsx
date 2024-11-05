import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, BookOpen, GraduationCap, User } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Theory from './pages/Theory';
import Practice from './pages/Practice';
import Profile from './pages/Profile';
import AIChat from './components/AIChat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <AIChat />
      </div>
    </Router>
  );
}

export default App;