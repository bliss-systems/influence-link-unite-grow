import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import { logEvent } from "@/lib/telemetry";

const isSameOrigin = (url: string) => {
  try {
    const dest = new URL(url, window.location.origin);
    return dest.origin === window.location.origin;
  } catch {
    return false;
  }
};

const AuthCallback = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const callbackUrl = params.get("callbackUrl") || "/";
    const errorParam = params.get("error");
    if (errorParam) {
      logEvent("auth_error", { error: errorParam });
      setError("Authentication failed. Please try again.");
      return;
    }
    const userParam = params.get("user");
    if (userParam) {
      try {
        const user = JSON.parse(atob(userParam));
        localStorage.setItem("auth_user", JSON.stringify(user));
        setUser(user);
        logEvent("auth_success");
      } catch (e) {
        logEvent("auth_error", { error: (e as Error).message });
      }
    }
    const dest = isSameOrigin(callbackUrl) ? callbackUrl : "/";
    navigate(dest, { replace: true });
  }, [navigate, setUser]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      {error ? <p className="text-red-600">{error}</p> : <p>Signing you in...</p>}
    </div>
  );
};

export default AuthCallback;
