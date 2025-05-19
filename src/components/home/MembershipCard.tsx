import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { CheckIcon } from "lucide-react";

interface MembershipCardProps {
  name: string;
  price: string;
  benefits: string[];
  color: string;
  textColor: string;
  borderColor: string;
  popular?: boolean;
}

const MembershipCard = ({
  name,
  price,
  benefits,
  color,
  textColor,
  borderColor,
  popular = false
}: MembershipCardProps) => {
  const { isAuthenticated } = useAuth();

  return (
    <Card
      className={`border-2 overflow-hidden transition-all duration-300 hover:shadow-lg relative`}
      style={{ borderColor: borderColor }}>

      {popular &&
      <div className="absolute top-0 right-0" data-id="3swtahw5o" data-path="src/components/home/MembershipCard.tsx">
          <Badge className="rounded-none rounded-bl-lg bg-[#ffb33a] text-[#1f4a00] font-medium">
            Most Popular
          </Badge>
        </div>
      }
      <div style={{ backgroundColor: color }} className="pt-6" data-id="glmmhdi4l" data-path="src/components/home/MembershipCard.tsx">
        <CardHeader className="pb-2">
          <CardTitle className={`text-center text-2xl font-bold`} style={{ color: textColor }}>
            {name}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center pb-6">
          <p className={`text-xl font-bold`} style={{ color: textColor }} data-id="twa3kozjf" data-path="src/components/home/MembershipCard.tsx">
            {price}
          </p>
        </CardContent>
      </div>
      <CardContent className="pt-6">
        <ul className="space-y-3" data-id="jf02ze6ye" data-path="src/components/home/MembershipCard.tsx">
          {benefits.map((benefit, index) =>
          <li key={index} className="flex items-start" data-id="itqs8yts7" data-path="src/components/home/MembershipCard.tsx">
              <CheckIcon className="h-5 w-5 text-[#357e00] mr-2 mt-0.5" />
              <span className="text-sm" data-id="uc3y4x5sa" data-path="src/components/home/MembershipCard.tsx">{benefit}</span>
            </li>
          )}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full bg-[#357e00] hover:bg-[#1f4a00] text-white"
          asChild>

          <Link to={isAuthenticated ? "/dashboard" : "/signup"}>
            {isAuthenticated ? "Upgrade Now" : "Get Started"}
          </Link>
        </Button>
      </CardFooter>
    </Card>);

};

export default MembershipCard;