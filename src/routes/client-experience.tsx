import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

import adidas from "@/assets/clients/adidas.png.asset.json";
import alFuttaim from "@/assets/clients/al-futtaim.png.asset.json";
import capita from "@/assets/clients/capita.webp.asset.json";
import coop from "@/assets/clients/coop.webp.asset.json";
import crossrail from "@/assets/clients/crossrail.png.asset.json";
import euroInsurances from "@/assets/clients/euro-insurances.png.asset.json";
import gazprom from "@/assets/clients/gazprom.png.asset.json";
import ge from "@/assets/clients/ge.avif.asset.json";
import homebase from "@/assets/clients/homebase.webp.asset.json";
import kelloggs from "@/assets/clients/kelloggs.webp.asset.json";
import lloyds from "@/assets/clients/lloyds.png.asset.json";
import nielsen from "@/assets/clients/nielsen.png.asset.json";
import ofcom from "@/assets/clients/ofcom.webp.asset.json";
import sabic from "@/assets/clients/sabic.png.asset.json";
import sbd from "@/assets/clients/sbd.png.asset.json";
import siemensGamesa from "@/assets/clients/siemens-gamesa.webp.asset.json";
import signet from "@/assets/clients/signet.png.asset.json";
import tnt from "@/assets/clients/tnt.png.asset.json";
import yorkshireWater from "@/assets/clients/yorkshire-water.png.asset.json";

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
    logo: coop.url,
    industry: "Retail & Consumer",
    scope:
      "Full SAP Treasury implementation including Treasury Transaction Manager, Cash & Liquidity Management, Reuters and 360T integration, and multi-bank connectivity.",
    outcomes:
      "Group-wide cash visibility, automated 90% of banking communications, and robust risk controls.",
  },
  {
    client: "Siemens Gamesa",
    logo: siemensGamesa.url,
    industry: "Renewable Energy",
    scope:
      "Global Treasury Management System implementation following complex merger integration across 27 countries.",
    outcomes:
      "Harmonized treasury processes across 27 countries with a single source of truth for cash and risk positions.",
  },
  {
    client: "Adidas",
    logo: adidas.url,
    industry: "Retail & Manufacturing",
    scope:
      "Global Treasury Transformation focused on FX Risk Management, Hedging, integrated Liquidity Management and Trade Finance automation.",
    outcomes:
      "Reduced FX exposure risk and streamlined global liquidity positioning.",
  },
  {
    client: "Yorkshire Water",
    logo: yorkshireWater.url,
    industry: "Utilities",
    scope:
      "SAP S/4HANA Central Finance transformation across 25 company codes.",
    outcomes: "Real-time financial insights and a scalable platform for innovation.",
  },
  {
    client: "Signet Jewelers",
    logo: signet.url,
    industry: "Luxury Retail",
    scope:
      "Global Cash Management modernization supporting 3,300+ retail locations.",
    outcomes:
      "Automated high-volume store deposit reconciliations and near real-time corporate cash positioning.",
  },
];

const additionalClients = [
  { name: "SBD", logo: sbd.url },
  { name: "Capita", logo: capita.url },
  { name: "Crossrail", logo: crossrail.url },
  { name: "Ofcom", logo: ofcom.url },
  { name: "Euro Insurances", logo: euroInsurances.url },
  { name: "Gazprom", logo: gazprom.url },
  { name: "Kellogg's", logo: kelloggs.url },
  { name: "TNT", logo: tnt.url },
  { name: "Homebase", logo: homebase.url },
  { name: "Lloyds Banking", logo: lloyds.url },
  { name: "Al Futtaim", logo: alFuttaim.url },
  { name: "AC Nielsen", logo: nielsen.url },
  { name: "GE Water", logo: ge.url },
  { name: "Saudi Petro (SABIC)", logo: sabic.url },
];

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
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-16 w-16 shrink-0 rounded-lg bg-white border border-border flex items-center justify-center p-2">
                      <img
                        src={c.logo}
                        alt={`${c.client} logo`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text truncate">{c.client}</h3>
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider text-right shrink-0">
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
                  key={c.name}
                  className="flex flex-col items-center justify-center gap-2 bg-white border border-border rounded-lg p-4 shadow-sm h-28"
                >
                  <div className="flex-1 flex items-center justify-center w-full">
                    <img
                      src={c.logo}
                      alt={`${c.name} logo`}
                      className="max-h-12 max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="font-semibold text-xs text-center text-muted-foreground">
                    {c.name}
                  </span>
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
