
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <Globe className="w-5 h-5" />
            <span className="font-medium">Join the Global Creator Economy</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to scale smarter?
          </h2>
          
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators and brands using InfluenceLink to build authentic partnerships across cultures and continents. Start your journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl group">
              <Users className="mr-2 w-5 h-5" />
              Join as Brand
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl group">
              <Zap className="mr-2 w-5 h-5" />
              Join as Creator
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">50K+</div>
              <div className="text-blue-200 text-sm">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">120+</div>
              <div className="text-blue-200 text-sm">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">0%</div>
              <div className="text-blue-200 text-sm">Commission</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
