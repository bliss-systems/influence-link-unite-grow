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
    "why.heading": "Why Choose InfluenceLink?",
    "why.cultural_intelligence.title": "Cultural Intelligence",
    "why.cultural_intelligence.description": "Deep understanding of local markets, languages, and cultural nuances ensures authentic connections.",
    "why.zero_commission.title": "Zero Commission Model",
    "why.zero_commission.description": "Keep 100% of your earnings. We make money from data access and premium tools, not your success.",
    "why.local_payment.title": "Local Payment Support",
    "why.local_payment.description": "Support for 50+ currencies and local payment methods. Get paid in your preferred currency.",
    "why.authentic_relationships.title": "Authentic Relationships",
    "why.authentic_relationships.description": "Focus on long-term partnerships rather than one-off transactions. Build meaningful brand connections.",
    "why.data_insights.title": "Data-Driven Insights",
    "why.data_insights.description": "Advanced analytics help optimize campaigns and understand cross-cultural audience behavior.",
    "why.diverse_creator_network.title": "Diverse Creator Network",
    "why.diverse_creator_network.description": "Access creators from 120+ countries with authentic representation across all demographics.",
    "trust.statement": "Hundreds of creators and brands across Africa, Europe, and the diaspora use InfluenceLink to grow faster.",
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
    "why.heading": "Pourquoi choisir InfluenceLink ?",
    "why.cultural_intelligence.title": "Intelligence culturelle",
    "why.cultural_intelligence.description": "Une compréhension approfondie des marchés locaux, des langues et des nuances culturelles garantit des connexions authentiques.",
    "why.zero_commission.title": "Modèle sans commission",
    "why.zero_commission.description": "Conservez 100% de vos gains. Nous gagnons de l'argent grâce à l'accès aux données et aux outils premium, pas sur votre réussite.",
    "why.local_payment.title": "Support des paiements locaux",
    "why.local_payment.description": "Prise en charge de plus de 50 devises et méthodes de paiement locales. Soyez payé dans la devise de votre choix.",
    "why.authentic_relationships.title": "Relations authentiques",
    "why.authentic_relationships.description": "Misez sur des partenariats à long terme plutôt que sur des transactions ponctuelles. Construisez des liens de marque solides.",
    "why.data_insights.title": "Insights basés sur les données",
    "why.data_insights.description": "Des analyses avancées pour optimiser les campagnes et comprendre le comportement des audiences interculturelles.",
    "why.diverse_creator_network.title": "Réseau diversifié de créateurs",
    "why.diverse_creator_network.description": "Accédez à des créateurs de plus de 120 pays avec une représentation authentique de toutes les démographies.",
    "trust.statement": "Des centaines de créateurs et de marques en Afrique, en Europe et dans la diaspora utilisent InfluenceLink pour se développer plus rapidement.",
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

