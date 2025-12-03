import { BlogCard } from "./BlogCard";

export function BlogSection() {
  const articles = [
    {
      title: "NIS2-Richtlinie: Was Unternehmen jetzt wissen müssen",
      description: "Die neue EU-Cybersecurity-Richtlinie bringt erweiterte Pflichten für kritische Infrastrukturen. Wir erklären die wichtigsten Änderungen.",
      category: "Compliance",
      readTime: "8 min",
      date: "15. Oktober 2025",
      image: "https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyODg1MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Multi-Cloud vs. Hybrid Cloud: Die richtige Strategie für den Mittelstand",
      description: "Ein Überblick über die wichtigsten Cloud-Architektur-Ansätze und wann welches Modell sinnvoll ist.",
      category: "Strategy",
      readTime: "6 min",
      date: "28. September 2025",
      image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyc3xlbnwxfHx8fDE3NjI4OTQ0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "FinOps: Cloud-Kosten nachhaltig optimieren",
      description: "Best Practices für Cloud Cost Management und wie Sie mit FinOps-Methoden bis zu 40% Kosten sparen können.",
      category: "Cloud Management",
      readTime: "10 min",
      date: "12. September 2025",
      image: "https://images.unsplash.com/photo-1758873269811-4e62e346b4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzYyOTMxOTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-block px-4 py-2 bg-[#00C9A7]/10 rounded-full mb-4">
            <span className="text-sm text-[#00C9A7]">Thought Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#2F2F2F] mb-4">
            Insights & Expertise
          </h2>
          <p className="text-lg text-[#2F2F2F]/70">
            Aktuelle Themen rund um Cloud, Compliance und digitale Transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <BlogCard key={index} {...article} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-[#004AAD] hover:text-[#0066CC] transition-colors inline-flex items-center gap-2">
            Alle Artikel ansehen
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
