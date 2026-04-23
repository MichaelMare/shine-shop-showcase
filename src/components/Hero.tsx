
import { Link } from "react-router-dom";
import { Monitor, Tablet, Smartphone, Cpu, Wifi, Server } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ backgroundColor: "#0f3460" }}>
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#F97316" }}
              >
                Explore Solutions
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-white border-2 border-white/70 hover:bg-white hover:text-navy transition-all duration-200 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Right: abstract tech illustration */}
          <div className="relative hidden lg:flex items-center justify-center" aria-hidden="true">
            <div className="relative h-[420px] w-[420px]">
              {/* Concentric rings */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-white/10" />
              <div className="absolute inset-16 rounded-full border border-orange/20" />

              {/* Central glow */}
              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gradient-to-br from-orange to-orange/60 shadow-2xl flex items-center justify-center">
                <Monitor className="h-20 w-20 text-white" strokeWidth={1.5} />
              </div>

              {/* Floating device cards */}
              <div className="absolute left-2 top-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 shadow-xl animate-float">
                <Tablet className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute right-4 top-20 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 shadow-xl animate-float-delayed">
                <Smartphone className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-12 left-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 shadow-xl animate-float-delayed">
                <Server className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-6 right-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 shadow-xl animate-float">
                <Wifi className="h-10 w-10 text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute right-24 bottom-32 rounded-xl bg-orange/20 backdrop-blur-sm border border-orange/30 p-3 shadow-xl animate-float">
                <Cpu className="h-8 w-8 text-orange" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
