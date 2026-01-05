import Link from 'next/link';
import { modules } from '@/data/curriculum';

export default function ModulesPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Course Modules
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master Public Relations through our comprehensive 10-module curriculum with 100 lessons
          </p>
        </div>

        {/* Progress Stats */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">10</div>
              <div className="text-gray-600">Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-600">100</div>
              <div className="text-gray-600">Total Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">0%</div>
              <div className="text-gray-600">Your Progress</div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={`/modules/${module.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 cursor-pointer group"
            >
              {/* Icon and Level */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{module.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  module.level === 'beginner' ? 'bg-green-100 text-green-800' :
                  module.level === 'intermediate' ? 'bg-blue-100 text-blue-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {module.level.charAt(0).toUpperCase() + module.level.slice(1)}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                Module {module.order}: {module.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4">
                {module.description}
              </p>

              {/* Lesson Count */}
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{module.lessons} lessons</span>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">
                  Start Module →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ready to start your PR journey?</p>
          <Link
            href="/register"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
}
