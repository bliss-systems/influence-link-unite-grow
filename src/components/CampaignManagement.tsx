
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, BarChart, Calendar, Target, Zap, Globe } from "lucide-react";

export const CampaignManagement = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Campaign Management
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Powerful tools to create, manage, and analyze campaigns that resonate across cultures and borders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Campaign Creation</h3>
                  <p className="text-slate-600">Set up campaigns with intelligent targeting based on demographics, interests, location, and cultural preferences. Our AI suggests optimal creator matches.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Unified Communication</h3>
                  <p className="text-slate-600">Manage all creator communications in one place. Real-time messaging, file sharing, and approval workflows streamline collaboration.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
                  <p className="text-slate-600">Track campaign performance across platforms and regions. Get insights on reach, engagement, conversions, and cultural sentiment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cross-border Support</h3>
                  <p className="text-slate-600">Handle multi-currency payments, time zone coordination, and local compliance requirements seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Campaign Dashboard Mockup */}
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Summer Fashion Campaign</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Campaign Status</span>
                    <Badge className="bg-green-100 text-green-800">Active</Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">24</div>
                      <div className="text-xs text-slate-600">Creators</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">1.2M</div>
                      <div className="text-xs text-slate-600">Reach</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">4.8%</div>
                      <div className="text-xs text-slate-600">Engagement</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Progress</span>
                      <span className="text-slate-900">75%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">Ends in 12 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
