import React from 'react';
import { ChevronRight } from 'lucide-react';

function TopicProgress() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Прогресс по темам</h2>
      <div className="space-y-4">
        {topicProgress.map((topic) => (
          <div key={topic.name} className="group">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">{topic.name}</span>
              <span className="text-sm text-gray-600">{topic.progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
                style={{ width: `${topic.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700">
        <span>Посмотреть все темы</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

const topicProgress = [
  { name: 'Планиметрия', progress: 85 },
  { name: 'Векторы', progress: 70 },
  { name: 'Стереометрия', progress: 60 },
  { name: 'Теория вероятностей', progress: 45 },
  { name: 'Производная', progress: 90 },
];

export default TopicProgress;