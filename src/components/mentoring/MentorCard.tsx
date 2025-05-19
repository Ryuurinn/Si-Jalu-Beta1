import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger } from
"@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface MentorCardProps {
  id: number;
  name: string;
  specialty: string;
  rate: string;
  rating: number;
  reviews: number;
  tags: string[];
  bio: string;
  avatar: string;
}

const MentorCard = ({
  id,
  name,
  specialty,
  rate,
  rating,
  reviews,
  tags,
  bio,
  avatar
}: MentorCardProps) => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  // Function to get initials for avatar fallback
  const getInitials = (name: string) => {
    return name.
    split(" ").
    map((n) => n[0]).
    join("").
    toUpperCase();
  };

  // Function to render star rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={`full-${i}`} className="h-4 w-4 fill-[#ffb33a] text-[#ffb33a]" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative" data-id="707w2dh14" data-path="src/components/mentoring/MentorCard.tsx">
          <StarIcon className="h-4 w-4 text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden w-[50%]" data-id="cp3d43ke5" data-path="src/components/mentoring/MentorCard.tsx">
            <StarIcon className="h-4 w-4 fill-[#ffb33a] text-[#ffb33a]" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarIcon key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  const handleSendRequest = (e: React.FormEvent, onClose: () => void) => {
    e.preventDefault();

    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please provide details about your mentoring request.",
        variant: "destructive"
      });
      return;
    }

    // In a real application, this would send the request to the backend
    toast({
      title: "Request Sent",
      description: `Your mentoring request has been sent to ${name}.`
    });

    setMessage("");
    onClose();
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border-[#73a151]/30 h-full flex flex-col">
      <CardHeader className="pb-3 flex flex-row items-start gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-[#357e00] text-white">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-1" data-id="dgwgmvlez" data-path="src/components/mentoring/MentorCard.tsx">
          <CardTitle className="text-lg">{name}</CardTitle>
          <div className="flex items-center space-x-1" data-id="g48s92vxr" data-path="src/components/mentoring/MentorCard.tsx">
            {renderStars(rating)}
            <span className="text-sm text-gray-600 ml-1" data-id="myywikist" data-path="src/components/mentoring/MentorCard.tsx">
              ({reviews} reviews)
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-3 flex-grow">
        <div className="mb-3" data-id="u5xpqzxrw" data-path="src/components/mentoring/MentorCard.tsx">
          <p className="text-sm font-semibold" data-id="97h867t9f" data-path="src/components/mentoring/MentorCard.tsx">{specialty}</p>
          <p className="text-sm text-[#357e00] font-medium" data-id="km5gmmgyd" data-path="src/components/mentoring/MentorCard.tsx">{rate}</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2" data-id="5sa5uj2zx" data-path="src/components/mentoring/MentorCard.tsx">{bio}</p>
        
        <div className="flex flex-wrap gap-1" data-id="e1agytdip" data-path="src/components/mentoring/MentorCard.tsx">
          {tags.map((tag, index) =>
          <Badge key={index} variant="outline" className="text-xs bg-[#73a151]/10 hover:bg-[#73a151]/20 text-[#357e00] border-[#73a151]/20">
              {tag}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-[#357e00] hover:bg-[#1f4a00]">
              Request Mentoring
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Request Mentoring Session</DialogTitle>
              <DialogDescription>
                Send a mentoring request to {name}. Please provide details about what you'd like to discuss.
              </DialogDescription>
            </DialogHeader>
            
            {(onClose) =>
            <form onSubmit={(e) => handleSendRequest(e, onClose)} data-id="s9u13ltnw" data-path="src/components/mentoring/MentorCard.tsx">
                <div className="grid gap-4 py-4" data-id="u7l0g5re4" data-path="src/components/mentoring/MentorCard.tsx">
                  <div className="grid gap-2" data-id="ee9t9o871" data-path="src/components/mentoring/MentorCard.tsx">
                    <label htmlFor="message" className="text-sm font-medium" data-id="tik81wfyc" data-path="src/components/mentoring/MentorCard.tsx">
                      Message
                    </label>
                    <Textarea
                    id="message"
                    placeholder="I would like to discuss..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="min-h-[120px]" />

                  </div>
                  
                  <div className="flex items-center gap-2" data-id="924d3e62i" data-path="src/components/mentoring/MentorCard.tsx">
                    <p className="text-sm font-medium" data-id="5iqeu5c3n" data-path="src/components/mentoring/MentorCard.tsx">Rate:</p>
                    <span className="text-sm" data-id="v1r2soppe" data-path="src/components/mentoring/MentorCard.tsx">{rate}</span>
                  </div>
                </div>
                
                <DialogFooter>
                  <Button type="submit" className="bg-[#357e00] hover:bg-[#1f4a00]">
                    Send Request
                  </Button>
                </DialogFooter>
              </form>
            }
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>);

};

export default MentorCard;