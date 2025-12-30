import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SellAHome() {
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
              Sell a Home
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the best value for your property with our expert guidance and marketing strategies.
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
                src="/Deck 7.jpg" 
                alt="Home for sale" 
                width={600} 
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                Maximize Your Home's Value
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Selling your home is a significant decision, and you deserve expert guidance to get the best possible price. At Good Deeds, we combine our deep knowledge of the Washington, DC real estate market with strategic marketing to help you sell your property quickly and at the right price.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Through our partnership with Bettar Services, we can also help prepare your home for sale with professional renovations, repairs, and staging to maximize its appeal to potential buyers.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#096DBC] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600">
                Get a comprehensive market analysis to determine the optimal listing price for your property.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#096DBC] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.596 12.239l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Marketing</h3>
              <p className="text-gray-600">
                Benefit from our proven marketing strategies that reach the right buyers and showcase your property's best features.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#096DBC] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Home Preparation</h3>
              <p className="text-gray-600">
                Get help with renovations, repairs, and staging through our Bettar Services partnership to make your home market-ready.
              </p>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-gray-50 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Selling Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#096DBC] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Property Evaluation</h3>
                <p className="text-gray-600 text-sm">We assess your property and provide a market analysis</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#096DBC] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Preparation</h3>
                <p className="text-gray-600 text-sm">Help prepare your home for sale with repairs and staging</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#096DBC] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>
                <p className="text-gray-600 text-sm">Strategic marketing to reach qualified buyers</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#096DBC] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Closing</h3>
                <p className="text-gray-600 text-sm">Expert guidance through negotiations and closing</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#096DBC] rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your Home?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free property evaluation and learn how we can help you get the best price
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-us" 
                className="bg-white text-[#096DBC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Evaluation
              </a>
              <a 
                href="tel:202-297-2432" 
                className="bg-[#BA1038] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Call 202-297-2432
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

