import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";

export default function RentAHome() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                Your Perfect Rental Awaits
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're looking for a cozy apartment, a spacious townhouse, or a luxury rental property, Good Deeds has the expertise to help you find the perfect rental that matches your needs and budget.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We understand the rental market in Washington, DC, Bethesda, Chevy Chase, and surrounding areas. Our team will help you navigate lease agreements, understand rental terms, and find properties in the best neighborhoods.
              </p>
            </div>

            {/* Right Column - Image */}
            <div>
              <Image 
                src="/shaw_rowhouses_600.jpg" 
                alt="Rental properties" 
                width={600} 
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Airbnb Section */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <Image 
                src="/airbnb-icon.svg" 
                alt="Airbnb Logo" 
                width={48} 
                height={48}
                className="w-12 h-12"
              />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Rentals</h2>
                <p className="text-gray-600">Check out our available rental properties</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Airbnb Listing 1 */}
              <div className="bg-white border-2 border-[#FF5A5F] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    "/rent1.jpg",
                    "/rent1.1.jpg",
                    "/rent1.2.jpg",
                    "/rent1.3.jpg",
                    "/rent1.4.jpg",
                    "/rent1.5.jpg",
                    "/rent1.6.jpg"
                  ]}
                  alt="Chevy Chase 3 BR Airbnb rental property"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Chevy Chase 3 BR Chic Comfortable Spacious Luxury</h3>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 mb-4">
                    Experience comfortable short-term stays in our beautifully maintained rental property. Perfect for visitors, business travelers, or those looking for temporary housing in the Washington, DC area.
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="font-medium text-sm">Fully Furnished</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-sm">Flexible Stay</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium text-sm">Prime Location</span>
                    </div>
                  </div>
                </div>
                 <a 
                   href="https://www.airbnb.com/rooms/53659699?source_impression_id=p3_1767070571_P3tdz3YFPT0h7ep8" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 bg-white border-2 border-[#FF5A5F] text-[#FF5A5F] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF5A5F] hover:text-white transition-colors w-full justify-center"
                 >
                   <Image 
                     src="/airbnb-icon.svg" 
                     alt="Airbnb Logo" 
                     width={20} 
                     height={20}
                     className="w-5 h-5"
                   />
                   View on Airbnb
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                 </a>
                </div>
              </div>

              {/* Airbnb Listing 2 */}
              <div className="bg-white border-2 border-[#FF5A5F] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    "/rent2.jpg",
                    "/rent2.1.jpg",
                    "/rent2.2.jpg",
                    "/rent2.3.jpg",
                    "/rent2.4.jpg",
                    "/rent2.5.jpg",
                    "/rent2.6.jpg"
                  ]}
                  alt="Chevy Chase 4 BR/2 offices Airbnb rental property"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Chevy Chase 4 BR/2 offices - Luxury Bedding</h3>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                      Another beautifully maintained rental property offering comfortable accommodations. Ideal for short-term stays, extended visits, or business travel in the Washington, DC metropolitan area.
                    </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="font-medium text-sm">Fully Furnished</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium text-sm">Flexible Stay</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-[#FF5A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="font-medium text-sm">Prime Location</span>
                    </div>
                  </div>
                </div>
                 <a 
                   href="https://www.airbnb.com/rooms/50658643?source_impression_id=p3_1767070578_P3VwfkXVlBU0w2r4" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-3 bg-white border-2 border-[#FF5A5F] text-[#FF5A5F] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF5A5F] hover:text-white transition-colors w-full justify-center"
                 >
                   <Image 
                     src="/airbnb-icon.svg" 
                     alt="Airbnb Logo" 
                     width={20} 
                     height={20}
                     className="w-5 h-5"
                   />
                   View on Airbnb
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                   </svg>
                 </a>
                </div>
              </div>

                {/* Zillow Listing */}
                <div className="bg-white border-2 border-[#096DBC] rounded-lg overflow-hidden">
                 <div className="h-64 relative">
                   <Image 
                     src="/rent5.jpg"
                     alt="2215 Reedie Dr, Wheaton, MD Airbnb rental property"
                     fill
                     className="object-cover"
                   />
                 </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">2215 Reedie Dr, Wheaton, MD</h3>
                  <p className="text-[#096DBC] font-semibold mb-4">$3,608/mo • 4 BR / 3 BA • 1,638 sqft</p>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                      Beautiful single-family home in the highly sought-after Westchester community. Spacious 4-bedroom, 3-bathroom home with 1,638 sqft of living space on an 8,067 sqft lot. Perfect for families looking for a long-term rental in Wheaton, MD.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-medium text-sm">4 Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-sm">3 Bathrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-medium text-sm">Wheaton, MD</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.zillow.com/homedetails/2215-Reedie-Dr-Wheaton-MD-20902/37303299_zpid/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white border-2 border-[#096DBC] text-[#096DBC] px-6 py-3 rounded-lg font-semibold hover:bg-[#096DBC] hover:text-white transition-colors w-full justify-center"
                  >
                    <Image 
                      src="/zillow.svg" 
                      alt="Zillow Logo" 
                      width={20} 
                      height={20}
                      className="w-5 h-5"
                    />
                    View on Zillow
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Zillow Listing 2 - 3420 Patterson St */}
              <div className="bg-white border-2 border-[#096DBC] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    "/rent4.jpg",
                    "/rent4.1.jpg",
                    "/rent4.2.jpg",
                    "/rent4.4.jpg",
                    "/rent4.5.jpg",
                    "/rent4.6.jpg"
                  ]}
                  alt="3420 Patterson ST, NW Washington, DC 20015 rental property"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">3420 Patterson St NW, Washington, DC</h3>
                  <p className="text-[#096DBC] font-semibold mb-4">$5,638/mo • 4 BR / 3 BA • 3,000 sqft</p>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                      Updated four-bedroom home in Chevy Chase with new kitchen cabinets! Close to Lafayette School with a yard. Fully furnished with all amenities. Enjoy Chevy Chase living steps from Lafayette school, Broad Branch markets, and Connecticut Ave. Utilities included option available.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-medium text-sm">4 Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-sm">3 Bathrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-medium text-sm">Chevy Chase, DC</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.zillow.com/homedetails/3420-Patterson-St-NW-Washington-DC-20015/452429_zpid/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white border-2 border-[#096DBC] text-[#096DBC] px-6 py-3 rounded-lg font-semibold hover:bg-[#096DBC] hover:text-white transition-colors w-full justify-center"
                  >
                    <Image 
                      src="/zillow.svg" 
                      alt="Zillow Logo" 
                      width={20} 
                      height={20}
                      className="w-5 h-5"
                    />
                    View on Zillow
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Zillow Listing 3 - 5815 Nevada Ave */}
              <div className="bg-white border-2 border-[#096DBC] rounded-lg overflow-hidden">
                <ImageCarousel 
                  images={[
                    "/rent3.jpg",
                    "/rent3.1.jpg",
                    "/rent3.2.jpg",
                    "/rent3.4.jpg",
                    "/rent3.5.jpg",
                    "/rent3.6.jpg"
                  ]}
                  alt="5815 Nevada Ave, Washington, DC 20015 rental property"
                />
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">5815 Nevada Ave NW, Washington, DC</h3>
                  <p className="text-[#096DBC] font-semibold mb-4">$4,093/mo • 3 BR / 2 BA • 1,850 sqft</p>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                      Charming furnished house close to Chevy Chase Circle, Lafayette School, and Broad Branch Market. Renovated with new HVAC, new kitchen, and new bath on lower level. Features fenced-in yard, tranquil patio, standing desks, and off-street parking with electric car charger.
                    </p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="font-medium text-sm">3 Bedrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium text-sm">2 Bathrooms</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-[#096DBC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-medium text-sm">Chevy Chase, DC</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.zillow.com/homedetails/5815-Nevada-Ave-NW-Washington-DC-20015/452418_zpid/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white border-2 border-[#096DBC] text-[#096DBC] px-6 py-3 rounded-lg font-semibold hover:bg-[#096DBC] hover:text-white transition-colors w-full justify-center"
                  >
                    <Image 
                      src="/zillow.svg" 
                      alt="Zillow Logo" 
                      width={20} 
                      height={20}
                      className="w-5 h-5"
                    />
                    View on Zillow
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[#096DBC] rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Rental Search Today</h2>
            <p className="text-xl mb-8 opacity-90">
              Browse available rentals or contact us to discuss your rental needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/properties" 
                className="bg-white text-[#096DBC] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Rentals
              </a>
              <a 
                href="/contact-us" 
                className="bg-[#BA1038] text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

