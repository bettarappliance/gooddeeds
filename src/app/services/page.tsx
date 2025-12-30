import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#096DBC]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base text-[#096DBC] uppercase mb-2">OUR SERVICES</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Our Main Focus
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate and property services to meet all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Real Estate Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Real Estate Services</h2>
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
              <p className="text-gray-600 mb-6">
                Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
              </p>
              <a href="/properties" className="text-[#096DBC] font-semibold hover:underline">
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
              <p className="text-gray-600 mb-6">
                Find the perfect rental property that fits your lifestyle and budget. We help you navigate the rental market with ease.
              </p>
              <a href="/properties" className="text-[#096DBC] font-semibold hover:underline">
                Find A Rental →
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
              <p className="text-gray-600 mb-6">
                Get the best value for your property with our expert guidance and marketing strategies.
              </p>
              <a href="/contact-us" className="text-[#096DBC] font-semibold hover:underline">
                List Your Home →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bettar Services Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-900 mb-2" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              In Partnership with
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A3387] mb-8" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Bettar Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Renovations */}
            <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="/renovations.jpg"
                  alt="Renovations and Remodeling"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,45,114,0.3)]"></div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#002D72] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#002D72] mb-3">Renovations and Remodeling</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  Transform your home with expert renovation and remodeling services.
                </p>
                <a href="https://www.bettarservices.com/services/renovations" className="text-[#002D72] font-bold hover:underline inline-block mt-auto">View Service →</a>
              </div>
            </div>

            {/* Plumbing */}
            <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="/plumbing.jpeg"
                  alt="Plumbing and Heating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,45,114,0.3)]"></div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#002D72] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#002D72] mb-3">Plumbing and Heating</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  Professional plumbing and heating services to keep your home comfortable.
                </p>
                <a href="https://www.bettarservices.com/services/plumbing" className="text-[#002D72] font-bold hover:underline inline-block mt-auto">View Service →</a>
              </div>
            </div>

            {/* Handyman */}
            <div className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="/handyman.jpg"
                  alt="Handyman Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(0,45,114,0.3)]"></div>
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-[#002D72] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 pt-10 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-[#002D72] mb-3">Handyman Services</h2>
                <p className="text-gray-600 mb-4 flex-grow">
                  Expert handyman services for all your home maintenance needs.
                </p>
                <a href="https://www.bettarservices.com/services/handyman" className="text-[#002D72] font-bold hover:underline inline-block mt-auto">View Service →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

