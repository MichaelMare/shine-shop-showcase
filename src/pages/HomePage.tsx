import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Plug, Wrench, GraduationCap, Boxes, BadgeCheck } from "lucide-react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import SEOHead from "../components/SEOHead";

const strengths = [
  {
    icon: ShieldCheck,
    title: "Implemented by the people who support it",
    body: "The same hands that build your system are the ones you call when something needs attention. No handoffs, no ticket queue to a stranger.",
  },
  {
    icon: Plug,
    title: "Integration that actually reconciles",
    body: "POS, inventory and supply systems wired together so the numbers agree at the end of the day — not three systems that each tell a different story.",
  },
  {
    icon: GraduationCap,
    title: "Your team trained to run it",
    body: "Handover isn't a manual dropped on a counter. We train staff on the floor until the system is genuinely theirs.",
  },
];

const services = [
  {
    icon: Plug,
    title: "Import & supply",
    body: "Sourced directly from manufacturers — authentic stock, warranty intact, sensible lead times.",
  },
  {
    icon: Wrench,
    title: "Repair centre",
    body: "Certified technicians, genuine parts, quick turnaround on POS hardware and utility meters.",
  },
  {
    icon: Boxes,
    title: "Maintenance plans",
    body: "Proactive servicing that prevents downtime and extends the life of the equipment you depend on.",
  },
];

const HomePage = () => {
  return (
    <div>
      <SEOHead
        title="Home"
        description="Kairos IT Services — hands-on POS implementation, IT infrastructure, inventory systems and managed support for multi-site retail and hospitality operators in South Africa."
      />

      <Hero />

      {/* Authorised partner trust strip */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col items-center justify-center gap-x-8 gap-y-3 text-center sm:flex-row">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Trusted partnerships
            </p>
            <div className="flex flex-col items-center gap-x-7 gap-y-2 sm:flex-row">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                <BadgeCheck className="h-4 w-4 text-orange" strokeWidth={2.25} />
                Authorised PAR PixelPoint reseller
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                <BadgeCheck className="h-4 w-4 text-orange" strokeWidth={2.25} />
                Procurant partner
              </span>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Why Kairos */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Why Kairos</span>
            <h2 className="mt-3 text-navy">A technical partner, not a supplier</h2>
            <p className="mt-4 text-lg text-slate-600">
              Most IT problems in retail and hospitality aren&rsquo;t about the
              hardware — they&rsquo;re about whether anyone truly owns the whole
              system. We do.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strengths.map((s) => (
              <div
                key={s.title}
                className="rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(15,52,96,0.35)]"
                style={{ borderTop: "3px solid #0f3460" }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy/5">
                  <s.icon className="h-5 w-5 text-navy" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Import & Repair */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <span className="eyebrow">Import &amp; repair</span>
            <h2 className="mt-3 text-navy">Authorised importer and repair centre</h2>
            <p className="mt-4 text-lg text-slate-600">
              We source quality products directly from manufacturers and service
              them in-house — including PAR solutions and utility meters — with
              factory-trained, certified technicians.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((c) => (
              <div key={c.title} className="flex flex-col rounded-xl bg-white p-7 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange/10">
                  <c.icon className="h-5 w-5 text-orange" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{c.title}</h3>
                <p className="mt-3 flex-grow text-slate-600">{c.body}</p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 font-semibold text-orange transition-opacity hover:opacity-80"
                >
                  Enquire <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-white">Tell us what you&rsquo;re running.</h2>
              <p className="mt-3 text-lg text-white/70">
                Whether it&rsquo;s a single till or a multi-site rollout, we&rsquo;ll
                scope it honestly and quote it properly.
              </p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-orange px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-dark"
            >
              Request a quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
