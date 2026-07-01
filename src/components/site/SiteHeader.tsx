import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" as const },
  { name: "About", path: "/about" as const },
  { name: "Services", path: "/services" as const },
  { name: "Client Experience", path: "/client-experience" as const },
  { name: "Industries", path: "/industries" as const },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border"
          : "bg-background border-transparent"
      }`}
    >
      <div className="absolute bottom-0 left-0 w-full h-[2px] gradient-primary opacity-20" />
      <nav className="container-x flex h-24 items-center justify-between">
        {/* Desktop Nav (left) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 text-sm font-medium rounded-md text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary bg-primary/5" }}
              activeOptions={{ exact: link.path === "/" }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pl-4 ml-2 border-l border-border h-8 flex items-center">
            <Link to="/contact">
              <Button
                size="sm"
                className="gradient-primary hover:gradient-primary-hover border-0 text-white shadow-md"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button (left on mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 border border-border/60 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Logo on the RIGHT */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="https://horizons-cdn.hostinger.com/e34c5094-7004-485f-bc7b-0eac8887f80d/b077d1c29b287ab71e7bfb59407201b1.png"
            alt="Vibha Technologies UK Ltd Logo"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </Link>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-lg hover:bg-muted"
                activeProps={{ className: "bg-primary/5 text-primary" }}
                activeOptions={{ exact: link.path === "/" }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 gradient-primary text-white border-0">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
