export default function About() {
  return (
    <>
      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">Meet the professionals behind Good Deeds</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* John F. Deeds */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  JD
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">John F. Deeds, CPA</h3>
                <p className="text-blue-600 font-semibold mb-4">President & Founder</p>
                <p className="text-gray-600 mb-6">
                  Licensed CPA with extensive experience in real estate and business development. 
                  Leading Good Deeds with over 500+ professional connections and 3K+ followers.
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/jackdeeds/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/jack.deeds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">About Good Deeds</h3>
              <div className="space-y-4 text-gray-600">
                <p><strong>Founded:</strong> 1880</p>
                <p><strong>Location:</strong> Washington, DC</p>
                <p><strong>Industry:</strong> Real Estate</p>
                <p><strong>Company Size:</strong> 2-10 employees</p>
                <p><strong>Headquarters:</strong> 3420 Patterson Street, NW, Washington, DC 20015</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Partnerships:</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Bethesda Chevy Chase Real Estate</li>
                  <li>• Bettar Appliance Services</li>
                  <li>• I Serve Residential Lending</li>
                  <li>• Consumer Edge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
