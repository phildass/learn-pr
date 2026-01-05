import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Indian PR Pitch */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Public Relations for <span className="text-amber-400">India's Growing Economy</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Build your career in India's dynamic PR industry. Learn from real-world case studies, industry experts, and practical scenarios tailored for the Indian market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-lg"
              >
                Start Learning Today
              </Link>
              <Link
                href="/modules"
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg hover:bg-amber-400 hover:text-blue-900 transition-colors text-lg"
              >
                Explore Modules
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Outcome Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What You'll Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Skill 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Media Relations</h3>
              <p className="text-gray-600">Build strong relationships with Indian media outlets, journalists, and influencers.</p>
            </div>

            {/* Skill 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Crisis Management</h3>
              <p className="text-gray-600">Handle crises effectively with strategies proven in the Indian market context.</p>
            </div>

            {/* Skill 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Digital PR</h3>
              <p className="text-gray-600">Master social media, content marketing, and online reputation management.</p>
            </div>

            {/* Skill 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Strategic Communication</h3>
              <p className="text-gray-600">Craft compelling messages that resonate with Indian audiences and stakeholders.</p>
            </div>

            {/* Skill 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">English Communication</h3>
              <p className="text-gray-600">Perfect your business English for professional PR communication in India.</p>
            </div>

            {/* Skill 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Event Management</h3>
              <p className="text-gray-600">Plan and execute successful PR events, launches, and press conferences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Comprehensive Learning Path
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
                <div className="text-5xl font-bold text-blue-600 mb-2">10</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Modules</div>
                <p className="text-gray-700">Comprehensive curriculum covering all aspects of modern PR</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg">
                <div className="text-5xl font-bold text-amber-600 mb-2">100</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Lessons</div>
                <p className="text-gray-700">In-depth lessons with practical exercises and real-world examples</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
                <div className="text-5xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Access</div>
                <p className="text-gray-700">Learn at your own pace with lifetime access to course materials</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg">
                <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Indian Focus</div>
                <p className="text-gray-700">Content tailored specifically for the Indian PR landscape</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Monitor Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Stay Updated with Indian PR News
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Access live news from India's PR and media industry. Stay informed about trends, campaigns, and opportunities.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Latest PR News</h3>
              <Link href="/news" className="text-blue-600 hover:text-blue-700 font-medium">
                View All →
              </Link>
            </div>
            <div className="space-y-4">
              {/* Sample news items */}
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-gray-900 mb-1">Industry Insights & Trends</h4>
                <p className="text-gray-600 text-sm">Real-time updates from leading Indian media outlets and PR sources</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-semibold text-gray-900 mb-1">Campaign Analysis</h4>
                <p className="text-gray-600 text-sm">Learn from successful PR campaigns across India</p>
              </div>
              <div className="pb-4">
                <h4 className="font-semibold text-gray-900 mb-1">Market Updates</h4>
                <p className="text-gray-600 text-sm">Stay ahead with the latest market trends and opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your PR Career?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Join thousands of PR professionals who have elevated their careers with Learn PR.
          </p>
          <Link
            href="/register"
            className="inline-block px-8 py-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}
