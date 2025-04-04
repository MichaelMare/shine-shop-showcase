
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 leading-tight">
            Quality Products for <span className="text-gold">Modern Living</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Discover our curated collection of premium products designed to enhance your lifestyle. 
            From stylish home decor to innovative electronics, we offer quality solutions for modern living.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="btn-secondary">
              Browse Collection
            </Link>
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
