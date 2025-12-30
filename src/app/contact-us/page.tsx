import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#096DBC]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to processing the information in order to contact you and talk.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-[55%_45%]">
              {/* Left Section - Image with Contact Info Overlay */}
              <div className="relative h-96 md:h-auto min-h-[500px] flex items-center">
                <Image 
                  src="/Image.jpg" 
                  alt="Modern living room" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A3387]/50 z-10"></div>
                <div className="relative z-20 p-8 md:p-12 text-white w-full">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-lg mb-8 leading-relaxed max-w-2xl">
                    We are committed to processing the information in order to contact you and talk.
                  </p>
                  
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:202-297-2432" className="text-lg hover:underline">202-297-2432</a>
                    </div>
                    
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:jack@gooddeeds.com" className="text-lg hover:underline">jack@gooddeeds.com</a>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-white flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-lg">3620 Rittenhouse ST NW Washington DC 20015</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: 'normal' }}>
                  Send Us a Message
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
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#096DBC] transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
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

      {/* Social Media Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.facebook.com/jack.deeds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#096DBC] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/jackdeeds/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#096DBC] rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Jack Deeds LinkedIn"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

