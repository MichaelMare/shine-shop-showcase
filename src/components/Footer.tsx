import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <img
              src="/lovable-uploads/a6539c3e-b237-4c78-8489-7134280b70c6.png"
              alt="Kairos IT Services"
              className="mb-4 h-12 w-auto rounded bg-white p-1"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              Hands-on POS implementation, IT infrastructure and managed support for
              retail and hospitality operators across South Africa.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/50">
              <span>Authorised PAR PixelPoint reseller</span>
              <span>Procurant partner</span>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="text-white/65 transition-colors hover:text-orange">Home</Link></li>
              <li><Link to="/products" className="text-white/65 transition-colors hover:text-orange">Solutions</Link></li>
              <li><Link to="/contact" className="text-white/65 transition-colors hover:text-orange">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <address className="mt-4 space-y-3 not-italic text-sm text-white/65">
              <a href="mailto:marketing@kairosit.co.za" className="flex items-center gap-2.5 transition-colors hover:text-orange">
                <Mail className="h-4 w-4 shrink-0 text-orange" /> marketing@kairosit.co.za
              </a>
              <a href="tel:+27827085927" className="flex items-center gap-2.5 transition-colors hover:text-orange">
                <Phone className="h-4 w-4 shrink-0 text-orange" /> +27 82 708 5927
              </a>
              <p className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-orange" /> Faerie Glen, Pretoria, 0081
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>&copy; {currentYear} Kairos IT Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
