
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export const TestimonialsSection = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            {t("testimonials.heading")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("testimonials.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand Testimonial */}
          <Card className="relative border-0 shadow-xl bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              
              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                {t("testimonials.brand.quote")}
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
                  alt={t("testimonials.brand.name")}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{t("testimonials.brand.name")}</div>
                  <div className="text-sm text-slate-600">{t("testimonials.brand.title")}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Influencer Testimonial */}
          <Card className="relative border-0 shadow-xl bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600"></div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-purple-600 mb-4" />
              
              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                {t("testimonials.influencer.quote")}
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face&auto=format"
                  alt={t("testimonials.influencer.name")}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">{t("testimonials.influencer.name")}</div>
                  <div className="text-sm text-slate-600">{t("testimonials.influencer.title")}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Case Study Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
            <div className="text-slate-600">{t("testimonials.stats.engagement.title")}</div>
            <div className="text-sm text-slate-500">{t("testimonials.stats.engagement.subtitle")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-slate-600">{t("testimonials.stats.countries.title")}</div>
            <div className="text-sm text-slate-500">{t("testimonials.stats.countries.subtitle")}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-slate-600">{t("testimonials.stats.cost.title")}</div>
            <div className="text-sm text-slate-500">{t("testimonials.stats.cost.subtitle")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
