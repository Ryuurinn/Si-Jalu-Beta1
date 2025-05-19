import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, UserCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Custom CertificateIcon since it's not in Lucide by default
function CertificateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round" data-id="ml4r5o20w" data-path="src/components/courses/CourseCard.tsx">

      <rect x="3" y="3" width="18" height="18" rx="2" data-id="f9ir4cg88" data-path="src/components/courses/CourseCard.tsx" />
      <path d="M3 9h18" data-id="8nfsmldz2" data-path="src/components/courses/CourseCard.tsx" />
      <path d="M9 21v-6.5a2.5 2.5 0 0 1 5 0V21" data-id="46pykn1ys" data-path="src/components/courses/CourseCard.tsx" />
    </svg>);

}

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  price: string;
  certification: string;
  instructor: string;
  image: string;
}

const CourseCard = ({
  id,
  title,
  description,
  date,
  price,
  certification,
  instructor,
  image
}: CourseCardProps) => {
  // Convert date string to formatted date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-[#73a151]/30 h-full flex flex-col">
      <div className="relative" data-id="ocossht9m" data-path="src/components/courses/CourseCard.tsx">
        <AspectRatio ratio={16 / 9}>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full" data-id="c1z8jdn22" data-path="src/components/courses/CourseCard.tsx" />

        </AspectRatio>
        <div className="absolute top-2 right-2" data-id="8lt4t7ln3" data-path="src/components/courses/CourseCard.tsx">
          <Badge className="bg-[#357e00] hover:bg-[#1f4a00]">{price}</Badge>
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl line-clamp-2">{title}</CardTitle>
        <CardDescription className="flex items-center text-sm gap-1 text-[#357e00]">
          <UserCircle className="h-4 w-4" /> {instructor}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow pb-2">
        <p className="text-sm text-gray-600 line-clamp-3 mb-4" data-id="zf9ztosn7" data-path="src/components/courses/CourseCard.tsx">{description}</p>
        
        <div className="space-y-2" data-id="6v9otz118" data-path="src/components/courses/CourseCard.tsx">
          <div className="flex items-center text-sm text-gray-600" data-id="6vw2awitn" data-path="src/components/courses/CourseCard.tsx">
            <CalendarIcon className="h-4 w-4 mr-2 text-[#357e00]" />
            <span data-id="vb9m54qac" data-path="src/components/courses/CourseCard.tsx">{formatDate(date)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600" data-id="hw684asz6" data-path="src/components/courses/CourseCard.tsx">
            <CertificateIcon />
            <span className="ml-2" data-id="qp3dvp7m3" data-path="src/components/courses/CourseCard.tsx">{certification}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Button className="w-full bg-[#357e00] hover:bg-[#1f4a00]">
          Register Now
        </Button>
      </CardFooter>
    </Card>);

};

export default CourseCard;