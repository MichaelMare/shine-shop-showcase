
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
              <h2 className="text-navy mb-6">Why Choose Us</h2>
              <p className="text-gray-600 mb-6">
                We take pride in offering premium products that enhance your lifestyle. 
                Our commitment to quality, customer satisfaction, and exceptional service 
                sets us apart from the competition.
              </p>
              <ul className="space-y-3">
                {["Premium Quality", "Outstanding Customer Support", "Fast Shipping", "Satisfaction Guaranteed"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <blockquote className="italic text-gray-700">
                "I've been consistently impressed by the quality of products and level of service. 
                Their attention to detail and commitment to customer satisfaction is unmatched."
                <footer className="mt-4 font-medium text-navy">
                  — John Doe, Loyal Customer
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
