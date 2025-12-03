import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface CaseStudyCardProps {
  client: string;
  logo: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  image: string;
}

export function CaseStudyCard({ client, logo, industry, challenge, solution, results, image }: CaseStudyCardProps) {
  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={client}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2F2F2F]/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-lg">
            <span className="text-sm text-[#004AAD]">{logo}</span>
          </div>
          <Badge variant="secondary" className="bg-white/90 text-[#2F2F2F]">
            {industry}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <h3 className="text-xl text-[#2F2F2F]">{client}</h3>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm text-[#004AAD] mb-1">Herausforderung</div>
          <p className="text-sm text-[#2F2F2F]/70">{challenge}</p>
        </div>
        
        <div>
          <div className="text-sm text-[#004AAD] mb-1">Lösung</div>
          <p className="text-sm text-[#2F2F2F]/70">{solution}</p>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="text-sm text-[#2F2F2F] mb-3">Ergebnisse</div>
          <div className="grid grid-cols-3 gap-4">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-lg text-[#00C9A7]">{result.metric}</div>
                <div className="text-xs text-[#2F2F2F]/60 mt-1">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
