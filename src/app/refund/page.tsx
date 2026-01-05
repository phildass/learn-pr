export default function RefundPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Refund Policy</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 prose max-w-none">
          <p className="text-gray-600 mb-4">Last updated: January 2026</p>
          
          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7-Day Money-Back Guarantee</h2>
            <p className="text-gray-700">
              We offer a full refund within 7 days of purchase if you are not satisfied with the course. No questions asked.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">How to Request a Refund</h2>
            <p className="text-gray-700 mb-3">
              To request a refund, please follow these steps:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Contact our support team at support@iiskills.cloud within 7 days of purchase</li>
              <li>Provide your order number and registered email address</li>
              <li>Briefly explain your reason for the refund (optional)</li>
            </ol>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Refund Processing</h2>
            <p className="text-gray-700">
              Refunds are processed within 5-7 business days. The amount will be credited back to your original payment method.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Conditions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Refund requests must be made within 7 days of purchase</li>
              <li>Only one refund per user is allowed</li>
              <li>Refunds are not available for discounted or promotional purchases after the 7-day period</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Questions?</h2>
            <p className="text-gray-700">
              If you have any questions about our refund policy, please contact us at support@iiskills.cloud
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
