import { useState } from "react";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { toast } from "../components/ui/use-toast";
import SEOHead from "../components/SEOHead";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "835ad0aa-3355-414b-b4a9-56cf76488385",
          name: formData.name,
          email: formData.email,
          subject: formData.subject
            ? `Quote request: ${formData.subject}`
            : "New quote request from kairosit.co.za",
          message: formData.message,
          from_name: "Kairos IT Services website",
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: "Thanks — request received",
          description: "We'll be in touch shortly to talk through what you need.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "That didn't go through",
          description: "Please try again, or email marketing@kairosit.co.za directly.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Couldn't send right now",
        description: "Please try again, or email marketing@kairosit.co.za directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-md border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

  return (
    <div className="py-12 md:py-16">
      <SEOHead
        title="Contact"
        description="Tell us what you're running — single till or multi-site rollout. Request a quote from Kairos IT Services and we'll scope it honestly."
      />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3 text-navy">Tell us what you&rsquo;re running</h1>
          <p className="mt-4 text-lg text-slate-600">
            Whether it&rsquo;s a single till or a multi-site rollout, send us the
            details and we&rsquo;ll scope it honestly and quote it properly.
          </p>
        </div>

        <div className="grid max-w-5xl gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-semibold text-navy">Get in touch</h2>
            <div className="mt-6 space-y-5">
              <a href="mailto:marketing@kairosit.co.za" className="flex items-start gap-3 text-slate-600 transition-colors hover:text-orange">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Mail className="h-5 w-5 text-navy" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-navy">Email</span>
                  marketing@kairosit.co.za
                </span>
              </a>
              <a href="tel:+27827085927" className="flex items-start gap-3 text-slate-600 transition-colors hover:text-orange">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Phone className="h-5 w-5 text-navy" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-navy">Phone</span>
                  +27 82 708 5927
                </span>
              </a>
              <div className="flex items-start gap-3 text-slate-600">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy/5">
                  <Clock className="h-5 w-5 text-navy" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-navy">Business hours</span>
                  Mon&ndash;Fri: 08:30&ndash;16:30
                  <span className="mt-1 block text-sm text-slate-500">
                    Available for emergencies outside business hours.
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-200 pt-6 text-sm font-medium text-slate-500">
              <span>Authorised PAR PixelPoint reseller</span>
              <span>Procurant partner</span>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-semibold text-navy">Request a quote</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Your name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} />
              </div>
              <div>
                <label htmlFor="subject" className="mb-1 block text-sm font-medium text-slate-700">What do you need?</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="e.g. POS for a new store" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Details</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={inputClass} />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send request"}
                {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
