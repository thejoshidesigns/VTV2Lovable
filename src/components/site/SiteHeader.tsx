import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import vibhaLogo from "@/assets/vibha-logo.svg.asset.json";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Core Competencies", path: "/core-competencies" },
  { name: "Services", path: "/services" },
  { name: "Client Experience", path: "/client-experience" },
  { name: "Industries", path: "/industries" },
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 gradient-primary ${scrolled ? "shadow-lg" : ""}`}>
      <nav className="container-x flex h-28 md:h-32 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0">
          <div className="bg-white rounded-xl shadow-md p-2">
            <img src={vibhaLogo.url} alt="Vibha Technologies UK Ltd Logo" className="h-20 md:h-24 w-auto object-contain block" />
          </div>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive ? "text-white bg-white/15" : "text-white/85 hover:text-white hover:bg-white/10"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pl-4 ml-2 border-l border-white/25 h-8 flex items-center">
            <Link to="/contact">
              <Button size="sm" className="bg-white text-primary hover:bg-white/90 border-0 shadow-md font-semibold">Contact Us</Button>
            </Link>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex items-center justify-center rounded-md p-2 border border-white/30 text-white" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-white/15 bg-primary/95 backdrop-blur">
          <div className="container-x py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-medium rounded-lg ${isActive ? "bg-white/15 text-white" : "text-white/90 hover:bg-white/10"}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full mt-2 bg-white text-primary hover:bg-white/90 border-0 font-semibold">Contact Us</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
