export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
          <p className="text-gray-600 mb-4">Last updated: January 2026</p>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information that you provide directly to us, including name, email address, phone number, and payment information when you register for our courses.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-gray-700">
              We use the information we collect to provide, maintain, and improve our services, process payments, send you course materials and updates, and respond to your inquiries.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information. All payment information is processed securely through our payment providers.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at support@iiskills.cloud
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
