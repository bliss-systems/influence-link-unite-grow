import { createContext, useContext, useEffect, useState } from "react";
import { logEvent } from "@/lib/telemetry";

type User = {
  name: string;
  avatar?: string;
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  startAuth: (provider: "google" | "linkedin", callbackUrl: string) => void;
  setUser: (user: User | null) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("auth_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  const startAuth = (
    provider: "google" | "linkedin",
    callbackUrl: string,
  ) => {
    if (loading) return;
    logEvent("auth_provider_click", { provider });
    setLoading(true);
    const url = `/auth/${provider}?callbackUrl=${encodeURIComponent(callbackUrl)}`;
    window.location.href = url;
  };

  const signOut = () => {
    logEvent("auth_signout");
    setUser(null);
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, startAuth, setUser, signOut }}>
      
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
