import { CaseStudyCard } from "./CaseStudyCard";

export function CaseStudies() {
  const caseStudies = [
    {
      client: "Mittelständischer Maschinenbauer",
      logo: "MB",
      industry: "Industrie 4.0",
      challenge: "Legacy ERP-System in die Cloud migrieren mit strengen Compliance-Anforderungen",
      solution: "Hybrid-Cloud-Architektur mit Open Telekom Cloud und AWS",
      results: [
        { metric: "30%", label: "Reduzierte IT-Kosten" },
        { metric: "99.9%", label: "Verfügbarkeit" },
        { metric: "6 Wochen", label: "Migration Time" }
      ],
      image: "https://images.unsplash.com/photo-1703355685952-03ed19f70f51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2Mjk3MTExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      client: "Versicherungskonzern",
      logo: "VG",
      industry: "Finanzdienstleistungen",
      challenge: "Aufbau einer DSGVO-konformen Datenplattform für Customer Analytics",
      solution: "Azure Data Lake mit EU-Region und End-to-End Verschlüsselung",
      results: [
        { metric: "10x", label: "Schnellere Datenanalyse" },
        { metric: "100%", label: "DSGVO-Konformität" },
        { metric: "5 Mio.", label: "Datensätze täglich" }
      ],
      image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjI4OTQ0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      client: "Pharmakonzern",
      logo: "PK",
      industry: "Life Sciences",
      challenge: "Cloud-Native Entwicklung für klinische Forschungsdaten",
      solution: "Kubernetes-basierte Microservices auf Azure mit höchsten Sicherheitsstandards",
      results: [
        { metric: "50%", label: "Schnellere Time-to-Market" },
        { metric: "ISO 27001", label: "Zertifizierung" },
        { metric: "24/7", label: "Hochverfügbarkeit" }
      ],
      image: "https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYyOTMxOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#00C9A7]/10 rounded-full mb-4">
            <span className="text-sm text-[#00C9A7]">Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-4">
            Erfolgreiche Projekte
          </h2>
          <p className="text-lg text-[#2F2F2F]/70">
            Wie wir unseren Kunden geholfen haben, ihre Cloud-Transformation erfolgreich umzusetzen
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
