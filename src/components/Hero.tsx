import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const capabilities = [
  { code: "01", label: "Point of Sale", note: "PixelPoint rollouts & support" },
  { code: "02", label: "IT Infrastructure", note: "Networks, servers, monitoring" },
  { code: "03", label: "Inventory & Supply", note: "Stock control that reconciles" },
  { code: "04", label: "Metering & Repair", note: "Utility meters, import & service" },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-navy">
      {/* subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* single warm accent glow, used once */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[380px] w-[380px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(249,115,22,0.18)" }}
      />

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="eyebrow text-orange">Kairos IT Services · South Africa</span>
          <h1 className="mt-5 leading-[1.05] text-white">
            We don&rsquo;t just supply the systems.
            <span className="block text-orange">We run them.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-white/70">
            Hands-on POS implementation, IT infrastructure and managed support for
            multi-site retail and hospitality operators. From the database up to the
            counter &mdash; built, integrated and kept running.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-dark"
            >
              Request a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/0 px-7 py-3.5 font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              See what we do
            </Link>
          </div>
        </div>

        {/* capability index — structure reflects that Kairos runs systems */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.code} className="bg-navy p-5 transition-colors duration-200 hover:bg-navy-light">
              <span className="font-display text-sm font-medium text-orange">{c.code}</span>
              <h3 className="mt-2 text-base font-semibold text-white">{c.label}</h3>
              <p className="mt-1 text-sm text-white/55">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
