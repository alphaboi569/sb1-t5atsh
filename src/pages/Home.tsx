import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Trophy, Sparkles } from 'lucide-react';
import TopicProgress from '../components/TopicProgress';
import RecentActivity from '../components/RecentActivity';

function Home() {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Готовься к экзаменам эффективно</h1>
        <p className="text-xl opacity-90 mb-6">Персонализированная подготовка с использованием ИИ</p>
        <div className="flex space-x-4">
          <Link
            to="/practice"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Начать практику
          </Link>
          <Link
            to="/theory"
            className="bg-blue-500 bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-30 transition-colors"
          >
            Изучить теорию
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Brain className="h-8 w-8 text-blue-600" />}
          title="Задач решено"
          value="142"
          subtitle="из 200 запланированных"
        />
        <StatCard
          icon={<BookOpen className="h-8 w-8 text-green-600" />}
          title="Тем изучено"
          value="8"
          subtitle="из 12 основных тем"
        />
        <StatCard
          icon={<Trophy className="h-8 w-8 text-yellow-600" />}
          title="Достижений"
          value="4"
          subtitle="получено за неделю"
        />
        <StatCard
          icon={<Sparkles className="h-8 w-8 text-purple-600" />}
          title="Дней подряд"
          value="5"
          subtitle="текущая серия"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <TopicProgress />
        <RecentActivity />
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-start justify-between">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-4">{value}</h3>
      <p className="font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  );
}

export default Home;