import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

export function BlogCard({ title, description, category, readTime, date, image }: BlogCardProps) {
  return (
    <Card className="bg-white border-0 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative h-52 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-[#004AAD] text-white border-0">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-xl text-[#2F2F2F] group-hover:text-[#004AAD] transition-colors">
          {title}
        </h3>
        
        <p className="text-[#2F2F2F]/70 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center gap-4 text-sm text-[#2F2F2F]/60 pt-2">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
