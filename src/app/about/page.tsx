export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Learn PR</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              Learn PR is dedicated to empowering Public Relations professionals in India with world-class education and practical skills. We bridge the gap between academic knowledge and industry requirements, providing comprehensive training tailored for the Indian market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Why Choose Learn PR?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>100 comprehensive lessons across 10 specialized modules</li>
              <li>Content specifically designed for the Indian PR landscape</li>
              <li>Real-world case studies from successful Indian campaigns</li>
              <li>Expert counselor support throughout your journey</li>
              <li>Live news and job aggregation for industry insights</li>
              <li>Lifetime access to all course materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Part of iiskills.cloud Network</h2>
            <p className="text-gray-700">
              Learn PR is proudly part of the iiskills.cloud ecosystem, joining other specialized learning platforms like learn-math, learn-data-science, and learnwinning. Together, we're building India's premier online education network.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
