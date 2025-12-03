import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "./Header";

interface HeroProps {
  onLoginClick?: () => void;
}

export function Hero({ onLoginClick }: HeroProps) {
  return (
    <>
      <Header onLoginClick={onLoginClick} />
      <section className="relative bg-gradient-to-br from-[#004AAD] to-[#0066CC] overflow-hidden">
        {/* Geometric background shapes */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C9A7] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 sm:space-y-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm text-white">
                  EU Cloud Sovereignty & Compliance
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl">
                Cloud-Modernisierung für europäische Unternehmen
              </h1>

              <p className="text-lg sm:text-xl text-white/90 max-w-xl">
                Wir helfen mittelständischen und großen Unternehmen, ihre IT-
                und Cloud-Infrastruktur compliant, datensouverän und effizient
                zu modernisieren.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#00C9A7] hover:bg-[#00B396] text-white border-0 shadow-lg shadow-[#00C9A7]/30"
                  onClick={() => {
                    const contactSection =
                      document.querySelector("#contact-section");
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  Kostenlose Erstberatung vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-white/90 text-[#004AAD] hover:bg-white hover:text-[#004AAD]"
                >
                  Services entdecken
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl sm:text-4xl text-[#00C9A7]">
                    150+
                  </div>
                  <div className="text-sm text-white/80 mt-1">Projekte</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl text-[#00C9A7]">98%</div>
                  <div className="text-sm text-white/80 mt-1">
                    Kundenzufriedenheit
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl text-[#00C9A7]">15+</div>
                  <div className="text-sm text-white/80 mt-1">
                    Jahre Erfahrung
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-[#00C9A7]/20 to-transparent rounded-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODg1MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cloud Computing"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
