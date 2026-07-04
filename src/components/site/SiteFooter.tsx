import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Building2, Receipt } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1.5 gradient-primary" />
      <div className="container-x py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white inline-block p-6 rounded-2xl shadow-lg">
              <img
                src="/__l5e/assets-v1/2e995d0c-6a05-4759-b6b4-4a478300f721/vibha-logo.svg"
                alt="Vibha Technologies UK Ltd Logo"
                className="h-40 w-auto object-contain"
              />
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-white block">
              Enterprise SAP Treasury &amp; Finance Consulting
            </span>
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Specialist consultancy bridging complex financial operations and enterprise
              technology through deep SAP innovation and real-world banking expertise.
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Contact Details
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start text-sm text-slate-400">
                  <span className="mt-0.5 mr-3 rounded bg-white/5 p-1.5">
                    <Mail className="h-4 w-4 text-[#00A6E0]" />
                  </span>
                  <span className="pt-1 flex flex-col gap-1">
                    <a href="mailto:appa@vibhatechnologies.co.uk" className="hover:text-white transition-colors">
                      appa@vibhatechnologies.co.uk
                    </a>
                    <a href="mailto:contact@vibhatechnologies.co.uk" className="hover:text-white transition-colors">
                      contact@vibhatechnologies.co.uk
                    </a>
                  </span>
                </div>
              </li>
              <li>
                <a
                  href="tel:+447466854499"
                  className="flex items-start text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <span className="mt-0.5 mr-3 rounded bg-white/5 p-1.5">
                    <Phone className="h-4 w-4 text-[#00A6E0]" />
                  </span>
                  <span className="pt-1">+44 7466 854499</span>
                </a>
              </li>
              <li className="flex items-start text-sm text-slate-400">
                <span className="mt-0.5 mr-3 rounded bg-white/5 p-1.5">
                  <MapPin className="h-4 w-4 text-[#00A6E0]" />
                </span>
                <span className="pt-1 leading-relaxed">
                  67<br />
                  Hall Road<br />
                  London E6 2NG<br />
                  United Kingdom
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white">
              Professional Information
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm text-slate-400">
                <Building2 className="h-4 w-4 mr-3 text-slate-500 shrink-0" />
                Company: Vibha Technologies UK Ltd
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <Receipt className="h-4 w-4 mr-3 text-slate-500 shrink-0" />
                VAT Registration: GB320844719
              </li>
              <li className="flex items-center text-sm text-slate-400">
                <Building2 className="h-4 w-4 mr-3 text-slate-500 shrink-0" />
                Company Registration: GB11901683
              </li>
              <li className="pt-3">
                <a
                  href="https://www.linkedin.com/in/venkata-appa-rao-vadduri-426b1719/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-white hover:opacity-90"
                  aria-label="Connect on LinkedIn"
                >
                  <span className="inline-flex items-center justify-center h-7 w-7 rounded-[3px] bg-[#0A66C2] mr-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                      <text x="12" y="18" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" fontSize="16" fill="#ffffff">in</text>
                    </svg>
                  </span>
                  Connect on LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Vibha Technologies UK Ltd. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
