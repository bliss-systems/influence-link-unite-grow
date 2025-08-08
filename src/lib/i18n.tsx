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
    "notfound.return_home": "Return to Home",
    "sampleProfile.heading": "Sample Influencer Profile",
    "sampleProfile.description": "This is what brands get access to with our platform. Rich profiles with audience insights, engagement data, and direct contact capabilities.",
    "sampleProfile.followers": "Followers",
    "sampleProfile.engagement_rate": "Engagement Rate",
    "sampleProfile.avg_post_value": "Avg. Post Value",
    "sampleProfile.audience_demographics": "Audience Demographics",
    "sampleProfile.age_distribution": "Age Distribution",
    "sampleProfile.gender_distribution": "Gender Distribution",
    "sampleProfile.lifestyle_travel": "Lifestyle & Travel",
    "sampleProfile.spanish": "Spanish",
    "sampleProfile.english": "English",
    "sampleProfile.female": "Female",
    "sampleProfile.male": "Male",
    "sampleProfile.other": "Other",
    "sampleProfile.request_contact": "Request Contact",
    "sampleProfile.view_full_analytics": "View Full Analytics",
    "sampleProfile.pro_only": "Pro Only",
    "sampleProfile.pro_message": "Contact details and advanced analytics available with Pro and Elite plans"
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
    "notfound.return_home": "Retour à l'accueil",
    "sampleProfile.heading": "Profil d'influenceur exemple",
    "sampleProfile.description": "Voici ce à quoi les marques ont accès avec notre plateforme. Profils riches avec informations sur l'audience, données d'engagement et possibilité de contact direct.",
    "sampleProfile.followers": "Abonnés",
    "sampleProfile.engagement_rate": "Taux d'engagement",
    "sampleProfile.avg_post_value": "Valeur moyenne par publication",
    "sampleProfile.audience_demographics": "Démographie de l'audience",
    "sampleProfile.age_distribution": "Répartition par âge",
    "sampleProfile.gender_distribution": "Répartition par genre",
    "sampleProfile.lifestyle_travel": "Lifestyle et voyage",
    "sampleProfile.spanish": "Espagnol",
    "sampleProfile.english": "Anglais",
    "sampleProfile.female": "Femme",
    "sampleProfile.male": "Homme",
    "sampleProfile.other": "Autre",
    "sampleProfile.request_contact": "Demander le contact",
    "sampleProfile.view_full_analytics": "Voir toutes les analyses",
    "sampleProfile.pro_only": "Réservé aux pros",
    "sampleProfile.pro_message": "Les coordonnées et les analyses avancées sont disponibles avec les forfaits Pro et Elite"
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

