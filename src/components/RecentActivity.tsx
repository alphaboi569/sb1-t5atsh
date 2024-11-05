import React from 'react';
import { CheckCircle2, XCircle, Clock } from 'lucide-react';

function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-6">Недавняя активность</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="mt-1">
              {activity.status === 'correct' && (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              )}
              {activity.status === 'incorrect' && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
              {activity.status === 'in-progress' && (
                <Clock className="h-5 w-5 text-yellow-500" />
              )}
            </div>
            <div>
              <p className="text-gray-900">{activity.description}</p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full text-center text-blue-600 hover:text-blue-700">
        Показать больше
      </button>
    </div>
  );
}

const activities = [
  {
    status: 'correct',
    description: 'Решена задача по теме "Векторы"',
    time: '15 минут назад',
  },
  {
    status: 'incorrect',
    description: 'Попытка решения задачи по стереометрии',
    time: '1 час назад',
  },
  {
    status: 'in-progress',
    description: 'Начато изучение темы "Производная"',
    time: '2 часа назад',
  },
  {
    status: 'correct',
    description: 'Завершен тест по планиметрии',
    time: '3 часа назад',
  },
  {
    status: 'correct',
    description: 'Решена задача по теории вероятностей',
    time: 'вчера',
  },
];

export default RecentActivity;