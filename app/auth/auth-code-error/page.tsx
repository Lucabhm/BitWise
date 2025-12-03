import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F7FA] to-white p-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-semibold text-[#2F2F2F] mb-2">
          Authentifizierungsfehler
        </h1>
        <p className="text-[#2F2F2F]/70 mb-6">
          Bei der Anmeldung ist ein Fehler aufgetreten. Bitte versuchen Sie es
          erneut.
        </p>
        <Link href="/">
          <Button className="bg-[#004AAD] hover:bg-[#0066CC]">
            Zurück zur Startseite
          </Button>
        </Link>
      </div>
    </div>
  );
}
