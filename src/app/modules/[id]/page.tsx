import Link from 'next/link';
import { notFound } from 'next/navigation';
import { modules, sampleLessons } from '@/data/curriculum';

export default async function ModuleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const module = modules.find(m => m.id === id);
  
  if (!module) {
    notFound();
  }

  const lessons = sampleLessons[id as keyof typeof sampleLessons] || [];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/modules" className="text-blue-600 hover:text-blue-700">
            ← Back to Modules
          </Link>
        </nav>

        {/* Module Header */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="text-6xl mr-4">{module.icon}</div>
            <div>
              <div className="text-sm opacity-80 mb-2">Module {module.order}</div>
              <h1 className="text-3xl md:text-4xl font-bold">{module.title}</h1>
            </div>
          </div>
          <p className="text-lg text-gray-200 mb-4">{module.description}</p>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              module.level === 'beginner' ? 'bg-green-500 text-white' :
              module.level === 'intermediate' ? 'bg-blue-500 text-white' :
              'bg-purple-500 text-white'
            }`}>
              {module.level.charAt(0).toUpperCase() + module.level.slice(1)}
            </span>
            <span className="text-sm">{module.lessons} Lessons</span>
          </div>
        </div>

        {/* Lessons List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Lessons</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {lessons.length > 0 ? (
              lessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.id}`}
                  className="block p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                        {lesson.order}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-gray-500">{lesson.duration} minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-600">→</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-6">
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Lessons for this module are being prepared.</p>
                  <p className="text-sm text-gray-400">Check back soon for updates!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Module Navigation */}
        {lessons.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Link
              href={`/lessons/${lessons[0].id}`}
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Module
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
