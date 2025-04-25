
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6 leading-tight">
            <span className="text-white">Premium</span>{" "}
            <span className="text-orange">IT Solutions</span>{" "}
            <span className="text-white">for</span>{" "}
            <span className="text-orange font-bold">Modern Businesses</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Discover our curated selection of top-tier IT solutions designed to streamline your operations. 
            From point-of-sale systems to inventory management software, Kairos IT Services provides the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="btn-secondary">
              Explore Solutions
            </Link>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
