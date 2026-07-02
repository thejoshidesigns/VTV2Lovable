import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LiquidLogo } from "@/components/site/LiquidLogo";
import heroLogo from "@/assets/vt-logo-hero.png.asset.json";

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
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const stats = [
  { value: "24+", label: "Years SAP Treasury & Finance Consulting" },
  { value: "16+", label: "Years Treasury & Banking" },
  { value: "34", label: "Global SAP Programs" },
  { value: "9", label: "SAP Certifications + CAIIB (Certified Associate of Indian Institute of Bankers)" },
];

const services = [
  {
    title: "SAP Treasury & Risk Management",
    description:
      "End-to-end implementation of Transaction Manager, Risk Analyzers, and Trade Finance.",
    capabilities: ["FX & Hedging", "Derivatives, Options and Swaps", "Treasury Accounting"],
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
      "Advanced Payment Factory and centralized global payment control across entities.",
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
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* Hero */}
      <section className="relative min-h-[90dvh] flex items-center bg-slate-950 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1535504663857-dab4d2908557"
            alt="Modern architectural glass building representing corporate finance"
            className="w-full h-full object-cover opacity-20 saturate-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
          <div className="absolute inset-0 gradient-primary mix-blend-multiply opacity-50" />
        </div>

        <div className="container-x relative z-10 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Enterprise Consultancy badge — bigger + gradient */}
              <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3 mb-8 shadow-[0_0_20px_rgba(0,166,224,0.4)]">
                <span className="flex h-3 w-3 rounded-full bg-[#00A6E0] mr-3 shadow-[0_0_10px_#00A6E0]" />
                <span className="text-lg md:text-xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#4DC9F0] to-white uppercase">
                  Enterprise Consultancy
                </span>
              </div>
              <h1 className="mb-6 text-white">
                Transforming Treasury &amp; Finance Operations Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DC9F0] to-[#609DE6]">
                  SAP Innovation
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light">
                Specialists in SAP Treasury, Cash Management and Finance Transformation.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="gradient-primary hover:gradient-primary-hover text-white border-0 shadow-lg w-full sm:w-auto"
                  >
                    Let's Discuss Your SAP Treasury Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
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

            {/* Liquid logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:block"
            >
              <LiquidLogo
                src={heroLogo.url}
                alt="Vibha Technologies liquid logo"
                className="w-full aspect-square max-w-[520px] ml-auto"
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
          <div className="mt-12 text-center flex items-center justify-center text-muted-foreground space-x-2">
            <Globe2 className="h-5 w-5 text-[#00A6E0]" />
            <span className="font-medium tracking-wide uppercase text-sm">
              Geographic Reach: UK | Europe | Middle East | USA | India
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
                  operations and enterprise technology. Our foundation is built on 16+ years of
                  real time core banking and treasury experience.
                </p>
                <p>
                  We understand the nuances of FX exposures, derivatives, options and swaps, and
                  SWIFT connectivity because we've build them. When we architect an SAP
                  solution, we ensure it resolves real-world treasury challenges.
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
            <div className="bg-card border border-border p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
              <div className="p-3 bg-primary/5 inline-flex rounded-xl mb-6">
                <Building2 className="h-10 w-10 text-[#0B5CAD]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Transformation</h3>
              <p className="text-muted-foreground mb-8">
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
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.description}</p>
                <ul className="space-y-2">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-[#00A6E0] mr-2 mt-0.5 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
