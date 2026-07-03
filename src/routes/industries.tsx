import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "Proven across Banking, Insurance & Financial Services, Oil and Gas, Utilities, Media, Manufacturing and Public Sector.",
      },
      { property: "og:title", content: "Industries We Serve | Vibha Technologies UK Ltd" },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const industries = [
  {
    sector: "Banking, Insurance & Financial Services",
    clients: ["HBOS", "Lloyds Banking", "LeasePlan"],
  },
  {
    sector: "Oil and Gas",
    clients: ["Saudi Petro", "Gazprom"],
  },
  {
    sector: "Utilities",
    clients: ["SWS", "GE Water", "Yorkshire Water"],
  },
  {
    sector: "Media",
    clients: ["Cox Newspapers", "AC Nielsen"],
  },
  {
    sector: "Manufacturing",
    clients: ["Siemens Gamesa", "SBD", "Lanxess Chemicals", "Grasim Industries"],
  },
  {
    sector: "Retail & Consumer",
    clients: ["Co-op UK", "Adidas", "Signet Jewelers", "Homebase", "Kellogg's"],
  },
  {
    sector: "Public Sector",
    clients: ["Detroit Public Schools", "Crossrail", "Ofcom", "Birmingham City Council"],
  },
  {
    sector: "Pharmaceutical & Life Sciences",
    clients: ["Sri Krishna Pharma", "Dr Reddy's"],
  },
];

function IndustriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container-x text-center max-w-3xl mx-auto">
          <h1 className="mb-6">
            Proven Experience Across{" "}
            <span className="gradient-text">Global Enterprises</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our SAP Treasury expertise has been tested across diverse regulatory environments
            and global operational scales.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-border rounded-xl p-6 shadow-[0_12px_30px_-12px_rgba(11,92,173,0.28)] hover:shadow-[0_25px_50px_-15px_rgba(11,92,173,0.5)] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <span className="p-2 rounded-lg gradient-primary text-white mr-3">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold">{ind.sector}</h3>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {ind.clients.map((c) => (
                    <li key={c}>• {c}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="gradient-primary text-white border-0 shadow-md h-14 px-8 text-lg"
              >
                Discuss Your Industry Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
