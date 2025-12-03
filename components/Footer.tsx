import { Cloud, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F2F2F] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004AAD] to-[#00C9A7] flex items-center justify-center">
                <Cloud className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl">BitWise Consulting</span>
            </div>
            <p className="text-sm text-white/70">
              Cloud-Modernisierung für europäische Unternehmen mit Fokus auf Compliance und Datensouveränität.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Migration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data & AI Enablement</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-sm mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AGB</a></li>
            </ul>

            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} BitWise Consulting GmbH. Alle Rechte vorbehalten.</p>
          <p>Frankfurt am Main, Deutschland</p>
        </div>
      </div>
    </footer>
  );
}
