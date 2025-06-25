
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Shield, Zap, Heart, TrendingUp, Users } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: "Cultural Intelligence",
      description: "Deep understanding of local markets, languages, and cultural nuances ensures authentic connections.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Zero Commission Model",
      description: "Keep 100% of your earnings. We make money from data access and premium tools, not your success.",
      color: "green"
    },
    {
      icon: Zap,
      title: "Local Payment Support",
      description: "Support for 50+ currencies and local payment methods. Get paid in your preferred currency.",
      color: "purple"
    },
    {
      icon: Heart,
      title: "Authentic Relationships",
      description: "Focus on long-term partnerships rather than one-off transactions. Build meaningful brand connections.",
      color: "pink"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Advanced analytics help optimize campaigns and understand cross-cultural audience behavior.",
      color: "orange"
    },
    {
      icon: Users,
      title: "Diverse Creator Network",
      description: "Access creators from 120+ countries with authentic representation across all demographics.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
      orange: "bg-orange-100 text-orange-600",
      teal: "bg-teal-100 text-teal-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-blue-100 text-blue-600";
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Why Choose InfluenceLink?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're not just another influencer platform. We're building the future of global brand partnerships with cultural intelligence at our core.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">50K+</div>
            <div className="text-slate-600">Active Creators</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">120+</div>
            <div className="text-slate-600">Countries</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">95%</div>
            <div className="text-slate-600">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">0%</div>
            <div className="text-slate-600">Commission Fee</div>
          </div>
        </div>
      </div>
    </section>
  );
};
