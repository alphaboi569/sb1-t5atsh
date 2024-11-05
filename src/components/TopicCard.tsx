import React from 'react';
import { ChevronRight } from 'lucide-react';

interface TopicCardProps {
  title: string;
  description: string;
  progress: number;
  taskCount: number;
  icon: React.ReactNode;
}

function TopicCard({ title, description, progress, taskCount, icon }: TopicCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            {icon}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
          
          <div className="mt-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-gray-600">Прогресс</span>
              <span className="text-sm font-medium text-gray-900">{progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-600">{taskCount} задач</span>
            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
              <span className="text-sm">Перейти</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopicCard;