import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle } from
"@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const [openTitle, setOpenTitle] = useState("");
  const [openDescription, setOpenDescription] = useState("");
  const [openBudget, setOpenBudget] = useState("");
  const [openCategory, setOpenCategory] = useState("");

  const [directPartner, setDirectPartner] = useState("");
  const [directTitle, setDirectTitle] = useState("");
  const [directDescription, setDirectDescription] = useState("");
  const [directBudget, setDirectBudget] = useState("");

  const { toast } = useToast();

  const handleOpenSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!openTitle.trim() || !openDescription.trim() || !openBudget.trim() || !openCategory) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the data to an API
    toast({
      title: "Request Posted",
      description: "Your open request has been posted successfully. Partners will be able to apply now."
    });

    // Reset form
    setOpenTitle("");
    setOpenDescription("");
    setOpenBudget("");
    setOpenCategory("");
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!directPartner || !directTitle.trim() || !directDescription.trim() || !directBudget.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the data to an API
    toast({
      title: "Request Sent",
      description: `Your direct request has been sent to the partner. You will be notified when they respond.`
    });

    // Reset form
    setDirectPartner("");
    setDirectTitle("");
    setDirectDescription("");
    setDirectBudget("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create a New Request</CardTitle>
        <CardDescription>
          Choose whether to post an open request or send a direct request to a specific partner.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="open" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="open">Open Request</TabsTrigger>
            <TabsTrigger value="direct">Direct Request</TabsTrigger>
          </TabsList>
          
          <TabsContent value="open">
            <form onSubmit={handleOpenSubmit} className="space-y-4" data-id="g6od7zqq4" data-path="src/components/requests/RequestForm.tsx">
              <div className="space-y-2" data-id="p9leehdbt" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="open-title">Request Title</Label>
                <Input
                  id="open-title"
                  placeholder="E.g., Logo Design for Small Business"
                  value={openTitle}
                  onChange={(e) => setOpenTitle(e.target.value)} />

              </div>
              
              <div className="space-y-2" data-id="o12rsgqb8" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="open-category">Category</Label>
                <Select
                  value={openCategory}
                  onValueChange={setOpenCategory}>

                  <SelectTrigger id="open-category">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="graphic-design">Graphic Design</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="content-writing">Content Writing</SelectItem>
                    <SelectItem value="social-media">Social Media Management</SelectItem>
                    <SelectItem value="video-editing">Video Editing</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2" data-id="8y32mqmbp" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="open-description">Project Description</Label>
                <Textarea
                  id="open-description"
                  placeholder="Describe your project in detail..."
                  className="min-h-[120px]"
                  value={openDescription}
                  onChange={(e) => setOpenDescription(e.target.value)} />

              </div>
              
              <div className="space-y-2" data-id="k4a9q8t6m" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="open-budget">Budget (IDR)</Label>
                <Input
                  id="open-budget"
                  placeholder="E.g., 500000"
                  type="number"
                  value={openBudget}
                  onChange={(e) => setOpenBudget(e.target.value)} />

                <p className="text-xs text-gray-500" data-id="hjeqpiiu3" data-path="src/components/requests/RequestForm.tsx">
                  Set your budget for this project. Partners will be able to see this amount.
                </p>
              </div>
              
              <Button type="submit" className="w-full bg-[#357e00] hover:bg-[#1f4a00]">
                Post Open Request
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="direct">
            <form onSubmit={handleDirectSubmit} className="space-y-4" data-id="5ogemp2sw" data-path="src/components/requests/RequestForm.tsx">
              <div className="space-y-2" data-id="057ioili3" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="direct-partner">Select Partner</Label>
                <Select
                  value={directPartner}
                  onValueChange={setDirectPartner}>

                  <SelectTrigger id="direct-partner">
                    <SelectValue placeholder="Choose a partner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="partner-1">Ahmad Rizki (Graphic Design)</SelectItem>
                    <SelectItem value="partner-2">Siti Nurhayati (UI/UX Design)</SelectItem>
                    <SelectItem value="partner-3">Budi Santoso (Web Development)</SelectItem>
                    <SelectItem value="partner-4">Dewi Anggraini (Content Creation)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2" data-id="ul6q0v9i4" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="direct-title">Request Title</Label>
                <Input
                  id="direct-title"
                  placeholder="E.g., Website Redesign Project"
                  value={directTitle}
                  onChange={(e) => setDirectTitle(e.target.value)} />

              </div>
              
              <div className="space-y-2" data-id="l7a6z22gi" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="direct-description">Project Description</Label>
                <Textarea
                  id="direct-description"
                  placeholder="Describe your project in detail..."
                  className="min-h-[120px]"
                  value={directDescription}
                  onChange={(e) => setDirectDescription(e.target.value)} />

              </div>
              
              <div className="space-y-2" data-id="r535ciihd" data-path="src/components/requests/RequestForm.tsx">
                <Label htmlFor="direct-budget">Proposed Budget (IDR)</Label>
                <Input
                  id="direct-budget"
                  placeholder="E.g., 750000"
                  type="number"
                  value={directBudget}
                  onChange={(e) => setDirectBudget(e.target.value)} />

                <p className="text-xs text-gray-500" data-id="5quc8whae" data-path="src/components/requests/RequestForm.tsx">
                  This is your proposed budget. The final price will be determined through mutual agreement.
                </p>
              </div>
              
              <Button type="submit" className="w-full bg-[#357e00] hover:bg-[#1f4a00]">
                Send Direct Request
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <p className="text-sm text-gray-500" data-id="uusjx126j" data-path="src/components/requests/RequestForm.tsx">
          Need help with your request? Contact our support team.
        </p>
      </CardFooter>
    </Card>);

};

export default RequestForm;