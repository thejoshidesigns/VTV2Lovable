import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LogoMarquee } from "@/components/site/LogoMarquee";

import adidas from "@/assets/clients/adidas.png.asset.json";
import alFuttaim from "@/assets/clients/al-futtaim.png.asset.json";
import capita from "@/assets/clients/capita.webp.asset.json";
import coop from "@/assets/clients/coop.webp.asset.json";
import crossrail from "@/assets/clients/crossrail.png.asset.json";
import leaseplan from "@/assets/clients/leaseplan.png.asset.json";
import gazprom from "@/assets/clients/gazprom.png.asset.json";
import ge from "@/assets/clients/ge-water.png.asset.json";
import homebase from "@/assets/clients/homebase.webp.asset.json";
import kelloggs from "@/assets/clients/kelloggs.webp.asset.json";
import lloyds from "@/assets/clients/lloyds.png.asset.json";
import nielsen from "@/assets/clients/nielsen.png.asset.json";
import ofcom from "@/assets/clients/ofcom.webp.asset.json";
import sabic from "@/assets/clients/sabic.png.asset.json";
import sbd from "@/assets/clients/sbd.svg.asset.json";
import siemensGamesa from "@/assets/clients/siemens-gamesa.svg.asset.json";
import signet from "@/assets/clients/signet.png.asset.json";
import tnt from "@/assets/clients/tnt.webp.asset.json";
import yorkshireWater from "@/assets/clients/yorkshire-water.webp.asset.json";

const featured = [
  { client: "Co-op UK", industry: "Retail & Consumer", scope: "SAP S/4HANA Treasury implementation covering Cash Management, Bank Communication Management and In-House Cash for one of the UK's largest consumer co-operatives.", outcomes: "Centralized cash visibility across 2,500+ stores, automated bank statement processing and streamlined intercompany settlements." },
  { client: "Siemens Gamesa", industry: "Renewable Energy", scope: "Global SAP Treasury and Risk Management rollout supporting FX exposure management, hedge accounting (IFRS 9) and multi-entity liquidity planning.", outcomes: "Real-time FX risk visibility across 40+ countries and audit-ready hedge documentation." },
  { client: "Adidas", industry: "Retail & Apparel", scope: "SAP Treasury and In-House Cash design and delivery supporting global payment factory operations and intercompany netting.", outcomes: "Consolidated payment flows through a single payment factory, reducing external bank fees and improving working capital control." },
  { client: "Yorkshire Water", industry: "Utilities", scope: "SAP Treasury and Cash Management implementation aligned with UK regulatory reporting and long-term debt portfolio management.", outcomes: "Accurate daily cash positioning, automated debt servicing and improved compliance reporting." },
  { client: "Signet Jewelers", industry: "Retail & Consumer", scope: "SAP Treasury transformation covering cash operations, bank connectivity and risk management for the world's largest specialty jewellery retailer.", outcomes: "Global cash visibility, standardized bank connectivity via SWIFT and reduced manual treasury operations." },
];

const additionalClients = [
  { name: "Co-op UK", logo: coop.url },
  { name: "Siemens Gamesa", logo: siemensGamesa.url },
  { name: "Adidas", logo: adidas.url },
  { name: "Yorkshire Water", logo: yorkshireWater.url },
  { name: "Signet Jewelers", logo: signet.url },
  { name: "SBD", logo: sbd.url },
  { name: "Capita", logo: capita.url },
  { name: "Crossrail", logo: crossrail.url },
  { name: "Ofcom", logo: ofcom.url },
  { name: "LeasePlan", logo: leaseplan.url },
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

export default function ClientExperiencePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Selected Client Experience | Vibha Technologies UK Ltd</title>
        <meta name="description" content="Successful SAP Treasury and Finance implementations across global enterprises including Co-op, Siemens, Adidas, Signet, Yorkshire Water and more." />
        <meta property="og:title" content="Selected Client Experience | Vibha Technologies UK Ltd" />
        <meta property="og:description" content="Successful SAP Treasury and Finance implementations across global enterprises including Co-op, Siemens, Adidas, Signet and Yorkshire Water." />
        <meta property="og:image" content="/media/og-image.jpg" />
        <meta property="og:url" content="https://vibhatechnologies.co.uk/client-experience" />
        <meta name="twitter:image" content="/media/og-image.jpg" />
        <link rel="canonical" href="https://vibhatechnologies.co.uk/client-experience" />
      </Helmet>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="py-20 bg-muted/30 border-b border-border">
          <div className="container-x max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold gradient-text mb-6">Proven Track Record</div>
            <h1 className="mb-6">Selected <span className="gradient-text">Client Experience</span></h1>
            <p className="text-xl text-muted-foreground leading-relaxed">We have architected and delivered highly complex treasury transformations for some of the world's most recognized brands.</p>
          </div>
        </section>
        <section className="section-padding bg-background">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {featured.map((c, i) => (
                <div key={c.client} className={`bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col ${i === 0 ? "md:col-span-2" : ""}`}>
                  <div className="gradient-primary px-6 md:px-8 py-4 md:py-5 flex items-start justify-between gap-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight min-w-0">{c.client}</h3>
                    <span className="text-xs md:text-sm text-white/85 uppercase tracking-wider text-right shrink-0 pt-1">{c.industry}</span>
                  </div>
                  <div className="p-6 md:p-8 flex-1">
                    <p className="text-foreground/90 mb-4 leading-relaxed">{c.scope}</p>
                    <p className="text-sm text-muted-foreground border-t border-border pt-4">
                      <span className="font-semibold text-foreground">Outcomes: </span>{c.outcomes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative bg-muted/40 border border-border rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1.5 gradient-primary" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 gradient-primary" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Additional Enterprise Clients</h2>
              <LogoMarquee logos={additionalClients} speed={70} hoverSpeed={15} logoHeight={84} gap={72} grayscale={false} />
            </div>
            <div className="mt-16 rounded-2xl bg-card border border-border overflow-hidden shadow-sm">
              <div className="gradient-primary px-8 py-5">
                <h3 className="text-2xl font-bold text-white">Ready to start your transformation?</h3>
              </div>
              <div className="p-10 text-center">
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Leverage our experience with global enterprises to ensure your SAP Treasury deployment is successful, compliant, and optimized.</p>
                <Link to="/contact">
                  <Button className="gradient-primary text-white border-0 shadow-md">Contact Our Team</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
