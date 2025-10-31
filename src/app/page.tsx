import Image from "next/image";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Red Contact Bar */}
      <div className="bg-[#BA1038] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-6">
              <a href="tel:202-297-2432" className="flex items-center gap-2 hover:text-gray-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 202-297-2432
              </a>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Rittenhouse ST, NW Washington, DC 20015
              </div>
              <a href="mailto:jack@gooddeeds.com" className="flex items-center gap-2 hover:text-gray-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                jack@gooddeeds.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/jack.deeds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/jackdeeds/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="Jack Deeds LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/good-deeds-accounting-software/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
                aria-label="Good Deeds Company LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* White Navigation Bar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="text-3xl hover:opacity-80 transition-opacity cursor-pointer" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                <span className="text-[#BA1038]">Good</span>
                <span className="text-[#096DBC]">Deeds</span>
              </a>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 font-medium">About</a>
              <a href="#properties" className="text-gray-900 hover:text-blue-600 font-medium">Properties</a>
              <div className="relative group">
                <a href="#services" className="text-gray-900 hover:text-blue-600 font-medium flex items-center gap-1">
                  Services
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="#buy" className="block px-4 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">Buy a Home</a>
                  <a href="#sell" className="block px-4 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">Sell a Home</a>
                  <a href="#rent" className="block px-4 py-2 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">Rent a Home</a>
                </div>
              </div>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 font-medium">Contact Us</a>
              <a href="#blog" className="text-gray-900 hover:text-blue-600 font-medium">Blog</a>
            </nav>
            <button className="bg-[#096DBC] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/75 to-white/70 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bethesdy.jpg')"
            }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="text-5xl md:text-7xl font-serif text-black mb-6 leading-tight" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
            Real Estate Done Right<br />
            With a{" "}
            <span className="text-[#BA1038]">Good</span>{" "}
            <span className="text-[#096DBC]">Deed</span>{" "}
            in Every Home
          </h1>
          <p className="text-xl md:text-2xl text-gray-800 mb-8 font-sans whitespace-nowrap">
            Helping you buy, sell, and enhance properties with the support of Bettar Services.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-[#096DBC] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg">
              Book a Consultation
            </button>
            <button className="bg-[#BA1038] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors shadow-lg">
              Request a Renovation Quote
            </button>
          </div>
          
          {/* Contact Info with Icons - Below buttons */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call 202-297-2432</span>
            </div>
            <div className="flex items-center gap-2 text-gray-900 font-semibold">
              <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Washington, DC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Header */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center">
              <Image 
                src="/lf-logo.jpg" 
                alt="Long & Foster Real Estate" 
                width={300} 
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center">
              <Image 
                src="/leading-real-estate-companies-of-the-world-estate-agent-company-peachtree-city-png-favpng-F0P6dPBPPWXDAt2vwCJa5gPN4-removebg-preview.png" 
                alt="Leading Real Estate Companies of the World" 
                width={250} 
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Jack Deeds Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div>
              <Image 
                src="/jack.jpg" 
                alt="Jack Deeds, CPA" 
                width={600} 
                height={800}
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                About Jack Deeds, CPA
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                With over 30 years of experience in financial management and business leadership, 
                Jack Deeds brings precision, integrity, and a results-oriented approach to real estate. 
                His "Good Deeds" philosophy centers on helping clients navigate the complexities of 
                buying and selling properties with transparency and trust.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                Jack partners with <span className="text-[#096DBC] font-semibold">Bettar Services</span> to 
                provide comprehensive property solutions, from real estate transactions to home repairs and 
                appliance services, ensuring every client receives exceptional care from start to finish.
              </p>

              {/* Key Highlights */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#096DBC] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">30+ Years in Finance & Business Leadership</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#096DBC] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Serving Clients Across Washington, DC</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#096DBC] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Partnering with Bettar Services for Full-Service Property Solutions</p>
                </div>
              </div>

              {/* Know More Button */}
              <div className="flex justify-end">
                <button className="flex items-center gap-3 bg-white border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:border-[#096DBC] hover:text-[#096DBC] transition-colors">
                  Know More
                  <div className="w-6 h-6 bg-[#096DBC] rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Footer */}
      <section className="bg-[#096DBC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-3xl md:text-4xl lg:text-4xl text-white italic mb-4 leading-tight" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
            "Real estate isn't just about transactions – it's about helping people make the best decisions for their future.
            Every deal is an opportunity to do a good deed."
          </p>
          <p className="text-xl md:text-2xl text-white text-right italic mt-8" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
            Jack Deeds, CPA
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm md:text-base text-[#096DBC] uppercase mb-2">OUR SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#096DBC]" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Our Main Focus
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Buy a Home */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-transparent hover:border-[#096DBC] transition-colors duration-200">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-[#096DBC] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#096DBC] mb-4">Buy a Home</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="#" className="text-[#096DBC] font-semibold hover:underline">
                Find A Home →
              </a>
            </div>

            {/* Rent a Home */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-transparent hover:border-[#096DBC] transition-colors duration-200">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-[#096DBC] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#096DBC] mb-4">Rent a Home</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="#" className="text-[#096DBC] font-semibold hover:underline">
                Find A Home →
              </a>
            </div>

            {/* Sell a Home */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center border-b-4 border-transparent hover:border-[#096DBC] transition-colors duration-200">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border-2 border-[#096DBC] flex items-center justify-center">
                  <svg className="w-12 h-12 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#096DBC] mb-4">Sell a Home</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="#" className="text-[#096DBC] font-semibold hover:underline">
                Find A Home →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-stretch">
            {/* Image (narrower) */}
            <div className="md:col-span-2 rounded-[40px] overflow-hidden shadow-sm">
        <Image
                src="/shaw_rowhouses_600.jpg" 
                alt="Washington DC Rowhouses" 
                width={900} 
                height={900} 
                className="h-full w-full object-cover"
          priority
        />
            </div>

            {/* Copy (wider) */}
            <div className="md:col-span-3 bg-gray-50 rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-sm">
              <h3 
                className="text-[#096DBC] text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
                style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}
              >
                We can bring to life everything you've ever envisioned and dreamed of – your ideals and desires are our creations.
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Our purpose is to transform your wildest dreams into reality. Regardless of how unconventional your vision may be, we possess the capability to craft your dream home, fulfilling your every desire.
              </p>
              <div>
                <button className="inline-flex items-center gap-3 bg-[#096DBC] text-white px-6 py-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  See More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bettar Services Partnership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Header */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-lg text-gray-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                In Partnership with
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A3387]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Bettar Services
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-lg text-gray-900 leading-relaxed" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                Bettar Services is our trusted partner for home improvements, renovations, and property maintenance — ensuring every home is move-in ready and market-ready.
              </p>
            </div>
          </div>
        </div>
      </section>
              
      {/* Appliance Sales Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="grid md:grid-cols-2">
              {/* Left Side - Appliances Image */}
              <div className="h-96 md:h-auto relative">
                <Image
                  src="/appliances.jpg"
                  alt="Bettar Appliance Sales and Services"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Right Side - Content Card */}
              <div className="bg-[#002D72] p-10 md:p-16 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10">
                          <Image
                            src="/bettarlogo.png"
                            alt="Bettar Logo"
                            width={40}
                            height={40}
                            className="w-10 h-10"
                          />
                        </div>
                        <span className="text-[#E0E0E0] text-1xl font-medium tracking-[2px] uppercase">BETTAR SERVICES</span>
                      </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      Sales and Services
                    </h2>
                    <div className="space-y-4 mb-8">
                      <p className="text-white text-lg leading-relaxed">
                        Discover our wide selection of quality appliances for your home. From refrigerators and washers to ovens and dishwashers, we offer top brands at competitive prices with professional installation and warranty coverage. Bettar appliance sales and service since 1945.
                      </p>
                      <p className="text-white text-lg leading-relaxed">
                        Our experienced technicians provide expert installation, maintenance, and repair services for all major appliance brands. We&apos;re committed to keeping your appliances running efficiently for years to come. Trust Bettar for all your appliance needs in Kensington, MD.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end md:justify-end">
                    <a href="https://www.bettarservices.com/" className="bg-[#D32F2F] text-white px-8 py-3 rounded-lg hover:bg-[#b91c1c] transition-colors font-bold text-lg">
                      Visit Bettar Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* Services Section */}
        <section className="py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="/renovations.jpg"
                  alt="Professional kitchen renovation and remodeling services in Kensington MD - modern kitchen design with island and stainless steel appliances"
                  fill
                  className="object-cover"
                />
                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[rgba(0,45,114,0.3)]"></div>
                {/* Overlapping icon circle */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#002D72] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#002D72] mb-3">Renovations and Remodeling</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  Transform your home with our expert renovation and remodeling services. From kitchen makeovers to bathroom upgrades, we bring your vision to life with quality craftsmanship and attention to detail.
                </p>
                <a href="https://www.bettarservices.com/services/renovations" className="text-[#002D72] font-bold hover:underline inline-block mt-auto">View Service →</a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="/plumbing.jpeg"
                  alt="Professional plumbing and heating repair services in Kensington MD - skilled technician working on pipe installation and maintenance"
                  fill
                  className="object-cover"
                />
                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[rgba(0,45,114,0.3)]"></div>
                {/* Overlapping icon circle */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#002D72] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path fill="#ffffff" d="M541.4 162.6C549 155 561.7 156.9 565.5 166.9C572.3 184.6 576 203.9 576 224C576 312.4 504.4 384 416 384C398.5 384 381.6 381.2 365.8 376L178.9 562.9C150.8 591 105.2 591 77.1 562.9C49 534.8 49 489.2 77.1 461.1L264 274.2C258.8 258.4 256 241.6 256 224C256 135.6 327.6 64 416 64C436.1 64 455.4 67.7 473.1 74.5C483.1 78.3 484.9 91 477.4 98.6L388.7 187.3C385.7 190.3 384 194.4 384 198.6L384 240C384 248.8 391.2 256 400 256L441.4 256C445.6 256 449.7 254.3 452.7 251.3L541.4 162.6z"/></svg>
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#002D72] mb-3">Plumbing and Heating</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  Keep your home comfortable year-round with our professional plumbing and heating services. From emergency repairs to system installations, we ensure your home&apos;s comfort and safety. Expert heating maintenance in Kensington, MD and surrounding areas.
                </p>
                <a href="https://www.bettarservices.com/services/plumbing" className="text-[#002D72] font-bold hover:underline inline-block mt-auto">View Service →</a>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="/handyman.jpg"
                  alt="Professional handyman repair and maintenance services in Kensington MD - skilled craftsman with tools and safety equipment"
                  fill
                  className="object-cover"
                />
                {/* Blue overlay */}
                <div className="absolute inset-0 bg-[rgba(0,45,114,0.3)]"></div>
                {/* Overlapping icon circle */}
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#002D72] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path fill="#ffffff" d="M102.8 57.3C108.2 51.9 116.6 51.1 123 55.3L241.9 134.5C250.8 140.4 256.1 150.4 256.1 161.1L256.1 210.7L346.9 301.5C380.2 286.5 420.8 292.6 448.1 320L574.2 446.1C592.9 464.8 592.9 495.2 574.2 514L514.1 574.1C495.4 592.8 465 592.8 446.2 574.1L320.1 448C292.7 420.6 286.6 380.1 301.6 346.8L210.8 256L161.2 256C150.5 256 140.5 250.7 134.6 241.8L55.4 122.9C51.2 116.6 52 108.1 57.4 102.7L102.8 57.3zM247.8 360.8C241.5 397.7 250.1 436.7 274 468L179.1 563C151 591.1 105.4 591.1 77.3 563C49.2 534.9 49.2 489.3 77.3 461.2L212.7 325.7L247.9 360.8zM416.1 64C436.2 64 455.5 67.7 473.2 74.5C483.2 78.3 485 91 477.5 98.6L420.8 155.3C417.8 158.3 416.1 162.4 416.1 166.6L416.1 208C416.1 216.8 423.3 224 432.1 224L473.5 224C477.7 224 481.8 222.3 484.8 219.3L541.5 162.6C549.1 155.1 561.8 156.9 565.6 166.9C572.4 184.6 576.1 203.9 576.1 224C576.1 267.2 558.9 306.3 531.1 335.1L482 286C448.9 253 403.5 240.3 360.9 247.6L304.1 190.8L304.1 161.1L303.9 156.1C303.1 143.7 299.5 131.8 293.4 121.2C322.8 86.2 366.8 64 416.1 63.9z"/></svg>
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#002D72] mb-3">Handyman Repair and Services</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  From small repairs to major installations, our skilled handyman services handle all your home maintenance needs. Trust our experienced team to get the job done right the first time. Serving Kensington, Bethesda, Chevy Chase, and Northwest DC with professional and commercial handyman services.
                </p>
                <a href="https://www.bettarservices.com/services/handyman" className="text-[#002D72] font-bold hover:underline inline-block mt-auto">View Service →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - FAQ Accordion */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                <div className="flex justify-between items-center w-full text-left font-bold text-lg text-[#111827] group-hover:text-[#002D72] transition-colors duration-200 mb-3">
                  What services does Good Deeds offer?
                  <svg 
                    className="w-5 h-5 text-[#002D72] transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="text-[#6B7280] leading-relaxed transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                  Good Deeds provides comprehensive real estate services including buying, selling, and renting properties. We also partner with Bettar Services to offer home improvements, renovations, plumbing, handyman services, and appliance sales and repairs.
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                <div className="flex justify-between items-center w-full text-left font-bold text-lg text-[#111827] group-hover:text-[#002D72] transition-colors duration-200">
                  What areas do you serve?
                  <svg 
                    className="w-5 h-5 text-[#002D72] transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="text-[#6B7280] leading-relaxed transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                  We proudly serve Washington, DC, Kensington, Bethesda, Chevy Chase, and surrounding Maryland and DC metropolitan areas. Our team has extensive knowledge of the local real estate market.
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                <div className="flex justify-between items-center w-full text-left font-bold text-lg text-[#111827] group-hover:text-[#002D72] transition-colors duration-200">
                  Why should I choose Good Deeds for real estate?
                  <svg 
                    className="w-5 h-5 text-[#002D72] transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="text-[#6B7280] leading-relaxed transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                  With over 30 years of experience in finance and business leadership, Jack Deeds, CPA brings precision and integrity to real estate. As a family business since 1880, we offer transparent service, full-service property solutions, and our unique &quot;Good Deeds&quot; philosophy that prioritizes your best interests.
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                <div className="flex justify-between items-center w-full text-left font-bold text-lg text-[#111827] group-hover:text-[#002D72] transition-colors duration-200">
                  Can you help with property renovations before selling?
                  <svg 
                    className="w-5 h-5 text-[#002D72] transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="text-[#6B7280] leading-relaxed transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                  Yes! Through our partnership with Bettar Services, we can help you prepare your property for sale with professional renovations, repairs, and upgrades. We offer everything from kitchen and bathroom remodels to handyman services, ensuring your home is market-ready and move-in ready.
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-200 group">
                <div className="flex justify-between items-center w-full text-left font-bold text-lg text-[#111827] group-hover:text-[#002D72] transition-colors duration-200">
                  How do I schedule a consultation?
                  <svg 
                    className="w-5 h-5 text-[#002D72] transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="text-[#6B7280] leading-relaxed transition-all duration-300 overflow-hidden max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100">
                  You can schedule a consultation by calling us at 202-297-2432, emailing jack@gooddeeds.com, or using our contact form. We&apos;re committed to processing your information quickly and ensuring a prompt response to all inquiries about buying, selling, or enhancing your property.
                </div>
              </div>
            </div>

            {/* Right Column - Contact Card */}
            <div className="bg-[#002D72] rounded-[20px] p-10 text-white shadow-lg" style={{boxShadow: '0 8px 25px rgba(0,45,114,0.25)'}}>
              <div className="flex flex-col items-center text-center h-full justify-center">
                {/* Speech Bubble Icon */}
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
          <Image
                    src="/comments-question.svg"
                    alt="Question Icon"
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4">You have different questions?</h3>
                
                <p className="text-[#E5E7EB] mb-8 leading-relaxed">
                  Our team will answer all your questions.<br />
                  We ensure a quick response.
                </p>

                {/* Phone Number */}
                <div className="flex items-center mb-8">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xl font-bold">Call 202-297-2432</span>
                </div>

                {/* Contact Button */}
                <button className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold py-3 px-8 rounded-lg transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News and Blogs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base text-[#096DBC] uppercase mb-2">NEWS AND BLOGS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3387]" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Latest News & Market Updates
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/Deck 7.jpg" 
                  alt="House with deck and screened porch" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-900">Jack Deeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-gray-900">Real Estate</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  Best Neighborhoods to Buy Property in Washington, DC
                </h3>
                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>January 15, 2025</span>
                  </div>
                  <a href="#" className="text-[#096DBC] font-semibold uppercase text-sm hover:underline">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
                <Image 
                  src="/Windows & Doors 6.jpg" 
                  alt="Elegant bedroom with windows" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-900">Jack Deeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-gray-900">Bethesda</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  Luxury Properties Available in Bethesda and Chevy Chase
                </h3>
                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>January 8, 2025</span>
                  </div>
                  <a href="#" className="text-[#096DBC] font-semibold uppercase text-sm hover:underline">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 relative">
            <Image
                  src="/Windows & Doors 7.jpg" 
                  alt="Living room with windows and French doors" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-gray-900">Jack Deeds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <span className="text-gray-900">Kensington</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  Real Estate Market Trends in Kensington, Maryland
                </h3>
                <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>December 20, 2024</span>
                  </div>
                  <a href="#" className="text-[#096DBC] font-semibold uppercase text-sm hover:underline">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <button className="bg-white border-1 border-[#096DBC] text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-[#096DBC] hover:text-white transition-colors inline-flex items-center gap-2">
              View All
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Get In Touch Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-[55%_45%]">
              {/* Left Section - Living Room Image (55%) with Contact Info Overlay */}
              <div className="relative h-96 md:h-auto min-h-[500px] flex items-center">
                <Image 
                  src="/Image.jpg" 
                  alt="Modern living room" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A3387]/50 z-10"></div>
                <div className="relative z-20 p-8 md:p-12 text-white w-full">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
                  <p className="text-lg mb-8 leading-relaxed max-w-2xl">
                    We are committed to processing the information in order to contact you and talk.
                  </p>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-lg">202-297-2432</span>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-lg">jack@gooddeeds.com</span>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-lg">10503 Wheatley St, Kensington, MD 20895, United States</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form (45%) */}
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Please leave us your info, so we can start our conversation to provide you with more information.
                </p>

                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Enter Full name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Adress" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC] transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC] transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <button 
                      type="submit"
                      className="w-full bg-[#096DBC] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
                    >
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
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
                <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#properties" className="text-gray-600 hover:text-gray-900">Properties</a></li>
                <li><a href="#buy-sell" className="text-gray-600 hover:text-gray-900">Request Service</a></li>
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
    </div>
  );
}
