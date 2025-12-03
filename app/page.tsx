"use client";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { TrustSection } from "@/components/TrustSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LoginPage } from "@/components/LoginPage";
import { LandingPage } from "@/components/LandingPage";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function App() {
  const [currentView, setCurrentView] = useState<"website" | "login" | "landing">("landing");

  if (currentView === "login") {
    return (
      <>
        <LoginPage />
        <Button
          onClick={() => setCurrentView("website")}
          className="fixed top-6 left-6 bg-white text-[#004AAD] hover:bg-gray-50 shadow-lg z-50"
        >
          ← Zurück zur Website
        </Button>
      </>
    );
  }

  if (currentView === "landing") {
    return (
      <>
        <LandingPage />
        <div className="fixed top-6 left-6 z-50 flex gap-2">
          <Button
            onClick={() => setCurrentView("website")}
            className="bg-white text-[#004AAD] hover:bg-gray-50 shadow-lg"
          >
            → Zur Website
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Buttons */}
      <div className="fixed top-6 right-6 z-50 flex gap-2">
        <Button
          onClick={() => setCurrentView("landing")}
          className="bg-white text-[#004AAD] hover:bg-gray-50 shadow-lg"
        >
          Landing Page
        </Button>
        <Button
          onClick={() => setCurrentView("login")}
          className="bg-white text-[#004AAD] hover:bg-gray-50 shadow-lg"
        >
          Anmelden
        </Button>
      </div>
      
      <Hero />
      <Services />
      <CaseStudies />
      <TrustSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}