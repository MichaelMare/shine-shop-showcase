
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                title: "Import Services",
                description:
                  "We source quality products directly from manufacturers, ensuring competitive pricing, warranty coverage, and authentic merchandise.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" stroke="#0f3460" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M8.5 12l2.5 2.5L16 9.5" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Repair Center",
                description:
                  "Our certified technicians provide fast, reliable repairs with genuine parts, keeping your equipment running smoothly.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="13" r="8" stroke="#0f3460" strokeWidth="2" />
                    <path d="M12 9v4l2.5 2" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 3h6" stroke="#0f3460" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: "Maintenance Plans",
                description:
                  "Proactive maintenance plans help prevent costly downtime and extend the life of your equipment with regular servicing.",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="3" width="14" height="18" rx="2" stroke="#0f3460" strokeWidth="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" stroke="#0f3460" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="17.5" cy="16.5" r="2" fill="#F97316" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-lg flex flex-col h-full transition-all duration-300 hover:-translate-y-[3px] shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(15,52,96,0.25)]"
                style={{
                  borderTop: "3px solid #0f3460",
                  padding: "20px",
                }}
              >
                <div
                  className="flex items-center justify-center mb-4"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#e8eef6",
                    borderRadius: "8px",
                  }}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "#0f3460" }}>
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center transition-opacity hover:opacity-80"
                  style={{ color: "#F97316", fontWeight: 600 }}
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
