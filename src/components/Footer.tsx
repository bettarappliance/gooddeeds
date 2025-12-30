export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 pb-8">
          {/* Company Information Column */}
          <div>
            <div className="mb-4">
              <a href="/" className="text-2xl font-semibold hover:opacity-80 transition-opacity cursor-pointer inline-block" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                <span className="text-[#BA1038]">Good</span>
                <span className="text-[#096DBC]">Deeds</span>
              </a>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Your trusted partner for real estate, home improvement, renovation, plumbing, handyman, and appliance services in Washington, DC since 1880.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/jack.deeds" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jackdeeds/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Jack Deeds LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/good-deeds-accounting-software/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Good Deeds Company LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="/contact-us" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="/services" className="text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="/properties" className="text-gray-600 hover:text-gray-900">Properties</a></li>
              <li><a href="/contact-us" className="text-gray-600 hover:text-gray-900">Request Service</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">202-297-2432</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Washington, DC</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">jack@gooddeeds.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div>
              <p className="text-gray-500 text-sm">&copy; 2025 Good Deeds. All rights reserved.</p>
            </div>

            {/* Policy Links */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

