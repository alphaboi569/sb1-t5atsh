import React, { useState } from 'react';
import { Settings, RefreshCw } from 'lucide-react';

function TaskGenerator() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [taskCount, setTaskCount] = useState(10);
  
  const generateTest = () => {
    // Here would be the logic to generate a test based on selected topics
    console.log('Generating test with:', { selectedTopics, taskCount });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Генератор вариантов</h2>
        <button className="text-blue-600 hover:text-blue-700">
          <Settings className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Выберите темы
          </label>
          <div className="grid grid-cols-2 gap-2">
            {availableTopics.map((topic) => (
              <label
                key={topic.id}
                className="flex items-center space-x-2 p-2 rounded border cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedTopics([...selectedTopics, topic.id]);
                    } else {
                      setSelectedTopics(selectedTopics.filter(id => id !== topic.id));
                    }
                  }}
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900">{topic.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Количество задач
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={taskCount}
            onChange={(e) => setTaskCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>5</span>
            <span>{taskCount}</span>
            <span>30</span>
          </div>
        </div>

        <button
          onClick={generateTest}
          className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="h-5 w-5" />
          <span>Сгенерировать вариант</span>
        </button>
      </div>
    </div>
  );
}

const availableTopics = [
  { id: '1', name: 'Планиметрия' },
  { id: '2', name: 'Векторы' },
  { id: '3', name: 'Стереометрия' },
  { id: '4', name: 'Теория вероятностей' },
  { id: '5', name: 'Уравнения' },
  { id: '6', name: 'Производная' },
];

export default TaskGenerator;