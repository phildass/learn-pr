export default function FAQPage() {
  const faqs = [
    {
      question: 'What is included in the Learn PR course?',
      answer: 'The course includes 10 comprehensive modules with 100 lessons covering all aspects of Public Relations. You get lifetime access to video lessons, reading materials, quizzes, and case studies.'
    },
    {
      question: 'How much does the course cost?',
      answer: 'The course is available for a one-time payment of ₹4,999. This gives you lifetime access to all current and future course materials.'
    },
    {
      question: 'How do I make payment?',
      answer: 'After registration, you will be provided with a UPI payment link. Once payment is confirmed, you will receive an access code via email to activate your account.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes! We offer a 7-day money-back guarantee. If you are not satisfied with the course within the first 7 days, you can request a full refund.'
    },
    {
      question: 'How long do I have access to the course?',
      answer: 'You have lifetime access to all course materials. Learn at your own pace, anytime, anywhere.'
    },
    {
      question: 'Do I get a certificate?',
      answer: 'Yes! Upon completing all modules and passing the assessments, you will receive a certificate of completion from Learn PR / iiskills.cloud.'
    },
    {
      question: 'Is the content suitable for beginners?',
      answer: 'Absolutely! The course starts with beginner-level content and progressively moves to intermediate and advanced topics. No prior PR experience is required.'
    },
    {
      question: 'Can I access the course on mobile devices?',
      answer: 'Yes! The platform is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile.'
    },
    {
      question: 'Is support available if I have questions?',
      answer: 'Yes! You can use the "Write to Counselor" feature to submit support tickets. Our expert counselors respond within 24 hours.'
    },
    {
      question: 'Are the lessons in English?',
      answer: 'Yes, all lessons are in English. We also have a dedicated module on English Communication for PR professionals to help perfect your business English.'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
          <p className="text-gray-700 mb-4">Our counselors are here to help!</p>
          <a
            href="/support"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
