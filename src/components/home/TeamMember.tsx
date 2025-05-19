import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle } from
"@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger } from
"@/components/ui/tooltip";

interface TeamMemberProps {
  name: string;
  position: string;
  contact: string;
  bio: string;
  avatar: string;
}

const TeamMember = ({ name, position, contact, bio, avatar }: TeamMemberProps) => {
  // Function to create initials from name
  const getInitials = (name: string) => {
    return name.
    split(" ").
    map((n) => n[0]).
    join("").
    toUpperCase();
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-[#73a151]/30">
      <CardHeader className="p-0">
        <div className="bg-gradient-to-r from-[#357e00] to-[#73a151] h-24" data-id="31dnxtc71" data-path="src/components/home/TeamMember.tsx"></div>
        <div className="flex justify-center -mt-12" data-id="74jhs5djs" data-path="src/components/home/TeamMember.tsx">
          <Avatar className="h-24 w-24 border-4 border-white bg-white">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="text-lg bg-[#357e00] text-white">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="text-center mt-2 pt-0">
        <CardTitle className="text-xl">{name}</CardTitle>
        <p className="text-[#357e00] font-medium mt-1" data-id="g3dsrmvmq" data-path="src/components/home/TeamMember.tsx">{position}</p>
        <CardDescription className="mt-4 text-sm">{bio}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-sm text-[#357e00] hover:text-[#1f4a00] font-medium transition-colors" data-id="7o8b2ejgt" data-path="src/components/home/TeamMember.tsx">
                {contact}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p data-id="9rh6kcyay" data-path="src/components/home/TeamMember.tsx">Contact {name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>);

};

export default TeamMember;