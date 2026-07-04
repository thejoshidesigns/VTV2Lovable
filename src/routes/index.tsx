import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LiquidLogo } from "@/components/site/LiquidLogo";
import heroLogo from "@/assets/vt-logo-hero-v2.png.asset.json";
import heroVideo from "@/assets/vt-logo-hero-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SAP Treasury Transformation | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "Specialist SAP Treasury, Cash Management and Finance Transformation consultancy. Real banking experience meets deep SAP expertise.",
      },
      { property: "og:title", content: "SAP Treasury Transformation | Vibha Technologies UK Ltd" },
      { property: "og:description", content: "Specialist SAP Treasury, Cash Management and Finance Transformation consultancy with 16+ years of expertise across UK, Europe, Middle East, USA and India." },
      { property: "og:image", content: "https://vibhatechnologies.lovable.app/__l5e/assets-v1/b61956a1-0b05-4f34-ab05-3de3d8151c51/og-image.jpg" },
      { name: "twitter:image", content: "https://vibhatechnologies.lovable.app/__l5e/assets-v1/b61956a1-0b05-4f34-ab05-3de3d8151c51/og-image.jpg" },
      { property: "og:url", content: "https://vibhatechnologies.co.uk/" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
    ],
    links: [{ rel: "canonical", href: "https://vibhatechnologies.co.uk/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "24+", label: "Years SAP Treasury & Finance Consulting" },
  { value: "14+", label: "Years SAP Treasury & Banking" },
  { value: "34", label: "Global SAP Programs" },
  { value: "9", label: "SAP Certifications + CAIIB (Certified Associate of Indian Institute of Bankers)" },
];

const services = [
  {
    title: "SAP Treasury & Risk Management",
    description:
      "End-to-end implementation of Transaction Manager, Risk Analyzers, and Trade Finance.",
    capabilities: ["FX & Hedging", "Derivatives, Options & Swaps", "Treasury Accounting"],
  },
  {
    title: "Cash & Liquidity Management",
    description:
      "Global visibility and forecasting for enterprise cash flows and positioning.",
    capabilities: ["Liquidity Structures", "Liquidity Forecasting", "Cash Pooling", "Bank Statement Automation"],
  },
  {
    title: "In-House Banking",
    description: "Centralized banking operations that reduce external banking costs.",
    capabilities: ["Virtual Accounts", "Intercompany Settlements", "Internal Cash Concentration"],
  },
  {
    title: "Bank Connectivity",
    description: "Secure, automated integration between SAP and global banking partners.",
    capabilities: ["SWIFT & EBICS", "Bank Communication Mgmt", "Real Time Core Banking"],
  },
  {
    title: "Advanced Payment Management",
    description:
      "Payment Factory, centralized global payment control across entities.",
    capabilities: ["Centralized Payments", "Format Mapping (DME)", "Approval Workflows"],
  },
  {
    title: "SAP S/4HANA Finance",
    description: "Comprehensive financial transformation and migration to S/4HANA.",
    capabilities: ["Brownfield/Greenfield", "Central Finance", "Business Process Design"],
  },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="flex-1">

      {/* Hero */}
      <section className="relative flex items-center bg-slate-950 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1535504663857-dab4d2908557?w=1600&q=70&auto=format&fit=crop"
            alt="Modern architectural glass building representing corporate finance"
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover opacity-20 saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 gradient-primary mix-blend-multiply opacity-50" />
        </div>

        <div className="container-x relative z-10 py-8 md:py-12 lg:py-14 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2 mb-5 shadow-[0_0_20px_rgba(0,166,224,0.4)]">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#00A6E0] mr-3 shadow-[0_0_10px_#00A6E0]" />
                <span className="text-base md:text-lg font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#4DC9F0] to-white uppercase">
                  Enterprise Consultancy
                </span>
              </div>
              <h1 className="mb-4 text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                Transforming Treasury &amp; Finance Operations Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DC9F0] to-[#609DE6]">
                  SAP Innovation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed font-light">
                Specialists in SAP Treasury, Cash Management and Finance Transformation.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="gradient-primary hover:gradient-primary-hover text-white border-0 shadow-lg w-full sm:w-auto h-auto min-h-11 whitespace-normal text-center leading-snug py-3 text-sm sm:text-base"
                  >
                    <span className="flex-1">Let's Discuss Your SAP Treasury Transformation</span>
                    <ArrowRight className="ml-2 h-5 w-5 shrink-0" />
                  </Button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-slate-100 border-0 w-full sm:w-auto"
                  >
                    Explore Our Expertise
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Liquid logo — top-aligned with text, visible on all sizes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="block order-first lg:order-none"
            >
              <LiquidLogo
                src={heroLogo.url}
                videoSrc={heroVideo.url}
                chromaKey
                alt="Vibha Technologies liquid logo"
                className="w-full aspect-square max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] mx-auto lg:ml-auto lg:mr-0"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted relative">
        <div className="absolute top-0 left-0 w-full h-[1px] gradient-primary opacity-30" />
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  {s.value}
                </div>
                <p className="text-sm md:text-base text-muted-foreground font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center flex flex-wrap items-center justify-center text-muted-foreground gap-2">
            <Globe2 className="h-5 w-5 text-[#00A6E0]" />
            <span className="text-base md:text-lg font-medium">
              Geographic Reach: United Kingdom | Europe | Middle East | USA | India
            </span>
          </div>
        </div>
      </section>

      {/* Value */}
      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">
                Not just SAP contractors.
                <br />
                <span className="gradient-text">Treasury experts.</span>
              </h2>
              <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
                <p>
                  Vibha Technologies bridges the critical gap between complex financial
                  operations and enterprise technology. Our foundation is built on 14+ years of
                  real time core banking and treasury experience.
                </p>
                <p>
                  We understand the nuances of FX exposures, liquidity structures, derivatives,
                  options &amp; swaps, and SWIFT connectivity because we've built them. When we
                  architect an SAP solution, we ensure it resolves real-world treasury
                  challenges.
                </p>
              </div>
              <ul className="mt-8 space-y-4">
                {[
                  "Banking expertise integrated with SAP architecture",
                  "Strategic advisory combined with hands-on delivery",
                  "Proven track record across global enterprise landscapes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="mt-1 mr-3 h-5 w-5 text-[#00A6E0] shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-sky-100 border border-sky-300 rounded-2xl shadow-xl overflow-hidden">
              <div className="gradient-primary px-6 md:px-10 py-5 flex items-center gap-4">
                <div className="p-2.5 bg-white/95 inline-flex rounded-lg shadow-sm shrink-0">
                  <Building2 className="h-7 w-7 text-[#0B5CAD]" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight min-w-0">
                  Enterprise Transformation
                </h3>
              </div>
              <div className="p-6 md:p-10">
                <p className="text-slate-700 mb-8">
                  Delivering scalable, compliant, highly automated treasury solutions for
                  organizations migrating to SAP S/4HANA or optimizing existing landscapes.
                </p>
                <Link
                  to="/client-experience"
                  className="inline-flex items-center font-semibold gradient-text hover:opacity-80"
                >
                  View our client experience <ArrowRight className="ml-2 h-4 w-4 text-[#0B5CAD]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-padding bg-muted/30">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="mb-4">Core Competencies</h2>
              <p className="text-lg text-muted-foreground">
                Specialized SAP solutions addressing the complete spectrum of corporate finance
                and treasury operations.
              </p>
            </div>
            <Link to="/services">
              <Button
                variant="outline"
                className="border-primary/50 text-foreground hover:text-white hover:border-transparent relative overflow-hidden group"
              >
                <span className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10">View All Capabilities</span>
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-[0_10px_30px_-12px_rgba(11,92,173,0.25)] hover:shadow-[0_20px_45px_-15px_rgba(11,92,173,0.45)] transition-all duration-300 flex flex-col"
              >
                <div className="gradient-primary px-5 py-4">
                  <h3 className="text-lg font-bold text-white leading-tight">{s.title}</h3>
                </div>
                <div className="p-6 flex-1">
                <p className="text-muted-foreground text-sm mb-4">{s.description}</p>
                <ul className="space-y-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-[#00A6E0] mr-2 mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}
