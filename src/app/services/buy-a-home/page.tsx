import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BuyAHome() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#096DBC]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-full border-4 border-[#096DBC] flex items-center justify-center">
                <svg className="w-16 h-16 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Buy a Home
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over 1 million+ homes for sale available. We can match you with a house you will want to call home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Image */}
            <div>
              <Image 
                src="/bethesdy.jpg" 
                alt="Beautiful home for sale" 
                width={600} 
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                Find Your Dream Home
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With access to over 1 million+ homes for sale, Good Deeds helps you find the perfect property that matches your lifestyle, budget, and preferences. Our experienced team understands the Washington, DC real estate market and will guide you through every step of the home buying process.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From historic rowhouses in DC to luxury properties in Bethesda and Chevy Chase, we have the expertise to help you navigate the market and make informed decisions.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#096DBC] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Property Search</h3>
              <p className="text-gray-600">
                Access our extensive database of properties with advanced search filters to find exactly what you're looking for.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#096DBC] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600">
                Get professional advice from our experienced team who understand the local market and can help you make the right decision.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#096DBC] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Complete Support</h3>
              <p className="text-gray-600">
                From property viewing to closing, we provide comprehensive support throughout your entire home buying journey.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#096DBC] rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Browse our properties or schedule a consultation to get started
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/properties" 
                className="bg-white text-[#096DBC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Properties
              </a>
              <a 
                href="/contact-us" 
                className="bg-[#BA1038] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

