
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Users, MessageCircle, BarChart, UserPlus, Star, Zap, Trophy } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple journeys designed for brands and influencers to connect, collaborate, and succeed together.
          </p>
        </div>
        
        <Tabs defaultValue="brands" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-slate-100 p-1 rounded-xl">
            <TabsTrigger value="brands" className="py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Brand Journey
            </TabsTrigger>
            <TabsTrigger value="influencers" className="py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Influencer Journey
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="brands">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discover</h3>
                  <p className="text-slate-600 text-sm">Search influencers by location, audience demographics, language, and cultural alignment.</p>
                </CardContent>
              </Card>
              
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-purple-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                  <p className="text-slate-600 text-sm">Access detailed creator profiles, engagement data, and audience insights to make informed decisions.</p>
                </CardContent>
              </Card>
              
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-green-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Collaborate</h3>
                  <p className="text-slate-600 text-sm">Launch campaigns, manage communications, and track deliverables in one unified platform.</p>
                </CardContent>
              </Card>
              
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-orange-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Analyze</h3>
                  <p className="text-slate-600 text-sm">Get comprehensive performance reports, ROI analysis, and cross-market insights.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="influencers">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-pink-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <UserPlus className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-pink-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Join</h3>
                  <p className="text-slate-600 text-sm">Create your profile, showcase your content, and highlight your unique cultural perspective.</p>
                </CardContent>
              </Card>
              
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-indigo-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-indigo-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Curate</h3>
                  <p className="text-slate-600 text-sm">Organize your best content, set your rates, and apply to premium campaigns that match your brand.</p>
                </CardContent>
              </Card>
              
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-teal-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Create</h3>
                  <p className="text-slate-600 text-sm">Work with global brands, create authentic content, and expand your international reach.</p>
                </CardContent>
              </Card>
              
              <Card className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-amber-600">4</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Grow</h3>
                  <p className="text-slate-600 text-sm">Track your performance, build long-term partnerships, and scale your influence globally.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
