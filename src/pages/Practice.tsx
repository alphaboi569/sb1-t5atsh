import React, { useState } from 'react';
import { Brain, List, BarChart2, MessageSquare } from 'lucide-react';

function Practice() {
  const [selectedTopic, setSelectedTopic] = useState('');
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Практика</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <List className="h-8 w-8 text-blue-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Список задач</h2>
          <p className="text-gray-600">Полный каталог задач по темам</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <Brain className="h-8 w-8 text-green-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Тестовый вариант</h2>
          <p className="text-gray-600">Составить индивидуальный вариант</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <BarChart2 className="h-8 w-8 text-purple-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Статистика</h2>
          <p className="text-gray-600">Анализ вашего прогресса</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <MessageSquare className="h-8 w-8 text-orange-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">ИИ-помощник</h2>
          <p className="text-gray-600">Персональный репетитор</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
        <h2 className="text-2xl font-semibold mb-6">Темы для практики</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`p-4 rounded-lg text-left transition-colors ${
                selectedTopic === topic.id
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
              }`}
            >
              <h3 className="font-semibold text-gray-900">{topic.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{topic.count} задач</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const topics = [
  { id: '1', name: 'Планиметрия', count: 269 },
  { id: '2', name: 'Векторы', count: 56 },
  { id: '3', name: 'Стереометрия', count: 319 },
  { id: '4', name: 'Теория вероятностей', count: 123 },
  { id: '5', name: 'Простейшие уравнения', count: 68 },
  { id: '6', name: 'Производная', count: 80 },
  // Add more topics as needed
];

export default Practice;