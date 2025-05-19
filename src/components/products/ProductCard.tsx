import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle } from
"@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  color: string;
}

const ProductCard = ({ title, description, icon, link, color }: ProductCardProps) => {
  const { isAuthenticated } = useAuth();
  const redirectTo = isAuthenticated ? link : "/login";

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-[#73a151]/30 h-full flex flex-col">
      <CardHeader className="pb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}20` }} data-id="xui7lpdhw" data-path="src/components/products/ProductCard.tsx">

          <div className="text-2xl" style={{ color }} data-id="tt8xxp46j" data-path="src/components/products/ProductCard.tsx">
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {!isAuthenticated &&
        <p className="text-sm text-gray-500 italic" data-id="l3i4xh5ju" data-path="src/components/products/ProductCard.tsx">
            Sign up or log in to access full features
          </p>
        }
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          className="w-full justify-between font-medium text-[#357e00] hover:text-[#1f4a00] hover:bg-[#357e00]/10"
          asChild>

          <Link to={redirectTo}>
            Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>);

};

export default ProductCard;