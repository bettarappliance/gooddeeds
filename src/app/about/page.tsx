import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
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

      <Footer />
    </div>
  );
}
