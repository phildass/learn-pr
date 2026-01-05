import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-amber-400">Learn</span>
              <span className="text-white">PR</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering Public Relations professionals in India with world-class education and industry insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/modules" className="hover:text-amber-400 transition-colors">
                  Course Modules
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/news" className="hover:text-amber-400 transition-colors">
                  PR News
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-amber-400 transition-colors">
                  Job Board
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-amber-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-amber-400 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-amber-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Learn PR - Part of iiskills.cloud. All rights reserved.</p>
          <p className="mt-2">
            <a 
              href="https://iiskills.cloud" 
              className="text-amber-400 hover:text-amber-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              iiskills.cloud Network
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
