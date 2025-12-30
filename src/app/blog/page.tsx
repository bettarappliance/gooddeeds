import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#096DBC]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base text-[#096DBC] uppercase mb-2">NEWS AND BLOGS</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Latest News & Market Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest real estate trends, market insights, and property news
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Blog Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                <p className="text-gray-600 mb-4">
                  Discover the top neighborhoods in Washington, DC for real estate investment and living. From historic Georgetown to vibrant Dupont Circle, find your perfect community.
                </p>
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                <p className="text-gray-600 mb-4">
                  Explore the finest luxury properties in Bethesda and Chevy Chase. Learn about the market trends and what makes these areas so desirable.
                </p>
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                <p className="text-gray-600 mb-4">
                  Get insights into the current real estate market trends in Kensington, Maryland. Understand what's driving the market and what to expect.
                </p>
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
            <button className="bg-white border-2 border-[#096DBC] text-[#096DBC] px-8 py-3 rounded-full font-semibold hover:bg-[#096DBC] hover:text-white transition-colors inline-flex items-center gap-2">
              Load More Posts
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

