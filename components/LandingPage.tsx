import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent } from "./ui/card";
import { Check, ArrowRight, Cloud, Shield, TrendingUp, Award, Star } from "lucide-react";
import { useState } from "react";

export function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send to your backend
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004AAD] to-[#00C9A7] flex items-center justify-center">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl text-[#2F2F2F]">BitWise Consulting</span>
          </div>
          <Button className="bg-[#00C9A7] hover:bg-[#00B396] text-white">
            +49 (0) 69 123 456 789
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#004AAD] to-[#0066CC] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C9A7] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="inline-block px-4 py-2 bg-[#00C9A7] rounded-full">
                <span className="text-sm text-white">🎁 Kostenlose Cloud-Analyse im Wert von 5.000 €</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                Senken Sie Ihre Cloud-Kosten um bis zu 40%
              </h1>
              
              <p className="text-xl text-white/90">
                Erhalten Sie eine professionelle Cloud-Analyse und erfahren Sie, wie Sie Ihre IT-Infrastruktur 
                DSGVO-konform optimieren und dabei Kosten sparen.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00C9A7] flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">Kostenlose Erstberatung (60 Minuten)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00C9A7] flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">Detaillierte Einsparungspotenzial-Analyse</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00C9A7] flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg">EU Cloud Sovereignty Roadmap</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-white/20">
                <div className="flex items-center gap-8">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#00C9A7] text-[#00C9A7]" />
                      ))}
                    </div>
                    <div className="text-sm text-white/80">150+ zufriedene Kunden</div>
                  </div>
                  <div className="border-l border-white/20 pl-8">
                    <div className="text-2xl text-[#00C9A7]">15+</div>
                    <div className="text-sm text-white/80">Jahre Erfahrung</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl text-[#2F2F2F] mb-2">
                  Jetzt kostenlose Cloud-Analyse sichern
                </h2>
                <p className="text-[#2F2F2F]/70">
                  Begrenzt auf 10 Unternehmen pro Monat
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ihr Name *</Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-gray-200 focus:border-[#004AAD]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail-Adresse *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="max.mustermann@firma.de"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-gray-200 focus:border-[#004AAD]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Unternehmen *</Label>
                  <Input
                    id="company"
                    placeholder="Mustermann GmbH"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="border-gray-200 focus:border-[#004AAD]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+49 123 456789"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gray-200 focus:border-[#004AAD]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#00C9A7] hover:bg-[#00B396] text-white"
                  size="lg"
                >
                  Kostenlose Analyse anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-xs text-center text-[#2F2F2F]/60">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen
                </p>
              </form>

              {/* Security Badge */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-[#2F2F2F]/60">
                <Shield className="h-4 w-4 text-[#00C9A7]" />
                <span>100% DSGVO-konform • Keine Weitergabe Ihrer Daten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-12 bg-[#F5F7FA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-[#2F2F2F]/60 mb-8">
            Vertrauen von führenden Unternehmen
          </p>
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center opacity-50">
            <div className="text-2xl text-[#2F2F2F]">AWS Partner</div>
            <div className="text-2xl text-[#2F2F2F]">Microsoft Azure</div>
            <div className="text-2xl text-[#2F2F2F]">Telekom Cloud</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-4">
              Das erhalten Sie in Ihrer kostenlosen Cloud-Analyse
            </h2>
            <p className="text-lg text-[#2F2F2F]/70">
              Ein umfassendes Assessment Ihrer aktuellen Cloud-Infrastruktur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-[#2F2F2F] mb-3">Cost Optimization Report</h3>
                <p className="text-[#2F2F2F]/70">
                  Detaillierte Analyse Ihrer Cloud-Kosten mit konkreten Einsparungspotenzialen von durchschnittlich 30-40%
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-[#2F2F2F] mb-3">Compliance Check</h3>
                <p className="text-[#2F2F2F]/70">
                  Überprüfung Ihrer aktuellen Cloud-Infrastruktur auf DSGVO, NIS2 und weitere EU-Compliance-Anforderungen
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl text-[#2F2F2F] mb-3">Migrations-Roadmap</h3>
                <p className="text-[#2F2F2F]/70">
                  Maßgeschneiderte Roadmap für Ihre Cloud-Transformation mit klaren Meilensteinen und Zeitplan
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof / Results */}
      <section className="py-16 sm:py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl text-[#2F2F2F] mb-4">
              Messbare Ergebnisse für unsere Kunden
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl text-[#00C9A7] mb-2">40%</div>
              <div className="text-[#2F2F2F]/70">Durchschnittliche Kosteneinsparung</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl text-[#00C9A7] mb-2">6 Wochen</div>
              <div className="text-[#2F2F2F]/70">Durchschnittliche Migrationszeit</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl text-[#00C9A7] mb-2">99.9%</div>
              <div className="text-[#2F2F2F]/70">Verfügbarkeit nach Migration</div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-4xl text-[#00C9A7] mb-2">150+</div>
              <div className="text-[#2F2F2F]/70">Erfolgreiche Projekte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-[#00C9A7] text-[#00C9A7]" />
            ))}
          </div>
          <blockquote className="text-2xl text-[#2F2F2F] mb-6">
            "BitWise Consulting hat uns geholfen, unsere Cloud-Kosten um 35% zu senken und gleichzeitig 
            unsere DSGVO-Compliance zu verbessern. Die Zusammenarbeit war professionell und zielführend."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004AAD] to-[#00C9A7] flex items-center justify-center">
              <span className="text-white text-xl">TB</span>
            </div>
            <div className="text-left">
              <div className="text-[#2F2F2F]">Thomas Berger</div>
              <div className="text-sm text-[#2F2F2F]/60">IT-Manager, Mittelständisches Maschinenbau-Unternehmen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#004AAD] to-[#0066CC]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center text-white">
          <h2 className="text-3xl sm:text-4xl mb-4">
            Bereit für Ihre kostenlose Cloud-Analyse?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Nur noch 5 Plätze verfügbar für diesen Monat
          </p>
          <Button
            size="lg"
            className="bg-[#00C9A7] hover:bg-[#00B396] text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Jetzt kostenfrei anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-white/70 mt-6">
            Oder rufen Sie uns direkt an: +49 (0) 69 123 456 789
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2F2F2F] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-white/60">
          <p>© 2025 BitWise Consulting GmbH • Impressum • Datenschutz</p>
        </div>
      </footer>
    </div>
  );
}
