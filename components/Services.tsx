import { Cloud, ArrowRightLeft, Shield, Brain } from "lucide-react";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Strategy",
      description: "Entwicklung einer maßgeschneiderten Cloud-Strategie für Ihre Geschäftsziele und Compliance-Anforderungen.",
      features: ["Multi-Cloud Architektur", "TCO-Analyse", "Roadmap-Entwicklung"]
    },
    {
      icon: ArrowRightLeft,
      title: "Migration",
      description: "Sichere und effiziente Migration Ihrer Workloads in die Cloud mit minimalen Ausfallzeiten.",
      features: ["Lift & Shift", "Re-Platforming", "Cloud-Native Transformation"]
    },
    {
      icon: Shield,
      title: "Compliance",
      description: "DSGVO-konforme Cloud-Infrastruktur mit EU-Datensouveränität und Zertifizierungen.",
      features: ["DSGVO & NIS2", "ISO 27001", "Audit-Support"]
    },
    {
      icon: Brain,
      title: "Data & AI Enablement",
      description: "Aufbau skalierbarer Datenplattformen und KI-Infrastrukturen für datengetriebene Entscheidungen.",
      features: ["Data Lakes", "ML-Pipelines", "Analytics-Plattformen"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#004AAD]/10 rounded-full mb-4">
            <span className="text-sm text-[#004AAD]">Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-[#2F2F2F]/70">
            Ganzheitliche Cloud-Beratung für mittelständische und große Unternehmen in Europa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
