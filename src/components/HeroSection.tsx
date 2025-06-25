
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8">
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Global Influencer Marketing Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
            Discover the right influencers for every market
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connect with authentic creators worldwide. Access cultural intelligence, audience insights, 
            and cross-border campaigns—all with zero commissions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl group">
              For Brands
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="border-2 border-slate-300 hover:border-blue-300 px-8 py-3 rounded-xl group">
              For Influencers
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">50K+</div>
              <div className="text-slate-600">Active Creators</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">120+</div>
              <div className="text-slate-600">Countries</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">95%</div>
              <div className="text-slate-600">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
