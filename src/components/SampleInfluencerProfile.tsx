
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, TrendingUp, Lock, Eye, MessageCircle, BarChart3 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const SampleInfluencerProfile = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Sample Influencer Profile
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            This is what brands get access to with our platform. Rich profiles with audience insights, 
            engagement data, and direct contact capabilities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-white">
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
                <div className="flex items-start space-x-6">
                  <Avatar className="w-24 h-24 border-4 border-white/20">
                    <AvatarImage 
                      src="https://images.unsplash.com/photo-1494790108755-2616b812b833?w=200&h=200&fit=crop&crop=face" 
                      alt="Sofia Martinez"
                    />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-2xl font-bold">Sofia Martinez</h3>
                      <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    <p className="text-blue-100 text-lg mb-3">@sofia_lifestyle</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>Barcelona, Spain</span>
                      </div>
                      <Badge className="bg-white/20 text-white border-white/30">
                        Lifestyle & Travel
                      </Badge>
                      <div className="flex space-x-1">
                        <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-xs">
                          Spanish
                        </Badge>
                        <Badge variant="outline" className="bg-white/10 text-white border-white/30 text-xs">
                          English
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-6 p-8 bg-slate-50">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-slate-600" />
                    <span className="text-2xl font-bold text-slate-900">285K</span>
                  </div>
                  <p className="text-sm text-slate-600">Followers</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-slate-900">4.8%</span>
                  </div>
                  <p className="text-sm text-slate-600">Engagement Rate</p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span className="text-2xl font-bold text-slate-900">€2.4K</span>
                  </div>
                  <p className="text-sm text-slate-600">Avg. Post Value</p>
                </div>
              </div>

              {/* Audience Demographics */}
              <div className="p-8 border-t border-slate-100">
                <h4 className="text-lg font-semibold text-slate-900 mb-6">Audience Demographics</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Age Distribution */}
                  <div>
                    <h5 className="font-medium text-slate-800 mb-4">Age Distribution</h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">18-24</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '28%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">28%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">25-34</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '42%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">42%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">35-44</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '24%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">24%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">45+</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '6%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">6%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Gender Split */}
                  <div>
                    <h5 className="font-medium text-slate-800 mb-4">Gender Distribution</h5>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Female</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-pink-500 h-2 rounded-full" style={{width: '68%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">68%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Male</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{width: '30%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">30%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-600">Other</span>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '2%'}}></div>
                          </div>
                          <span className="text-sm font-medium text-slate-900 w-8">2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-8 bg-slate-50 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Request Contact
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 border-2 border-slate-300 hover:border-slate-400 text-slate-700 hover:text-slate-900 relative"
                  >
                    <Eye className="mr-2 w-5 h-5" />
                    View Full Analytics
                    <Lock className="ml-2 w-4 h-4 text-amber-600" />
                    <Badge className="absolute -top-2 -right-2 bg-amber-100 text-amber-800 text-xs">
                      Pro Only
                    </Badge>
                  </Button>
                </div>
                
                <p className="text-center text-sm text-slate-500 mt-4">
                  Contact details and advanced analytics available with Pro and Elite plans
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
