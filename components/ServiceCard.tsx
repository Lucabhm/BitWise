import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <Card className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
      <CardHeader>
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#004AAD] to-[#0066CC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-white" />
        </div>
        <h3 className="text-xl text-[#2F2F2F]">{title}</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-[#2F2F2F]/70">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-[#00C9A7] flex-shrink-0 mt-0.5" />
              <span className="text-sm text-[#2F2F2F]/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
