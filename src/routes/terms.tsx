import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Vibha Technologies UK Ltd" },
      { name: "description", content: "Terms of service for Vibha Technologies UK Ltd." },
      { property: "og:title", content: "Terms of Service | Vibha Technologies UK Ltd" },
      { property: "og:url", content: "https://vibhatechnologies.co.uk/terms" },
    ],
    links: [{ rel: "canonical", href: "https://vibhatechnologies.co.uk/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="section-padding bg-background">
        <div className="container-x max-w-3xl">
          <h1 className="mb-6">Terms of Service</h1>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              These terms govern your use of the Vibha Technologies UK Ltd website. By
              accessing this site you agree to these terms.
            </p>
            <h2 className="text-foreground text-2xl font-bold mt-8">Use of content</h2>
            <p>
              All content including text, graphics, logos and branding is the property of Vibha
              Technologies UK Ltd. You may not reproduce or redistribute content without
              written permission.
            </p>
            <h2 className="text-foreground text-2xl font-bold mt-8">Consulting engagements</h2>
            <p>
              Information on this website is for general purposes only and does not constitute
              a consulting engagement. Formal engagements are governed by a separate signed
              agreement.
            </p>
            <h2 className="text-foreground text-2xl font-bold mt-8">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:appa@vibhatechnologies.co.uk"
                className="text-[#0B5CAD] font-medium"
              >
                appa@vibhatechnologies.co.uk
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
