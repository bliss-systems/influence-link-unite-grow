import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "./AuthProvider";
import { logEvent } from "@/lib/telemetry";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: Props) => {
  const { startAuth, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = (provider: "google" | "linkedin") => {
    try {
      const callbackUrl = window.location.pathname + window.location.search;
      logEvent("auth_modal_open");
      startAuth(provider, callbackUrl);
    } catch (e) {
      logEvent("auth_error", { error: (e as Error).message });
      setError("Failed to start authentication");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm" onEscapeKeyDown={() => onOpenChange(false)}>
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-2 py-4">
          <Button
            onClick={() => handleSignIn("google")}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Redirecting..." : "Sign in with Google"}
          </Button>
          <Button
            onClick={() => handleSignIn("linkedin")}
            disabled={loading}
            className="w-full"
          >
            {loading ? "Redirecting..." : "Sign in with LinkedIn"}
          </Button>
          {error && <p className="text-sm text-red-600 pt-2">{error}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
};
