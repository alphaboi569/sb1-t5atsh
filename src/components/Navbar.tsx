import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, GraduationCap, User } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">MathPrep Pro</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/theory"
              className={`flex items-center space-x-1 ${
                isActive('/theory') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Теория</span>
            </Link>
            
            <Link
              to="/practice"
              className={`flex items-center space-x-1 ${
                isActive('/practice') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Практика</span>
            </Link>
            
            <Link
              to="/profile"
              className={`flex items-center space-x-1 ${
                isActive('/profile') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <User className="h-5 w-5" />
              <span>Личный кабинет</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}