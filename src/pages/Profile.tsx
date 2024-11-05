import React from 'react';
import { BarChart2, Award, Settings, CreditCard } from 'lucide-react';

function Profile() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center space-x-4">
          <div className="h-20 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
            ИП
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Иван Петров</h1>
            <p className="text-gray-600">Премиум подписка</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <BarChart2 className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Статистика</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Решено задач</span>
                <span className="font-semibold">142 / 200</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Изучено тем</span>
                <span className="font-semibold">8 / 12</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-600 rounded-full" style={{ width: '66%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Award className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Достижения</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div key={achievement.name} className="flex items-center space-x-2">
                <div className={`h-10 w-10 rounded-full ${achievement.bgColor} flex items-center justify-center`}>
                  {achievement.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{achievement.name}</p>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Settings className="h-6 w-6 text-gray-600" />
            <h2 className="text-xl font-semibold">Настройки</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Уведомления</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" checked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Темная тема</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-2 mb-6">
            <CreditCard className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">План подписки</h2>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="font-semibold text-green-800">Премиум</p>
            <p className="text-sm text-green-600 mt-1">Активно до 12.12.2024</p>
          </div>
          
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Продлить подписку
          </button>
        </div>
      </div>
    </div>
  );
}

const achievements = [
  {
    name: 'Первые шаги',
    description: 'Решено 10 задач',
    icon: '🌟',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Эксперт',
    description: '100 задач подряд',
    icon: '🏆',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Быстрый старт',
    description: '5 дней подряд',
    icon: '⚡',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Мастер теории',
    description: 'Все темы изучены',
    icon: '📚',
    bgColor: 'bg-green-100',
  },
];

export default Profile;