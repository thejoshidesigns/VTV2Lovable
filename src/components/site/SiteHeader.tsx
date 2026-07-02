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
      className={`sticky top-0 z-50 w-full transition-all duration-300 gradient-primary ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <nav className="container-x flex h-32 items-center justify-between gap-4">
        {/* Logo on the LEFT — inside a white rounded panel for visibility */}
        <Link to="/" className="flex items-center shrink-0">
          <div className="bg-white rounded-xl shadow-md p-2 sm:p-3">
            <img
              src="/__l5e/assets-v1/2e995d0c-6a05-4759-b6b4-4a478300f721/vibha-logo.svg"
              alt="Vibha Technologies UK Ltd Logo"
              className="h-20 sm:h-24 lg:h-24 w-auto object-contain block"
            />
          </div>
        </Link>

        {/* Desktop Nav (right) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-4 py-2 text-sm font-semibold rounded-md text-white/85 hover:text-white hover:bg-white/10 transition-colors"
              activeProps={{ className: "text-white bg-white/15" }}
              activeOptions={{ exact: link.path === "/" }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pl-4 ml-2 border-l border-white/25 h-8 flex items-center">
            <Link to="/contact">
              <Button
                size="sm"
                className="bg-white text-primary hover:bg-white/90 border-0 shadow-md font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 border border-white/30 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/15 bg-primary/95 backdrop-blur">
          <div className="container-x py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium rounded-lg text-white/90 hover:bg-white/10"
                activeProps={{ className: "bg-white/15 text-white" }}
                activeOptions={{ exact: link.path === "/" }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 bg-white text-primary hover:bg-white/90 border-0 font-semibold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
