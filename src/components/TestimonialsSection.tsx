
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Trusted by Creators & Brands
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how InfluenceLink is transforming global influencer marketing partnerships.
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
                "InfluenceLink helped us scale our brand across 15 countries in Southeast Asia. The cultural insights and local creator network were game-changing for our expansion strategy. We saw 300% better engagement compared to our previous campaigns."
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format"
                  alt="Sarah Chen"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">Sarah Chen</div>
                  <div className="text-sm text-slate-600">Global Marketing Director, TechFlow</div>
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
                "As a creator from Nigeria, I struggled to connect with international brands. InfluenceLink changed everything. The zero commission model means I keep what I earn, and the platform helped me land campaigns with major global brands who appreciate my authentic African perspective."
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face&auto=format"
                  alt="Kemi Adebayo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900">Kemi Adebayo</div>
                  <div className="text-sm text-slate-600">Lifestyle Creator, 180K followers</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Case Study Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">300%</div>
            <div className="text-slate-600">Higher Engagement</div>
            <div className="text-sm text-slate-500">vs traditional platforms</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
            <div className="text-slate-600">Countries Reached</div>
            <div className="text-sm text-slate-500">in single campaign</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <div className="text-slate-600">Cost Reduction</div>
            <div className="text-sm text-slate-500">compared to agencies</div>
          </div>
        </div>
      </div>
    </section>
  );
};
