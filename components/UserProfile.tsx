"use client";

import { useAuthContext } from "@/lib/AuthContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, User, Settings } from "lucide-react";

export function UserProfile() {
  const { user, signOut } = useAuthContext();

  if (!user) return null;

  // Get user initials for avatar fallback
  const getInitials = () => {
    if (user.user_metadata?.name) {
      const names = user.user_metadata.name.split(' ');
      return names.map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return user.email?.[0].toUpperCase() || 'U';
  };

  // Get display name
  const getDisplayName = () => {
    return user.user_metadata?.name || user.email?.split('@')[0] || 'User';
  };

  // Get avatar URL
  const getAvatarUrl = () => {
    // Check for avatar from user metadata
    if (user.user_metadata?.avatar_url) {
      return user.user_metadata.avatar_url;
    }
    // Check for Google/Microsoft/LinkedIn profile picture
    if (user.user_metadata?.picture) {
      return user.user_metadata.picture;
    }
    return null;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={getAvatarUrl() || undefined} alt={getDisplayName()} />
            <AvatarFallback className="bg-gradient-to-br from-[#004AAD] to-[#00C9A7] text-white">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="w-64 bg-white shadow-lg border border-gray-200" 
        align="end" 
        forceMount
        sideOffset={8}
      >
        <DropdownMenuLabel className="font-normal pb-3">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-semibold text-[#2F2F2F] leading-none">
              {getDisplayName()}
            </p>
            <p className="text-xs text-[#2F2F2F]/60 leading-none">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200" />
        <DropdownMenuItem className="cursor-pointer py-2.5 text-[#2F2F2F] hover:bg-[#F5F7FA] focus:bg-[#F5F7FA] focus:text-[#2F2F2F]">
          <User className="mr-3 h-4 w-4" />
          <span className="text-sm">Profil anzeigen</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer py-2.5 text-[#2F2F2F] hover:bg-[#F5F7FA] focus:bg-[#F5F7FA] focus:text-[#2F2F2F]">
          <Settings className="mr-3 h-4 w-4" />
          <span className="text-sm">Einstellungen</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-200" />
        <DropdownMenuItem 
          onClick={signOut} 
          className="cursor-pointer py-2.5 text-red-600 hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
        >
          <LogOut className="mr-3 h-4 w-4" />
          <span className="text-sm font-medium">Abmelden</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
