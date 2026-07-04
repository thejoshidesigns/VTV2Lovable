import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Specialist SAP Services | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "SAP Treasury, Cash Management, In-House Banking, Advanced Payment Management, Bank Integration and S/4HANA Finance services.",
      },
      { property: "og:title", content: "Specialist SAP Services | Vibha Technologies UK Ltd" },
      { property: "og:description", content: "SAP Treasury, Cash Management, In-House Banking, Advanced Payment Management, Bank Integration and S/4HANA Finance services." },
      { property: "og:url", content: "https://vibhatechnologies.co.uk/services" },
      { property: "og:image", content: "https://vibhatechnologies.co.uk/og/og-services.jpg" },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { name: "twitter:image", content: "https://vibhatechnologies.co.uk/og/og-services.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://vibhatechnologies.co.uk/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "SAP Treasury & Finance Consulting",
          provider: { "@type": "Organization", name: "Vibha Technologies UK Ltd", url: "https://vibhatechnologies.co.uk" },
          areaServed: ["United Kingdom", "Europe", "Middle East", "United States", "India"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "SAP Services",
            itemListElement: [
              "SAP Treasury & Risk Management",
              "SAP Cash Management",
              "SAP In-House Banking",
              "SAP Advanced Payment Management",
              "SAP Bank Communication Management",
              "SAP S/4HANA Finance",
            ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
          },
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "SAP Treasury & Risk Management",
    description:
      "Comprehensive configuration and deployment of SAP TRM to automate transaction lifecycles and ensure compliance.",
    capabilities: [
      "Treasury Transaction Manager",
      "FX Management & Hedging",
      "Derivatives, Options & Swaps",
      "Money Market & Securities",
      "Risk Management Analyzers",
      "Trade Finance",
      "Treasury Accounting Integration",
    ],
  },
  {
    title: "Cash & Liquidity Management",
    description:
      "Group-wide visibility of cash positions, sophisticated forecasting, and optimized liquidity structures.",
    capabilities: [
      "Cash Positioning",
      "Liquidity Forecasting",
      "Cash Flow Analytics",
      "Bank Statement Management",
      "Cash Pooling Structures",
      "Intercompany Cash Management",
    ],
  },
  {
    title: "In-House Banking",
    description:
      "Central treasury operations to consolidate banking relationships and streamline intercompany flows.",
    capabilities: [
      "In-House Banking Configuration",
      "Virtual Account Management",
      "Intercompany Settlements",
      "Internal Cash Concentration",
    ],
  },
  {
    title: "Advanced Payment Management",
    description:
      "Advanced Payment Factory design, centralized global payment processing and approval controls.",
    capabilities: [
      "Advanced Payment Factory Design",
      "Centralized Payments Processing",
      "Format Mapping (DME)",
      "Approval Workflows",
      "Payment Automation",
    ],
  },
  {
    title: "Bank Integration & Connectivity",
    description:
      "Secure, automated communication channels between your SAP landscape and global financial institutions.",
    capabilities: [
      "SWIFT Integration",
      "EBICS Connectivity",
      "Bank Communication Management (BCM)",
      "Real Time Core Banking Integration",
      "Multi-Bank Connectivity (MBC)",
    ],
  },
  {
    title: "SAP S/4HANA Finance Transformation",
    description:
      "Strategic advisory and technical execution for migrating treasury operations to S/4HANA.",
    capabilities: [
      "S/4HANA Assessments & Roadmaps",
      "Greenfield Implementations",
      "Brownfield Migrations",
      "Central Finance Deployments",
      "SAP Activate Methodology",
      "Testing, Cutover & Hypercare",
    ],
  },
  {
    title: "Treasury Analytics & Reporting",
    description:
      "Advanced data visualization enabling real-time treasury insights and data-driven decisions.",
    capabilities: [
      "SAP Fiori App Configuration",
      "Custom Treasury Dashboards",
      "Exposure Reporting",
      "Compliance & Audit Reporting",
      "Management Reporting Portals",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container-x max-w-3xl">
          <h1 className="mb-6">Our <span className="gradient-text">Services</span></h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Specialized architectural design, implementation, and optimization across the
            complete SAP Finance and Treasury suite.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-[0_12px_30px_-12px_rgba(11,92,173,0.28)] hover:shadow-[0_25px_50px_-15px_rgba(11,92,173,0.5)] transition-all duration-300 flex flex-col"
              >
                <div className="gradient-primary px-5 py-4">
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight">{s.title}</h3>
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

          {/* Enlarged CTA */}
          <div className="mt-20 text-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-primary hover:gradient-primary-hover border-0 text-white shadow-lg h-16 px-10 text-lg md:text-xl font-semibold"
              >
                Discuss Your Transformation Needs{" "}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-primary text-white">
        <div className="container-x text-center max-w-4xl mx-auto">
          <h2 className="mb-6 text-white text-2xl md:text-3xl">Proven Delivery Methodology</h2>
          <p className="text-white/90 text-lg leading-relaxed mb-8">
            Every service area is backed by our proven client experience. We use agile delivery
            aligned with SAP Activate for rapid time-to-value and seamless knowledge transfer.
          </p>
          <Link to="/client-experience">
            <Button className="bg-white text-[#0B5CAD] hover:bg-slate-100 border-0">
              View Client Success Stories
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
