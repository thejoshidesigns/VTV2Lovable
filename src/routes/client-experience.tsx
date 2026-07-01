import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/client-experience")({
  head: () => ({
    meta: [
      { title: "Selected Client Experience | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "Successful SAP Treasury and Finance implementations across global enterprises including Co-op, Siemens, Adidas, Signet, Yorkshire Water and more.",
      },
      { property: "og:title", content: "Selected Client Experience | Vibha Technologies UK Ltd" },
      { property: "og:url", content: "/client-experience" },
    ],
    links: [{ rel: "canonical", href: "/client-experience" }],
  }),
  component: ClientExperiencePage,
});

const featured = [
  {
    client: "Co-op UK",
    domain: "coop.co.uk",
    industry: "Retail & Consumer",
    scope:
      "Full SAP Treasury implementation including Treasury Transaction Manager, Cash & Liquidity Management, Reuters and 360T integration, and multi-bank connectivity.",
    outcomes:
      "Group-wide cash visibility, automated 90% of banking communications, and robust risk controls.",
  },
  {
    client: "Siemens Gamesa",
    domain: "siemensgamesa.com",
    industry: "Renewable Energy",
    scope:
      "Global Treasury Management System implementation following complex merger integration across 27 countries.",
    outcomes:
      "Harmonized treasury processes across 27 countries with a single source of truth for cash and risk positions.",
  },
  {
    client: "Adidas",
    domain: "adidas.com",
    industry: "Retail & Manufacturing",
    scope:
      "Global Treasury Transformation focused on FX Risk Management, Hedging, integrated Liquidity Management and Trade Finance automation.",
    outcomes:
      "Reduced FX exposure risk and streamlined global liquidity positioning.",
  },
  {
    client: "Yorkshire Water",
    domain: "yorkshirewater.com",
    industry: "Utilities",
    scope:
      "SAP S/4HANA Central Finance transformation across 25 company codes.",
    outcomes: "Real-time financial insights and a scalable platform for innovation.",
  },
  {
    client: "Signet Jewelers",
    domain: "signetjewelers.com",
    industry: "Luxury Retail",
    scope:
      "Global Cash Management modernization supporting 3,300+ retail locations.",
    outcomes:
      "Automated high-volume store deposit reconciliations and near real-time corporate cash positioning.",
  },
];

const additionalClients = [
  { name: "SBD", domain: "sbd.co.uk" },
  { name: "Capita", domain: "capita.com" },
  { name: "Crossrail", domain: "crossrail.co.uk" },
  { name: "Ofcom", domain: "ofcom.org.uk" },
  { name: "Euro Insurances", domain: "euroinsurances.com" },
  { name: "Gazprom", domain: "gazprom.com" },
  { name: "Kellogg's", domain: "kelloggs.com" },
  { name: "TNT", domain: "tnt.com" },
  { name: "Homebase", domain: "homebase.co.uk" },
  { name: "Lloyds Banking", domain: "lloydsbankinggroup.com" },
  { name: "Al Futtaim", domain: "alfuttaim.com" },
  { name: "AC Nielsen", domain: "nielsen.com" },
  { name: "GE Water", domain: "ge.com" },
  { name: "Saudi Petro", domain: "sabic.com" },
];

const logoUrl = (domain: string) => `https://logo.clearbit.com/${domain}?size=200`;

function ClientExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-20 bg-muted/30">
        <div className="container-x max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold gradient-text mb-6">
            Proven Track Record
          </div>
          <h1 className="mb-6">Selected Client Experience</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We have architected and delivered highly complex treasury transformations for some
            of the world's most recognized brands.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {featured.map((c, i) => (
              <div
                key={c.client}
                className={`bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-lg transition ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-bold gradient-text">{c.client}</h3>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {c.industry}
                  </span>
                </div>
                <p className="text-foreground/90 mb-4 leading-relaxed">{c.scope}</p>
                <p className="text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="font-semibold text-foreground">Outcomes: </span>
                  {c.outcomes}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-muted/40 border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Additional Enterprise Clients
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {additionalClients.map((c) => (
                <div
                  key={c}
                  className="flex items-center bg-card border border-border rounded-lg p-4 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#00A6E0] mr-2 shrink-0" />
                  <span className="font-semibold text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center p-10 rounded-2xl bg-muted/50 border border-border">
            <h3 className="text-2xl font-bold mb-4">Ready to start your transformation?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Leverage our experience with global enterprises to ensure your SAP Treasury
              deployment is successful, compliant, and optimized.
            </p>
            <Link to="/contact">
              <Button className="gradient-primary text-white border-0 shadow-md">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
