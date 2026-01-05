export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
          <p className="text-gray-600 mb-4">Last updated: January 2026</p>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using Learn PR, you accept and agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Course Access</h2>
            <p className="text-gray-700">
              Upon successful payment, you will receive lifetime access to all course materials. Access is granted for personal use only and may not be shared.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Payment Terms</h2>
            <p className="text-gray-700">
              All payments are processed securely. Course fees are non-refundable except as outlined in our Refund Policy.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p className="text-gray-700">
              All course content, including videos, text, and materials, are the intellectual property of Learn PR and iiskills.cloud.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Contact</h2>
            <p className="text-gray-700">
              For questions about these terms, contact us at support@iiskills.cloud
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
