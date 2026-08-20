import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Reveal } from "./Reveal";
import logo from "@/assets/iconshe.png";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-12 sm:py-16 overflow-hidden bg-background border-t border-white/5 z-20"
    >
      {/* Massive Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <h1 className="text-[25vw] font-display font-bold text-white whitespace-nowrap leading-none tracking-tighter">
          SHERIZE
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-12">
          {/* Brand Info & Subscribe (Left Side, 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 rounded-[1rem] bg-white border border-white/10 p-2 flex items-center justify-center shadow-lg">
                  <img src={logo} alt="Sherize" className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-2xl font-display font-semibold text-white tracking-tight">
                    Sherize <span className="text-white/50">Solutions</span>
                  </div>
                  <div className="text-xs text-primary tracking-widest uppercase font-medium mt-1">
                    Private Limited
                  </div>
                </div>
              </div>

              <p className="text-lg text-white/60 max-w-sm font-light leading-relaxed mb-10">
                A premium digital agency powered by a remote workforce of exceptional women.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex items-center w-full max-w-sm"
              >
                <input
                  required
                  type="email"
                  placeholder="Subscribe to newsletter..."
                  className="w-full bg-transparent border-b border-white/20 py-3 pr-12 text-white placeholder:text-white/30 outline-none focus:border-primary transition-colors text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-0 text-white/50 hover:text-primary transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </Reveal>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Grid (Right Side, 6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <Reveal delay={100}>
              <div className="flex flex-col">
                <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">Sitemap</h4>
                <ul className="space-y-4">
                  {[
                    { label: "Home", to: "/" },
                    { label: "About", to: "/about" },
                    { label: "Opportunities", to: "/opportunities" },
                    { label: "Services", to: "/services" },
                  ].map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="text-white/50 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <FooterCol
                title="Expertise"
                links={["Digital Strategy", "Design Systems", "Web Development", "Growth Ops"]}
              />
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col">
                <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">
                  Contact
                </h4>
                <ul className="space-y-4 text-white/50 text-sm">
                  <li>
                    <a
                      href="mailto:info@sherize.in"
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Mail size={14} /> info@sherize.in
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+917672073746"
                      className="hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Phone size={14} /> +91 7672073746
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={14} /> India (Remote)
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <Reveal delay={400}>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-light">
              © {new Date().getFullYear()} Sherize Solutions Private Limited.
            </p>

            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <SocialLink
                href="https://instagram.com/sherize.solutions"
                icon={<Instagram size={18} />}
              />
              <SocialLink href="https://wa.me/917672073746" icon={<FaWhatsapp size={18} />} />
              <SocialLink href="https://facebook.com/" icon={<Facebook size={18} />} />
              <SocialLink
                href="https://linkedin.com/company/sherize-solutions"
                icon={<Linkedin size={18} />}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-white font-semibold tracking-wide uppercase text-sm mb-6">{title}</h4>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase().replace(/[^a-z]/g, "")}`}
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/40 hover:text-primary hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
