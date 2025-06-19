
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import SEOHead from "../components/SEOHead";

const HomePage = () => {
  return (
    <div>
      <SEOHead 
        title="Home"
        description="Kairos IT Services - Premium IT solutions including POS systems, inventory management, utility meters, and PAR 3M products. Expert technical support and authorized repair services."
      />
      
      <Hero />
      <FeaturedProducts />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-navy mb-6">Why Choose Kairos IT Services</h2>
              <p className="text-gray-600 mb-6">
                We take pride in offering premium IT solutions including POS systems, inventory management, utility meters, 
                and PAR 3M products. As an authorized importer and repair center, we provide comprehensive support for all our offerings.
              </p>
              <ul className="space-y-3">
                {[
                  "Expert Technical Support",
                  "Customized Solutions", 
                  "Seamless Integration", 
                  "Import and Repair Services",
                  "Ongoing Training & Support"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <blockquote className="italic text-gray-700">
                "Kairos IT Services has transformed our restaurant operations with their PixelPoint POS system. 
                The integration with MarketMan has streamlined our inventory management and significantly reduced food waste. 
                Their technical support is responsive and highly knowledgeable."
                <footer className="mt-4 font-medium text-navy">
                  — Jane Smith, Restaurant Owner
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-navy mb-4">Import & Repair Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We are an authorized importer and repair center for various products, including PAR 3M solutions and utility meters. 
              Our technicians are factory-trained and certified to provide expert repair services with quick turnaround times.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-navy text-lg font-semibold mb-3">Import Services</h3>
              <p className="text-gray-600 mb-4">
                We source quality products directly from manufacturers, ensuring competitive pricing, warranty coverage, and authentic merchandise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-navy text-lg font-semibold mb-3">Repair Center</h3>
              <p className="text-gray-600 mb-4">
                Our certified technicians provide fast, reliable repairs with genuine parts, keeping your equipment running smoothly.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-navy text-lg font-semibold mb-3">Maintenance Plans</h3>
              <p className="text-gray-600 mb-4">
                Proactive maintenance plans help prevent costly downtime and extend the life of your equipment with regular servicing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
