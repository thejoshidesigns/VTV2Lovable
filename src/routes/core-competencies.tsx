import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Building2,
  ChartLine,
  Coins,
  CreditCard,
  Landmark,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/core-competencies")({
  head: () => ({
    meta: [
      { title: "Core Competencies | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "Core SAP Treasury, Cash & Liquidity, In-House Banking, Advanced Payment Management, Bank Connectivity and S/4HANA Finance competencies.",
      },
      { property: "og:title", content: "Core Competencies | Vibha Technologies UK Ltd" },
      { property: "og:url", content: "/core-competencies" },
    ],
    links: [{ rel: "canonical", href: "/core-competencies" }],
  }),
  component: CoreCompetenciesPage,
});

const competencies = [
  {
    icon: ShieldCheck,
    title: "SAP Treasury & Risk Management",
    points: [
      "Transaction Manager",
      "FX & Hedging",
      "Derivatives, Options & Swaps",
      "Risk Analyzers",
      "Trade Finance",
    ],
  },
  {
    icon: Wallet,
    title: "Cash & Liquidity Management",
    points: [
      "Cash Positioning",
      "Liquidity Forecasting",
      "Liquidity Structures",
      "Cash Pooling",
      "Bank Statement Automation",
    ],
  },
  {
    icon: Landmark,
    title: "In-House Banking",
    points: [
      "In-House Banking Configuration",
      "Virtual Accounts",
      "Intercompany Settlements",
      "Internal Cash Concentration",
    ],
  },
  {
    icon: CreditCard,
    title: "Advanced Payment Management",
    points: [
      "Payment Factory Design",
      "Centralized Payments",
      "Format Mapping (DME)",
      "Approval Workflows",
      "Payment Automation",
    ],
  },
  {
    icon: Building2,
    title: "Bank Connectivity",
    points: [
      "SWIFT Integration",
      "EBICS Connectivity",
      "Bank Communication Management",
      "Multi-Bank Connectivity",
      "Real Time Core Banking",
    ],
  },
  {
    icon: Coins,
    title: "SAP S/4HANA Finance",
    points: [
      "S/4HANA Assessments & Roadmaps",
      "Greenfield & Brownfield",
      "Central Finance",
      "SAP Activate Methodology",
      "Cutover & Hypercare",
    ],
  },
  {
    icon: ChartLine,
    title: "Treasury Analytics & Reporting",
    points: [
      "SAP Fiori Apps",
      "Custom Dashboards",
      "Exposure Reporting",
      "Compliance & Audit",
    ],
  },
  {
    icon: Banknote,
    title: "Regulatory & Compliance",
    points: [
      "IFRS 9 Hedge Accounting",
      "SOX Controls",
      "Audit Readiness",
      "Regulatory Reporting",
    ],
  },
];

function CoreCompetenciesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-16 gradient-primary text-white relative overflow-hidden">
        <div className="container-x max-w-3xl relative z-10">
          <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2 mb-6">
            <span className="text-sm md:text-base font-bold tracking-wide uppercase text-white">
              Core Competencies
            </span>
          </div>
          <h1 className="mb-4 text-white">Where Banking Meets SAP</h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light">
            Deep expertise across the complete SAP Treasury and Finance stack,
            underpinned by real world banking experience.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {competencies.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-[0_12px_30px_-12px_rgba(11,92,173,0.28)] hover:shadow-[0_25px_50px_-15px_rgba(11,92,173,0.5)] transition-all duration-300"
                >
                  <div className="inline-flex p-3 rounded-xl gradient-primary text-white mb-4 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{c.title}</h3>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {c.points.map((p) => (
                      <li key={p}>• {p}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-primary text-white border-0 shadow-md h-14 px-8 text-lg"
              >
                Discuss Your Requirements <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
