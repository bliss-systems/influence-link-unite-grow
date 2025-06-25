
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Zap, Star } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            No commissions, no hidden fees. Pay for access and tools that help you succeed.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Brand Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">For Brands</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Starter</CardTitle>
                  <div className="text-3xl font-bold text-slate-900">$99<span className="text-lg font-normal text-slate-600">/month</span></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Access to 5,000+ creators</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Basic audience insights</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Campaign management tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Up to 3 active campaigns</span>
                    </div>
                  </div>
                  <Button className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Most Popular</Badge>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Pro</CardTitle>
                  <div className="text-3xl font-bold text-slate-900">$299<span className="text-lg font-normal text-slate-600">/month</span></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Access to 25,000+ creators</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Advanced analytics & reporting</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Cross-border campaign tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Unlimited campaigns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Priority support</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Elite</CardTitle>
                  <div className="text-3xl font-bold text-slate-900">$599<span className="text-lg font-normal text-slate-600">/month</span></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Access to all 50,000+ creators</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Premium creator access</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">White-label solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Custom integrations</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Influencer Pricing */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">For Influencers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="relative border-2 border-slate-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Free</CardTitle>
                  <div className="text-3xl font-bold text-slate-900">$0<span className="text-lg font-normal text-slate-600">/month</span></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Basic profile creation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Apply to standard campaigns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Basic portfolio showcase</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Get Started</Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-2 border-blue-300 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">Recommended</Badge>
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Pro Creator</CardTitle>
                  <div className="text-3xl font-bold text-slate-900">$29<span className="text-lg font-normal text-slate-600">/month</span></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Enhanced profile visibility</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Access to premium campaigns</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Performance analytics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Priority application review</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Upgrade Now</Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-2 border-purple-300 hover:border-purple-400 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Elite Creator</CardTitle>
                  <div className="text-3xl font-bold text-slate-900">$99<span className="text-lg font-normal text-slate-600">/month</span></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Top-tier profile placement</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Exclusive campaign invitations</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Advanced portfolio tools</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Personal brand consultant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Direct brand partnerships</span>
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Upgrade Now</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
