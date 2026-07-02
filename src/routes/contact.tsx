import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  UserCircle,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Receipt,
  Clock,
  Send,
  Loader2,
  Globe2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get in Touch | Vibha Technologies UK Ltd" },
      {
        name: "description",
        content:
          "Contact Vibha Technologies for SAP S/4HANA migration, Treasury Transformation, Cash & Liquidity Management, In-House Banking and Advanced Payment Management.",
      },
      { property: "og:title", content: "Get in Touch | Vibha Technologies UK Ltd" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(5, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  serviceArea: z.string().min(1, "Please select a service area"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      console.log("Contact form:", data);
      toast.success("Inquiry submitted successfully", {
        description: "We will contact you shortly regarding your requirements.",
      });
      reset();
      setValue("serviceArea", "");
    } catch {
      toast.error("Submission failed", {
        description: "Please try again or contact us directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <section className="py-20 bg-slate-950 border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-40" />
        <div className="container-x relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="mb-6 text-white">Get in Touch</h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-light">
            Partner with us for specialized expertise in SAP S/4HANA migration, Treasury
            Transformation, Cash &amp; Liquidity Management, In-House Banking, Advanced Payment
            Factory and Advanced Payment Management, and comprehensive Banking Integration
            services.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-4 flex items-start gap-2">
                  <Globe2 className="h-5 w-5 text-[#00A6E0] mt-0.5 shrink-0" />
                  Serving clients across <strong className="mx-1">UK, Europe and global</strong>{" "}
                  markets — supporting your transformation across all time zones.
                </p>
              </div>

              <Card className="bg-muted/30 border-border/50 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full gradient-primary" />
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 gradient-primary rounded-xl text-white shadow-sm">
                      <UserCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                        Contact Person
                      </p>
                      <p className="text-lg font-bold text-foreground">
                        Appa Rao Vadduri
                      </p>
                      <p className="text-[#0B5CAD] font-medium mt-1">
                        Founder &amp; Principal SAP Treasury Consultant
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border border-border/50 hover:border-[#00A6E0]/40 transition-colors">
                  <CardContent className="p-5">
                    <Phone className="h-5 w-5 text-[#00A6E0] mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Direct Phone</p>
                    <a
                      href="tel:+447466854499"
                      className="font-semibold hover:text-[#0B5CAD]"
                    >
                      +44 7466 854499
                    </a>
                  </CardContent>
                </Card>

                <Card className="border border-border/50 hover:border-[#00A6E0]/40 transition-colors">
                  <CardContent className="p-5">
                    <Mail className="h-5 w-5 text-[#00A6E0] mb-3" />
                    <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                    <a
                      href="mailto:contact@vibhatechnologies.co.uk"
                      className="font-semibold hover:text-[#0B5CAD] break-all"
                    >
                      contact@vibhatechnologies.co.uk
                    </a>
                  </CardContent>
                </Card>
              </div>

              <Card className="border border-border/50 bg-card">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-muted-foreground mr-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Company</p>
                      <p className="font-semibold">Vibha Technologies UK Ltd</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Headquarters</p>
                      <p className="font-medium leading-relaxed">
                        67 Hall Road, East Ham
                        <br />
                        London, United Kingdom
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Receipt className="h-5 w-5 text-muted-foreground mr-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">VAT Registration</p>
                      <p className="font-medium">GB320844719</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-muted-foreground mr-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Company Registration Number
                      </p>
                      <p className="font-medium">(to be provided)</p>
                    </div>
                  </div>
                  <div className="flex items-start pt-4 border-t border-border/60">
                    <Clock className="h-5 w-5 text-[#00A6E0] mr-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Business Hours</p>
                      <p className="font-medium">Monday – Friday</p>
                      <p className="font-medium text-muted-foreground">
                        09:00 – 18:00 UK Time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form column */}
            <div className="lg:col-span-7">
              <Card className="relative overflow-hidden border-border/60 shadow-md">
                <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
                <CardHeader className="border-b border-border/50 pb-6 bg-muted/10 pt-8">
                  <CardTitle className="text-2xl">Consulting Inquiry</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Share your project details. We typically respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="Jane Doe" {...register("name")} />
                        {errors.name && (
                          <p className="text-sm text-destructive font-medium">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Global Enterprise Corp"
                          {...register("company")}
                        />
                        {errors.company && (
                          <p className="text-sm text-destructive font-medium">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="jane.doe@company.com"
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive font-medium">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+44 20 1234 5678"
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive font-medium">
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceArea">Primary Service Area</Label>
                      <Select onValueChange={(v) => setValue("serviceArea", v)}>
                        <SelectTrigger id="serviceArea">
                          <SelectValue placeholder="Select transformation area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SAP Treasury & Risk Management">
                            SAP Treasury &amp; Risk Management
                          </SelectItem>
                          <SelectItem value="Cash & Liquidity Management">
                            Cash &amp; Liquidity Management
                          </SelectItem>
                          <SelectItem value="In-House Banking">In-House Banking</SelectItem>
                          <SelectItem value="Advanced Payment Management">
                            Advanced Payment Management
                          </SelectItem>
                          <SelectItem value="Bank Integration">Bank Integration</SelectItem>
                          <SelectItem value="S/4HANA Finance Transformation">
                            S/4HANA Finance Transformation
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.serviceArea && (
                        <p className="text-sm text-destructive font-medium">
                          {errors.serviceArea.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message / Requirements</Label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Please describe your current SAP landscape or transformation objectives..."
                        className="resize-none"
                        {...register("message")}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive font-medium">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full gradient-primary text-white border-0 shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
