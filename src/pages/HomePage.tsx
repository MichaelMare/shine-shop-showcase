
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-navy mb-6">Why Choose Kairos IT Services</h2>
              <p className="text-gray-600 mb-6">
                We take pride in offering premium IT solutions including POS systems, inventory management, 
                and comprehensive security solutions. Our commitment to quality, customer satisfaction, 
                and exceptional service sets us apart from the competition.
              </p>
              <ul className="space-y-3">
                {[
                  "Expert Technical Support",
                  "Customized Solutions", 
                  "Seamless Integration", 
                  "Advanced Security Systems",
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
    </div>
  );
};

export default HomePage;
