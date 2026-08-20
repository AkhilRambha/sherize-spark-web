import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Globe,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  PhoneCall,
  Headphones,
} from "lucide-react";
import { PageShell, CTASection } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { WhyChoose } from "@/components/site/WhyChoose";
import { BackButton } from "@/components/site/BackButton";
import servicesHeroBg from "@/assets/services_hero_bg.jpg";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Sherize Digital Solutions for Business Growth" },
      {
        name: "description",
        content:
          "Sherize delivers websites, web & mobile apps, UI/UX, digital marketing, telecalling and BPO support — built for growth.",
      },
      { property: "og:title", content: "Sherize Digital Services" },
      {
        property: "og:description",
        content: "Creative, scalable, business-focused digital solutions.",
      },
    ],
  }),
});

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom business websites designed for performance, user experience, and brand growth. We build fast, scalable, and secure digital storefronts.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
  },
  {
    icon: Code2,
    title: "Web Applications",
    desc: "Scalable web applications built with modern technology and seamless functionality. Custom dashboards, SaaS platforms, and internal tools.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Mobile App Dev",
    desc: "End-to-end iOS & Android mobile app development tailored exactly to your business needs, focusing on native-like performance.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-focused UI/UX design for intuitive and engaging digital experiences that convert visitors into loyal customers.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Comprehensive branding, content strategy, social media marketing, and data-driven growth campaigns that scale your reach.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    icon: PhoneCall,
    title: "Telecalling",
    desc: "Professional telecalling for outreach, follow-up, and engagement. We act as a seamless extension of your sales team.",
    img: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Headphones,
    title: "BPO Solutions",
    desc: "Reliable outsourced business support for customer operations and seamless day-to-day growth.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
  },
];

function SectionDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6 sm:py-8">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <BackButton />

      {/* Massive Cinematic Hero */}
      <section className="relative pt-40 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="Digital Services"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-primary font-medium mb-6">
              <span className="h-px w-12 bg-primary/50" />
              Our Services
              <span className="h-px w-12 bg-primary/50" />
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-display font-semibold tracking-tighter leading-[0.95] mb-8 text-white">
              Digital Craft & <br className="hidden md:block" />{" "}
              <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              From robust web applications to comprehensive digital marketing and BPO support, we
              provide the end-to-end services your business needs to scale.
            </p>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      {/* Expanding Image Accordion */}
      <section className="relative py-12 sm:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl sm:text-5xl font-display font-semibold tracking-tight text-white">
              Explore <span className="text-gradient">Services</span>
            </h2>
          </Reveal>

          <div className="flex w-full h-[400px] sm:h-[450px] gap-2 sm:gap-4 overflow-hidden rounded-[2rem]">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative flex-1 hover:grow-[6] sm:hover:grow-[8] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden cursor-pointer rounded-[2rem] bg-white/5 border border-white/10"
              >
                {/* Background Image */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-125 group-hover:scale-100"
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end">
                  {/* Compressed State (Vertical Title) */}
                  <div className="flex flex-col items-center justify-end h-full gap-4 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-500 absolute inset-0 pb-8 pointer-events-none">
                    <s.icon className="h-6 w-6 text-white/50" />
                    <div
                      style={{ writingMode: "vertical-rl" }}
                      className="rotate-180 text-lg sm:text-xl font-display font-medium tracking-wider text-white/70 whitespace-nowrap overflow-hidden text-ellipsis h-2/3 text-center"
                    >
                      {s.title}
                    </div>
                  </div>

                  {/* Expanded State Content */}
                  <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100 relative z-10 w-[300px] sm:w-[450px] flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <span className="grid h-10 w-10 sm:h-12 sm:w-12 shrink-0 place-items-center rounded-xl sm:rounded-2xl bg-primary/30 text-primary backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.5)] border border-primary/50">
                        <s.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>
                      <h3 className="text-xl sm:text-3xl font-display font-semibold text-white drop-shadow-md">
                        {s.title}
                      </h3>
                    </div>

                    <p className="text-sm text-white/90 font-light leading-relaxed mb-4 w-full max-w-[400px] drop-shadow">
                      {s.desc}
                    </p>

                    <div>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
                      >
                        Apply Now <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Unified Why Choose Us Section */}
      <WhyChoose />

      <SectionDivider />

      <CTASection
        eyebrow="Let's collaborate"
        title="Let's Build Something"
        highlight="Great Together"
        text="Whether you need a website, app, design support, digital marketing, telecalling, or BPO solutions, Sherize helps your business grow with creativity, technology, and reliable support."
        actions={
          <>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-glow shine"
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium btn-ghost-glass"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </>
        }
      />
    </PageShell>
  );
}
