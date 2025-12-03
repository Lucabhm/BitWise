"use client";

import { Cloud } from "lucide-react";
import { UserProfile } from "./UserProfile";
import { Button } from "./ui/button";
import { useAuthContext } from "@/lib/AuthContext";

interface HeaderProps {
  onLoginClick?: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  const { user } = useAuthContext();

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004AAD] to-[#00C9A7] flex items-center justify-center">
            <Cloud className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl text-[#2F2F2F]">BitWise Consulting</span>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <UserProfile />
          ) : (
            <Button
              onClick={onLoginClick}
              className="bg-[#004AAD] hover:bg-[#0066CC] text-white"
            >
              Anmelden
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
