import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Properties() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#096DBC]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Our Properties
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exceptional properties in Washington, DC, Bethesda, Chevy Chase, and surrounding areas. 
              Find your perfect home with Good Deeds.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src="/bethesdy.jpg" 
                  alt="Luxury property in Bethesda" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Luxury Home in Bethesda</h3>
                <p className="text-gray-600 mb-4">4 Bedrooms • 3 Bathrooms • 3,500 sq ft</p>
                <p className="text-2xl font-bold text-[#096DBC] mb-4">$1,250,000</p>
                <a href="#" className="text-[#096DBC] font-semibold hover:underline">
                  View Details →
                </a>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src="/shaw_rowhouses_600.jpg" 
                  alt="Historic rowhouse in Washington DC" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Historic Rowhouse in DC</h3>
                <p className="text-gray-600 mb-4">3 Bedrooms • 2 Bathrooms • 2,200 sq ft</p>
                <p className="text-2xl font-bold text-[#096DBC] mb-4">$850,000</p>
                <a href="#" className="text-[#096DBC] font-semibold hover:underline">
                  View Details →
                </a>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 relative">
                <Image 
                  src="/Deck 7.jpg" 
                  alt="Family home with deck" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Family Home with Deck</h3>
                <p className="text-gray-600 mb-4">5 Bedrooms • 4 Bathrooms • 4,200 sq ft</p>
                <p className="text-2xl font-bold text-[#096DBC] mb-4">$1,450,000</p>
                <a href="#" className="text-[#096DBC] font-semibold hover:underline">
                  View Details →
                </a>
              </div>
            </div>
          </div>

          {/* Search/Filter Section */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Find Your Perfect Property</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <select className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC]">
                <option>Property Type</option>
                <option>House</option>
                <option>Condo</option>
                <option>Townhouse</option>
              </select>
              <select className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC]">
                <option>Location</option>
                <option>Washington, DC</option>
                <option>Bethesda</option>
                <option>Chevy Chase</option>
                <option>Kensington</option>
              </select>
              <input 
                type="number" 
                placeholder="Max Price" 
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC]"
              />
              <button className="bg-[#096DBC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

