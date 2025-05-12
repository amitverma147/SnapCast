import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
  project: {
    name: "SnapCast", 
    branch: "main"    
  },
  redirectUrl: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URL || 
               `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
  // Add any other required configuration options here
});