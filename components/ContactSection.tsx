import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact-section" className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-[#004AAD]/10 rounded-full mb-4">
                <span className="text-sm text-[#004AAD]">Kontakt</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-4">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-lg text-[#2F2F2F]/70">
                Vereinbaren Sie eine kostenlose Erstberatung und erfahren Sie, 
                wie wir Ihre Cloud-Transformation unterstützen können.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#2F2F2F]/60 mb-1">E-Mail</div>
                  <a href="mailto:kontakt@bitwise-consulting.de" className="text-[#2F2F2F] hover:text-[#004AAD] transition-colors">
                    kontakt@bitwise-consulting.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#2F2F2F]/60 mb-1">Telefon</div>
                  <a href="tel:+4969123456789" className="text-[#2F2F2F] hover:text-[#004AAD] transition-colors">
                    +49 (0) 69 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#2F2F2F]/60 mb-1">Standort</div>
                  <div className="text-[#2F2F2F]">
                    Frankfurt am Main<br />
                    Deutschland
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#004AAD] to-[#0066CC] rounded-2xl p-6 text-white">
              <h3 className="text-lg mb-2">Warum mit uns arbeiten?</h3>
              <ul className="space-y-2 text-sm text-white/90">
                <li>✓ 15+ Jahre Cloud-Expertise</li>
                <li>✓ EU-fokussierte Compliance & Datensouveränität</li>
                <li>✓ Zertifizierte Cloud-Architekten</li>
                <li>✓ Branchenspezifische Erfahrung</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Vorname *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Max" 
                    required 
                    className="border-gray-200 focus:border-[#004AAD]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nachname *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Mustermann" 
                    required 
                    className="border-gray-200 focus:border-[#004AAD]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Unternehmen *</Label>
                <Input 
                  id="company" 
                  placeholder="Mustermann GmbH" 
                  required 
                  className="border-gray-200 focus:border-[#004AAD]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="max.mustermann@firma.de" 
                  required 
                  className="border-gray-200 focus:border-[#004AAD]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+49 123 456789" 
                  className="border-gray-200 focus:border-[#004AAD]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ihre Nachricht *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Beschreiben Sie kurz Ihr Anliegen oder Projekt..."
                  rows={5}
                  required
                  className="border-gray-200 focus:border-[#004AAD] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#00C9A7] hover:bg-[#00B396] text-white"
                size="lg"
              >
                Nachricht senden
              </Button>

              <p className="text-xs text-[#2F2F2F]/60 text-center">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}