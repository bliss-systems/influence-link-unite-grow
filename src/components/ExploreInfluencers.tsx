
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, MapPin, Eye, Heart, Users, ChevronDown } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export const ExploreInfluencers = () => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const influencers = [
    {
      id: 1,
      name: "Maya Chen",
      handle: "@mayastyle",
      location: "Singapore",
      category: "Fashion",
      followers: "125K",
      engagement: "4.2%",
      image: "photo-1649972904349-6e44c42644a7",
      languages: ["English", "Mandarin"],
      verified: true
    },
    {
      id: 2,
      name: "Carlos Rodriguez",
      handle: "@carlostech",
      location: "Mexico City",
      category: "Technology",
      followers: "89K",
      engagement: "5.8%",
      image: "photo-1581091226825-a6a2a5aee158",
      languages: ["Spanish", "English"],
      verified: true
    },
    {
      id: 3,
      name: "Aisha Patel",
      handle: "@aishatravel",
      location: "Mumbai",
      category: "Travel",
      followers: "267K",
      engagement: "3.9%",
      image: "photo-1488590528505-98d2b5aba04b",
      languages: ["Hindi", "English"],
      verified: true
    },
    {
      id: 4,
      name: "Emma Johnson",
      handle: "@emmawellness",
      location: "London",
      category: "Wellness",
      followers: "198K",
      engagement: "6.1%",
      image: "photo-1605810230434-7631ac76ec81",
      languages: ["English"],
      verified: true
    },
    {
      id: 5,
      name: "Yuki Tanaka",
      handle: "@yukifood",
      location: "Tokyo",
      category: "Food",
      followers: "156K",
      engagement: "4.7%",
      image: "photo-1519389950473-47ba0277781c",
      languages: ["Japanese", "English"],
      verified: true
    },
    {
      id: 6,
      name: "Sofia Andersson",
      handle: "@sofialife",
      location: "Stockholm",
      category: "Lifestyle",
      followers: "142K",
      engagement: "5.3%",
      image: "photo-1487058792275-0ad4aaf24ca7",
      languages: ["Swedish", "English"],
      verified: true
    }
  ];

  const locations = ["All", "Singapore", "Mexico City", "Mumbai", "London", "Tokyo", "Stockholm"];
  const categories = ["All", "Fashion", "Technology", "Travel", "Wellness", "Food", "Lifestyle"];

  const toKey = (str: string) => str.toLowerCase().replace(/\s+/g, "_");

  const filteredInfluencers = influencers.filter(influencer => {
    const locationMatch = selectedLocation === "All" || influencer.location === selectedLocation;
    const categoryMatch = selectedCategory === "All" || influencer.category === selectedCategory;
    return locationMatch && categoryMatch;
  });

  return (
    <section id="explore" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            {t("explore.heading")}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover authentic creators from around the world who align with your brand values and target audience.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">{t("explore.filters")}:</span>
          </div>
          
          <div className="relative">
            <select 
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map(location => (
                <option key={location} value={location}>{t(`explore.location.${toKey(location)}`)}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
          </div>
          
          <div className="relative">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{t(`explore.category.${toKey(category)}`)}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-600 pointer-events-none" />
          </div>
        </div>
        
        {/* Influencer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInfluencers.map((influencer) => (
            <Card key={influencer.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={`https://images.unsplash.com/${influencer.image}?w=400&h=240&fit=crop&crop=face`}
                    alt={influencer.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-slate-700 backdrop-blur-sm">
                      {t(`explore.category.${toKey(influencer.category)}`)}
                    </Badge>
                  </div>
                  {influencer.verified && (
                    <div className="absolute top-4 left-4">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-slate-900">{influencer.name}</h3>
                      <p className="text-sm text-blue-600">{influencer.handle}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 mb-4">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{t(`explore.location.${toKey(influencer.location)}`)}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {influencer.languages.map((lang) => (
                      <Badge key={lang} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="font-semibold text-slate-900">{influencer.followers}</span>
                      </div>
                      <p className="text-xs text-slate-600">{t("explore.column.followers")}</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1">
                        <Heart className="w-4 h-4 text-slate-500" />
                        <span className="font-semibold text-slate-900">{influencer.engagement}</span>
                      </div>
                      <p className="text-xs text-slate-600">{t("explore.column.engagement")}</p>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                    View Profile
                    <Eye className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-blue-300 hover:border-blue-400 text-blue-600 hover:text-blue-700">
            Load More Influencers
          </Button>
        </div>
      </div>
    </section>
  );
};
