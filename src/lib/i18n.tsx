import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr";

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.how_it_works": "How it Works",
    "nav.pricing": "Pricing",
    "nav.explore": "Explore",
    "nav.about": "About",
    "nav.sign_in": "Sign In",
    "nav.get_started": "Get Started",
    "hero.tagline": "Global Influencer Marketing Platform",
    "hero.heading": "Discover the right influencers for every market",
    "hero.description": "Connect with authentic creators worldwide. Access cultural intelligence, audience insights, and cross-border campaigns—all with zero commissions.",
    "hero.for_brands": "For Brands",
    "hero.for_influencers": "For Influencers",
    "hero.stats.active_creators": "Active Creators",
    "hero.stats.countries": "Countries",
    "hero.stats.success_rate": "Success Rate",
    "trust.statement": "Hundreds of creators and brands across Africa, Europe, and the diaspora use InfluenceLink to grow faster.",
    "testimonials.heading": "Trusted by Creators & Brands",
    "testimonials.description": "See how InfluenceLink is transforming global influencer marketing partnerships.",
    "testimonials.brand.quote": "\"InfluenceLink helped us scale our brand across 15 countries in Southeast Asia. The cultural insights and local creator network were game-changing for our expansion strategy. We saw 300% better engagement compared to our previous campaigns.\"",
    "testimonials.brand.name": "Sarah Chen",
    "testimonials.brand.title": "Global Marketing Director, TechFlow",
    "testimonials.influencer.quote": "\"As a creator from Nigeria, I struggled to connect with international brands. InfluenceLink changed everything. The zero commission model means I keep what I earn, and the platform helped me land campaigns with major global brands who appreciate my authentic African perspective.\"",
    "testimonials.influencer.name": "Kemi Adebayo",
    "testimonials.influencer.title": "Lifestyle Creator, 180K followers",
    "testimonials.stats.engagement.title": "Higher Engagement",
    "testimonials.stats.engagement.subtitle": "vs traditional platforms",
    "testimonials.stats.countries.title": "Countries Reached",
    "testimonials.stats.countries.subtitle": "in single campaign",
    "testimonials.stats.cost.title": "Cost Reduction",
    "testimonials.stats.cost.subtitle": "compared to agencies",
    "footer.description": "Connecting brands and influencers across borders with cultural intelligence and zero commissions.",
    "footer.platform": "Platform",
    "footer.for_brands": "For Brands",
    "footer.for_influencers": "For Influencers",
    "footer.analytics": "Analytics",
    "footer.campaign_tools": "Campaign Tools",
    "footer.support": "Support",
    "footer.help_center": "Help Center",
    "footer.contact": "Contact Us",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.rights": "All rights reserved.",
    "notfound.oops": "Oops! Page not found",
    "notfound.return_home": "Return to Home"
  },
  fr: {
    "nav.how_it_works": "Comment ça marche",
    "nav.pricing": "Tarifs",
    "nav.explore": "Explorer",
    "nav.about": "À propos",
    "nav.sign_in": "Se connecter",
    "nav.get_started": "Commencer",
    "hero.tagline": "Plateforme mondiale de marketing d'influence",
    "hero.heading": "Trouvez les bons influenceurs pour chaque marché",
    "hero.description": "Connectez-vous avec des créateurs authentiques dans le monde entier. Accédez à l'intelligence culturelle, aux insights d'audience et aux campagnes transfrontalières, le tout sans commission.",
    "hero.for_brands": "Pour les marques",
    "hero.for_influencers": "Pour les influenceurs",
    "hero.stats.active_creators": "Créateurs actifs",
    "hero.stats.countries": "Pays",
    "hero.stats.success_rate": "Taux de réussite",
    "trust.statement": "Des centaines de créateurs et de marques en Afrique, en Europe et dans la diaspora utilisent InfluenceLink pour se développer plus rapidement.",
    "testimonials.heading": "Approuvé par les créateurs et les marques",
    "testimonials.description": "Découvrez comment InfluenceLink transforme les partenariats de marketing d'influence à l'échelle mondiale.",
    "testimonials.brand.quote": "\"InfluenceLink nous a aidés à développer notre marque dans 15 pays d'Asie du Sud-Est. Les insights culturels et le réseau de créateurs locaux ont été déterminants pour notre stratégie d'expansion. Nous avons constaté une augmentation de 300 % de l'engagement par rapport à nos campagnes précédentes.\"",
    "testimonials.brand.name": "Sarah Chen",
    "testimonials.brand.title": "Directrice marketing mondiale, TechFlow",
    "testimonials.influencer.quote": "\"En tant que créatrice nigériane, j'avais du mal à me connecter avec des marques internationales. InfluenceLink a tout changé. Le modèle sans commission me permet de garder ce que je gagne, et la plateforme m'a permis de décrocher des campagnes avec de grandes marques mondiales qui apprécient ma perspective africaine authentique.\"",
    "testimonials.influencer.name": "Kemi Adebayo",
    "testimonials.influencer.title": "Créatrice lifestyle, 180K abonnés",
    "testimonials.stats.engagement.title": "Engagement supérieur",
    "testimonials.stats.engagement.subtitle": "par rapport aux plateformes traditionnelles",
    "testimonials.stats.countries.title": "Pays atteints",
    "testimonials.stats.countries.subtitle": "dans une seule campagne",
    "testimonials.stats.cost.title": "Réduction des coûts",
    "testimonials.stats.cost.subtitle": "par rapport aux agences",
    "footer.description": "Connecter les marques et les influenceurs au-delà des frontières avec une intelligence culturelle et sans commissions.",
    "footer.platform": "Plateforme",
    "footer.for_brands": "Pour les marques",
    "footer.for_influencers": "Pour les influenceurs",
    "footer.analytics": "Analyses",
    "footer.campaign_tools": "Outils de campagne",
    "footer.support": "Support",
    "footer.help_center": "Centre d'aide",
    "footer.contact": "Nous contacter",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.rights": "Tous droits réservés.",
    "notfound.oops": "Oups! Page introuvable",
    "notfound.return_home": "Retour à l'accueil"
  }
};

interface TranslationContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps>({
  language: "en",
  setLanguage: () => undefined,
  t: (key: string) => key
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");
  const t = (key: string) => translations[language][key] || key;
  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

