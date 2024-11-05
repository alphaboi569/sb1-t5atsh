import React from 'react';
import { MapPin } from 'lucide-react';

function Theory() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Теория</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div key={topic.id} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start justify-between">
                <MapPin className="h-8 w-8 text-blue-600" />
                <span className="text-sm text-gray-500">{topic.subtopics.length} подтем</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 mb-2">{topic.name}</h2>
              <div className="space-y-2">
                {topic.subtopics.map((subtopic, index) => (
                  <div
                    key={index}
                    className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
                  >
                    • {subtopic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const topics = [
  {
    id: '1',
    name: 'Планиметрия',
    subtopics: [
      'Треугольники',
      'Четырехугольники',
      'Окружность',
      'Площади фигур',
    ],
  },
  {
    id: '2',
    name: 'Векторы',
    subtopics: [
      'Сложение векторов',
      'Умножение на число',
      'Скалярное произведение',
    ],
  },
  {
    id: '3',
    name: 'Стереометрия',
    subtopics: [
      'Призма и пирамида',
      'Тела вращения',
      'Сечения',
      'Объемы тел',
    ],
  },
  // Add more topics as needed
];

export default Theory;