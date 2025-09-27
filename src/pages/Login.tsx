import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslation } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithCredential, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';


import { GoogleLogin } from "@react-oauth/google";
const firebaseConfig = {
  apiKey: "AIzaSyCuQt1EXhTAcDZ3Rtq1_8RJ4VqWmPPUeHQ",
  authDomain: "inluencelink.firebaseapp.com",
  projectId: "inluencelink",
  storageBucket: "inluencelink.firebasestorage.app",
  messagingSenderId: "345351483262",
  appId: "1:345351483262:web:157a9f35d45b74f0114d2f",
  measurementId: "G-XHYKJGY58H"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const Login = () => {
  const { t } = useTranslation();


  const loginWithApple = async () => {
    const provider = new OAuthProvider('apple.com');
    try {
      const result = await signInWithPopup(auth, provider);
      // setUser(result.user);
    } catch (error) {
      console.error("Firebase Apple Sign-In Error: ", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">{t("nav.welcome_back")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center  space-x-2 w-100">
            <GoogleLogin size="large"
              onSuccess={async (response) => {
                try {
                  const cred = GoogleAuthProvider.credential(response.credential);
                  const result = await signInWithCredential(auth, cred);
                  console.log("User:", result.user);
                } catch (e) {
                  console.error("Firebase Google Sign-In Error:", e);
                }
              }}
              onError={() => console.error("Google login failed")}
            />

          </div>
          <div className="flex relative justify-center items-center"><div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] absolute left-0 w-full"></div><span className="relative px-2 text-xs bg-card text-muted-foreground">OR</span></div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2" hidden>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button className="w-full">{t("nav.sign_in")}</Button>
          <Link to="/">
            <Button variant="ghost" className="w-full">
              {t("notfound.return_home")}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
