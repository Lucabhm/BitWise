import { Cloud, CheckCircle2, Award, Shield } from "lucide-react";

export function TrustSection() {
  const partners = [
    { name: "AWS", icon: Cloud },
    { name: "Microsoft Azure", icon: Cloud },
    { name: "Open Telekom Cloud", icon: Cloud }
  ];

  const certifications = [
    { name: "ISO 27001", icon: Award },
    { name: "DSGVO-konform", icon: Shield },
    { name: "BSI Grundschutz", icon: CheckCircle2 },
    { name: "Cloud Security Alliance", icon: CheckCircle2 }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#004AAD]/10 rounded-full mb-4">
            <span className="text-sm text-[#004AAD]">Vertrauen & Zertifizierungen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-4">
            Zertifizierte Partner
          </h2>
          <p className="text-lg text-[#2F2F2F]/70">
            Wir arbeiten mit führenden Cloud-Anbietern zusammen und erfüllen höchste Sicherheits- und Compliance-Standards
          </p>
        </div>

        {/* Partners */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg text-[#2F2F2F]/80">Cloud-Partner</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center mb-4">
                  <partner.icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-[#2F2F2F]">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-lg text-[#2F2F2F]/80">Zertifizierungen & Standards</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[#00C9A7]/10 flex items-center justify-center mb-3">
                  <cert.icon className="h-6 w-6 text-[#00C9A7]" />
                </div>
                <span className="text-sm text-[#2F2F2F]">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#004AAD] to-[#0066CC] rounded-2xl p-8 sm:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl text-white mb-4">
              EU Cloud Sovereignty
            </h3>
            <p className="text-lg text-white/90">
              Alle unsere Lösungen erfüllen die strengen europäischen Datenschutz- und Compliance-Anforderungen. 
              Ihre Daten bleiben in der EU und unterliegen ausschließlich europäischem Recht.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
