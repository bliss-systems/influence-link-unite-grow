import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";
import { useTranslation, Language } from "@/lib/i18n";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { t, language, setLanguage } = useTranslation();
  const { user } = useAuth();
const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              InfluenceLink
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">
              {t("nav.how_it_works")}
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors">
              {t("nav.pricing")}
            </a>
            <a href="#explore" className="text-slate-700 hover:text-blue-600 transition-colors">
              {t("nav.explore")}
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">
              {t("nav.about")}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="border border-slate-300 rounded-md px-2 py-1 text-slate-700"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
            <Button  onClick={()=>{
               navigate("/login")
            }} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              {t("nav.get_started")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
