import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Globe, Users, TrendingUp, Shield, Heart, Star, Filter, Search, MapPin, Eye } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingSection } from "@/components/PricingSection";
import { ExploreInfluencers } from "@/components/ExploreInfluencers";
import { CampaignManagement } from "@/components/CampaignManagement";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { NoCommissionSection } from "@/components/NoCommissionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                InfluenceLink
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors">How it Works</a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#explore" className="text-slate-700 hover:text-blue-600 transition-colors">Explore</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">About</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-slate-700">Sign In</Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <HeroSection />
        <NoCommissionSection />
        <HowItWorks />
        <PricingSection />
        <ExploreInfluencers />
        <CampaignManagement />
        <WhyChooseUs />
        <TestimonialsSection />
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
                Connecting brands and influencers across borders with cultural intelligence and zero commissions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-slate-400">
                <p>For Brands</p>
                <p>For Influencers</p>
                <p>Analytics</p>
                <p>Campaign Tools</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-slate-400">
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 InfluenceLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
