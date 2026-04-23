import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0f3460", paddingTop: "96px", paddingBottom: "96px" }}
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full"
        style={{ backgroundColor: "rgba(249, 115, 22, 0.08)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[480px] w-[480px] rounded-full"
        style={{ backgroundColor: "rgba(249, 115, 22, 0.08)" }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h1 className="mb-6 leading-tight text-white">
              <span className="text-white">Premium IT Solutions for</span>{" "}
              <span className="text-white font-bold">Modern Businesses</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-10"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Discover our curated selection of top-tier IT solutions designed to streamline your operations.
              From point-of-sale systems to inventory management software, Kairos IT Services provides the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-7 py-3 rounded-md font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#F97316", border: "none" }}
              >
                Explore Solutions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-md font-medium text-white border-2 border-white bg-transparent hover:bg-white/10 transition-all duration-200 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Device illustration */}
          <div className="flex items-center justify-center lg:justify-end" aria-hidden="true">
            <svg
              viewBox="0 0 480 360"
              className="w-full max-w-md h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Monitor */}
              <rect x="80" y="40" width="280" height="180" rx="12" fill="#1a4b85" />
              <rect x="96" y="56" width="248" height="140" rx="6" fill="#0f3460" />
              {/* Accent dot on monitor screen */}
              <circle cx="320" cy="80" r="8" fill="#F97316" />
              {/* Monitor stand */}
              <rect x="200" y="220" width="40" height="28" fill="#1a4b85" />
              <rect x="160" y="244" width="120" height="10" rx="4" fill="#1a4b85" />

              {/* Tablet */}
              <rect x="40" y="200" width="130" height="100" rx="10" fill="#1a4b85" />
              <rect x="50" y="210" width="110" height="80" rx="4" fill="#0f3460" />
              <circle cx="165" cy="250" r="2.5" fill="#1a4b85" />

              {/* Phone */}
              <rect x="360" y="190" width="70" height="130" rx="12" fill="#1a4b85" />
              <rect x="368" y="202" width="54" height="100" rx="4" fill="#0f3460" />
              <circle cx="395" cy="312" r="3" fill="#0f3460" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
