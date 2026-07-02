import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "Treasury expertise built on real banking experience. Discover the unique positioning of Vibha Technologies.",
      },
      { property: "og:title", content: "About Us | Vibha Technologies UK Ltd" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const managedItems = [
  "Cash & Liquidity",
  "FX Exposure",
  "Debt Management",
  "Intercompany Funding",
  "Payment Processing",
  "Banking Relationships",
  "Financial Risk Management",
  "Regulatory Compliance",
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-40" />
        <div className="container-x relative z-10 max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-6 py-3 text-lg md:text-xl font-bold uppercase tracking-wide text-white mb-8 shadow-[0_0_20px_rgba(0,166,224,0.35)]">
            <span className="flex h-3 w-3 rounded-full bg-[#00A6E0] mr-3 shadow-[0_0_10px_#00A6E0]" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4DC9F0] to-white">
              About Vibha Technologies
            </span>
          </div>
          <h1 className="mb-6 text-white">
            Built on Real Time Core Banking Experience
          </h1>
          <p className="text-xl text-white/80 leading-relaxed font-light">
            Bridging the gap between complex financial operations and enterprise technology.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-8">
                <p>
                  Vibha Technologies UK Ltd was founded in 2019 with a singular, focused
                  mission: to provide organizations with SAP Treasury solutions architected by
                  professionals who actually understand the business of treasury.
                </p>
                <p>
                  Our founder garnered 16+ years of rich experience in global banking before
                  transitioning to enterprise SAP architecture, bringing real time core banking
                  expertise to every engagement.
                </p>
              </div>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-white border-0 shadow-md">
                  Speak with our Leadership <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="bg-card shadow-sm p-8 rounded-2xl border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full gradient-primary" />
              <h3 className="mb-6 flex items-center text-xl">
                <span className="p-2 rounded-lg bg-primary/5 mr-3">
                  <ShieldCheck className="h-6 w-6 text-[#00A6E0]" />
                </span>
                Our Unique Positioning
              </h3>
              <div className="pb-6 border-b border-border/60">
                <h4 className="text-base font-semibold mb-2 text-[#0B5CAD]">Traditional SAP Firms</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Focus primarily on system configuration, requiring extensive hand-holding from
                  internal finance teams.
                </p>
              </div>
              <div className="pt-6">
                <h4 className="text-base font-semibold mb-2 gradient-text">Vibha Technologies</h4>
                <p className="text-foreground font-medium text-sm leading-relaxed">
                  We speak the language of Finance. We design SAP solutions that inherently
                  address the complexities of risk, liquidity, and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex p-4 rounded-2xl bg-white shadow-sm border border-border mb-6">
              <Landmark className="h-10 w-10 text-[#0B5CAD]" />
            </div>
            <h2 className="mb-4">Enterprise Treasury Capabilities We Enable</h2>
            <p className="text-lg text-muted-foreground">
              Our SAP implementations establish control and visibility across these critical
              areas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {managedItems.map((item) => (
              <Card key={item} className="bg-card border-border hover:shadow-md transition">
                <CardContent className="p-6 flex items-center justify-center text-center h-full">
                  <span className="font-semibold">{item}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 gradient-primary text-white p-10 md:p-14 rounded-3xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-white">
                "Our core philosophy is delivering real-world treasury solutions, not merely
                software configuration."
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Every deployment, migration, and automation is measured against the operational
                efficiencies and risk mitigation it provides to the CFO and Treasurer.
              </p>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <h3 className="flex items-center text-2xl">
                <Award className="h-7 w-7 text-[#00A6E0] mr-3" />
                Team &amp; Credentials
              </h3>
              <ul className="space-y-4">
                {[
                  "9 Active SAP Certifications + CAIIB (Certified Associate of Indian Institute of Bankers)",
                  "16+ Years Real Time Core Banking Experience",
                  "34 Global Enterprise Implementations",
                ].map((it) => (
                  <li
                    key={it}
                    className="flex items-center text-foreground font-medium p-4 bg-muted/50 rounded-xl border border-border/50"
                  >
                    <ArrowRight className="h-5 w-5 text-[#0B5CAD] mr-3 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
