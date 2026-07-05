import { Helmet } from "react-helmet-async";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Vibha Technologies UK Ltd</title>
        <meta name="description" content="Privacy policy for Vibha Technologies UK Ltd: how we collect, use and protect your personal information." />
        <meta property="og:title" content="Privacy Policy | Vibha Technologies UK Ltd" />
        <meta property="og:description" content="How Vibha Technologies UK Ltd collects, uses and protects your personal information." />
        <meta property="og:url" content="https://vibhatechnologies.co.uk/privacy" />
        <link rel="canonical" href="https://vibhatechnologies.co.uk/privacy" />
      </Helmet>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-padding bg-background">
          <div className="container-x max-w-3xl">
            <h1 className="mb-6"><span className="gradient-text">Privacy</span> Policy</h1>
            <div className="prose prose-slate max-w-none space-y-4 text-muted-foreground leading-relaxed">
              <p>Vibha Technologies UK Ltd ("we", "us", "our") respects your privacy. This policy explains how we collect, use and protect information provided through our website at vibhatechnologies.co.uk.</p>
              <h2 className="text-foreground text-2xl font-bold mt-8">Information we collect</h2>
              <p>When you submit our consulting enquiry form we collect your name, company, work email, phone number, service interest and message content. We use this information solely to respond to your enquiry.</p>
              <h2 className="text-foreground text-2xl font-bold mt-8">How we use information</h2>
              <p>We use your details to contact you about your enquiry, provide requested information and follow up on any consulting engagement. We do not sell or share your personal information with third parties for marketing purposes.</p>
              <h2 className="text-foreground text-2xl font-bold mt-8">Contact</h2>
              <p>For any privacy questions, contact us at{" "}
                <a href="mailto:appa@vibhatechnologies.co.uk" className="text-[#0B5CAD] font-medium">appa@vibhatechnologies.co.uk</a>{" "}or{" "}
                <a href="mailto:contact@vibhatechnologies.co.uk" className="text-[#0B5CAD] font-medium">contact@vibhatechnologies.co.uk</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
