import {
  Globe,
  Users,
  TrendingUp
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ExploreInfluencers } from "@/components/ExploreInfluencers";
import { CampaignManagement } from "@/components/CampaignManagement";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { NoCommissionSection } from "@/components/NoCommissionSection";
import { SampleInfluencerProfile } from "@/components/SampleInfluencerProfile";
import { useTranslation } from "@/lib/i18n";
import { Header } from "@/components/Header";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <div className="pt-16">
        <HeroSection />
        <NoCommissionSection />
        <HowItWorks />
        <SampleInfluencerProfile />
        <PricingSection />
        <ExploreInfluencers />
        <CampaignManagement />
        <WhyChooseUs />
        <TestimonialsSection />
        
        {/* Trust-Boosting Statement */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-blue-600 mr-3" />
                <Users className="w-8 h-8 text-purple-600 mr-3" />
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed">
                {t("trust.statement")}
              </p>
            </div>
          </div>
        </section>
        
        <CTASection />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InfluenceLink</span>
              </div>
              <p className="text-slate-400 max-w-md">
                {t("footer.description")}
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t("footer.platform")}</h3>
              <div className="space-y-2 text-slate-400">
                <p>{t("footer.for_brands")}</p>
                <p>{t("footer.for_influencers")}</p>
                <p>{t("footer.analytics")}</p>
                <p>{t("footer.campaign_tools")}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">{t("footer.support")}</h3>
              <div className="space-y-2 text-slate-400">
                <p>{t("footer.help_center")}</p>
                <p>{t("footer.contact")}</p>
                <p>{t("footer.privacy")}</p>
                <p>{t("footer.terms")}</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 InfluenceLink. {t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
