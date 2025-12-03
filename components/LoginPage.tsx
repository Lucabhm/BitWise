"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Cloud, Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../lib/auth";

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<string | null>(null);

  const {
    signInWithGoogle,
    signInWithMicrosoft,
    signInWithLinkedIn,
    signInWithEmail,
    signUpWithEmail,
  } = useAuth();

  const handleSocialLogin = async (
    provider: "google" | "microsoft" | "linkedin"
  ) => {
    setSocialLoading(provider);
    setError(null);
    try {
      if (provider === "google") {
        await signInWithGoogle();
      } else if (provider === "microsoft") {
        await signInWithMicrosoft();
      } else if (provider === "linkedin") {
        await signInWithLinkedIn();
      }
      // Redirect will happen automatically via AuthContext
    } catch (err: any) {
      let errorMessage =
        "Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.";

      if (err.message) {
        if (err.message.includes("popup_closed_by_user")) {
          errorMessage =
            "Anmeldung abgebrochen. Bitte versuchen Sie es erneut.";
        } else if (err.message.includes("access_denied")) {
          errorMessage =
            "Zugriff verweigert. Bitte erteilen Sie die erforderlichen Berechtigungen.";
        } else {
          errorMessage = `Fehler bei der ${
            provider === "google"
              ? "Google"
              : provider === "microsoft"
              ? "Microsoft"
              : "LinkedIn"
          }-Anmeldung. Bitte versuchen Sie es erneut.`;
        }
      }

      setError(errorMessage);
      setSocialLoading(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      if (isLogin) {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, { name, company });
      }
      // Redirect will happen automatically via AuthContext
    } catch (err: any) {
      // Handle specific error messages
      let errorMessage =
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.";

      if (err.message) {
        if (err.message.includes("Invalid login credentials")) {
          errorMessage =
            "Ungültige E-Mail oder Passwort. Bitte versuchen Sie es erneut.";
        } else if (err.message.includes("Email not confirmed")) {
          errorMessage =
            "Bitte bestätigen Sie Ihre E-Mail-Adresse, bevor Sie sich anmelden.";
        } else if (err.message.includes("User already registered")) {
          errorMessage =
            "Diese E-Mail-Adresse ist bereits registriert. Bitte melden Sie sich an.";
        } else if (err.message.includes("Password should be at least")) {
          errorMessage = "Das Passwort muss mindestens 6 Zeichen lang sein.";
        } else if (err.message.includes("Unable to validate email address")) {
          errorMessage =
            "Ungültige E-Mail-Adresse. Bitte überprüfen Sie Ihre Eingabe.";
        } else {
          errorMessage = err.message;
        }
      }

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-white flex items-center justify-center p-6">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#004AAD]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00C9A7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#00C9A7] flex items-center justify-center">
              <Cloud className="h-7 w-7 text-white" />
            </div>
            <span className="text-2xl text-[#2F2F2F]">BitWise Consulting</span>
          </div>
          <h1 className="text-2xl text-[#2F2F2F] mb-2">
            {isLogin ? "Willkommen zurück" : "Konto erstellen"}
          </h1>
          <p className="text-[#2F2F2F]/70">
            {isLogin
              ? "Melden Sie sich an, um auf Ihr Dashboard zuzugreifen"
              : "Erstellen Sie ein Konto für Ihre Cloud-Beratung"}
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:bg-gray-50 hover:border-[#004AAD] transition-all"
              onClick={() => handleSocialLogin("google")}
              disabled={socialLoading !== null || isLoading}
            >
              {socialLoading === "google" ? (
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
              ) : (
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              Mit Google fortfahren
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:bg-gray-50 hover:border-[#004AAD] transition-all"
              onClick={() => handleSocialLogin("microsoft")}
              disabled={socialLoading !== null || isLoading}
            >
              {socialLoading === "microsoft" ? (
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
              ) : (
                <svg className="w-5 h-5 mr-3" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M0 0h11v11H0z" />
                  <path fill="#81bc06" d="M12 0h11v11H12z" />
                  <path fill="#05a6f0" d="M0 12h11v11H0z" />
                  <path fill="#ffba08" d="M12 12h11v11H12z" />
                </svg>
              )}
              Mit Microsoft fortfahren
            </Button>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:bg-gray-50 hover:border-[#004AAD] transition-all"
              onClick={() => handleSocialLogin("linkedin")}
              disabled={socialLoading !== null || isLoading}
            >
              {socialLoading === "linkedin" ? (
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
              ) : (
                <svg
                  className="w-5 h-5 mr-3"
                  fill="#0A66C2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              )}
              Mit LinkedIn fortfahren
            </Button>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-sm text-[#2F2F2F]/60">
                oder mit E-Mail
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Max Mustermann"
                  className="border-gray-200 focus:border-[#004AAD]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">E-Mail-Adresse</Label>
              <Input
                id="email"
                type="email"
                placeholder="max.mustermann@firma.de"
                className="border-gray-200 focus:border-[#004AAD]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Passwort</Label>
                {isLogin && (
                  <a
                    href="#"
                    className="text-sm text-[#004AAD] hover:text-[#0066CC]"
                  >
                    Passwort vergessen?
                  </a>
                )}
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="border-gray-200 focus:border-[#004AAD]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="company">Unternehmen</Label>
                <Input
                  id="company"
                  placeholder="Mustermann GmbH"
                  className="border-gray-200 focus:border-[#004AAD]"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-[#00C9A7] hover:bg-[#00B396] text-white"
              disabled={isLoading || socialLoading !== null}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isLogin ? (
                "Anmelden"
              ) : (
                "Konto erstellen"
              )}
            </Button>
          </form>

          {/* Toggle between Login/Signup */}
          <div className="text-center text-sm">
            <span className="text-[#2F2F2F]/70">
              {isLogin ? "Noch kein Konto?" : "Bereits ein Konto?"}
            </span>{" "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-[#004AAD] hover:text-[#0066CC] transition-colors"
            >
              {isLogin ? "Jetzt registrieren" : "Anmelden"}
            </button>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-center text-[#2F2F2F]/60 pt-4">
            Mit der Anmeldung stimmen Sie unseren{" "}
            <a href="#" className="text-[#004AAD] hover:underline">
              Nutzungsbedingungen
            </a>{" "}
            und der{" "}
            <a href="#" className="text-[#004AAD] hover:underline">
              Datenschutzerklärung
            </a>{" "}
            zu.
          </p>
        </div>

        {/* Trust Badge */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-[#2F2F2F]/60">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>DSGVO-konform • SSL-verschlüsselt • EU-Server</span>
          </div>
        </div>
      </div>
    </div>
  );
}
