import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";

const SignupPage = () => {
  const [userType, setUserType] = useState<"personal" | "company">("personal");

  // Personal user fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");

  // Company user fields
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [startingDate, setStartingDate] = useState("");

  // Common fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const validateForm = () => {
    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return false;
    }

    if (userType === "personal") {
      if (!name || !age || !job || !email || !password) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive"
        });
        return false;
      }
    } else {
      if (!companyName || !companyType || !startingDate || !email || !password) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive"
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (userType === "personal") {
        await signup({
          type: "personal",
          name,
          age: parseInt(age),
          job,
          email,
          password
        });
      } else {
        await signup({
          type: "company",
          companyName,
          companyType,
          startingDate,
          email,
          password
        });
      }

      toast({
        title: "Success",
        description: "Your account has been created successfully"
      });

      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" data-id="g5unuuwq8" data-path="src/pages/SignupPage.tsx">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50" data-id="if70nx1j8" data-path="src/pages/SignupPage.tsx">
        <div className="container mx-auto px-4" data-id="o45av6pb4" data-path="src/pages/SignupPage.tsx">
          <div className="max-w-md mx-auto" data-id="hp0mm2zfs" data-path="src/pages/SignupPage.tsx">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
                <CardDescription className="text-center">
                  Choose the type of account you want to create
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Tabs
                  defaultValue="personal"
                  className="w-full"
                  onValueChange={(value) => setUserType(value as "personal" | "company")}>

                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="company">Company</TabsTrigger>
                  </TabsList>
                  
                  <form onSubmit={handleSubmit} data-id="gi1mv032h" data-path="src/pages/SignupPage.tsx">
                    <TabsContent value="personal" className="space-y-4">
                      <div className="space-y-2" data-id="ii7xxx7ml" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required />

                      </div>
                      
                      <div className="space-y-2" data-id="yzfb5cn0j" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="30"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          required />

                      </div>
                      
                      <div className="space-y-2" data-id="g0zg7bg8r" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="job">Job</Label>
                        <Input
                          id="job"
                          placeholder="Designer"
                          value={job}
                          onChange={(e) => setJob(e.target.value)}
                          required />

                      </div>
                    </TabsContent>
                    
                    <TabsContent value="company" className="space-y-4">
                      <div className="space-y-2" data-id="rvha9z82d" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          placeholder="Acme Inc."
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          required />

                      </div>
                      
                      <div className="space-y-2" data-id="tn7ousk0n" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="companyType">Company Type</Label>
                        <Select value={companyType} onValueChange={setCompanyType}>
                          <SelectTrigger id="companyType">
                            <SelectValue placeholder="Select company type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup</SelectItem>
                            <SelectItem value="small">Small Business</SelectItem>
                            <SelectItem value="medium">Medium Enterprise</SelectItem>
                            <SelectItem value="large">Large Enterprise</SelectItem>
                            <SelectItem value="non-profit">Non-Profit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2" data-id="bebx8wo91" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="startingDate">Starting Date</Label>
                        <Input
                          id="startingDate"
                          type="date"
                          value={startingDate}
                          onChange={(e) => setStartingDate(e.target.value)}
                          required />

                      </div>
                    </TabsContent>
                    
                    <div className="space-y-4 mt-6" data-id="7i9nsuwnh" data-path="src/pages/SignupPage.tsx">
                      <div className="space-y-2" data-id="bhmuv3qhp" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required />

                      </div>
                      
                      <div className="space-y-2" data-id="8pejdpssx" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required />

                      </div>
                      
                      <div className="space-y-2" data-id="z09dvi0fa" data-path="src/pages/SignupPage.tsx">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required />

                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-[#357e00] hover:bg-[#1f4a00]"
                        disabled={isLoading}>

                        {isLoading ? "Creating account..." : "Create account"}
                      </Button>
                    </div>
                  </form>
                </Tabs>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-gray-500" data-id="msxguug9k" data-path="src/pages/SignupPage.tsx">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#357e00] hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>);

};

export default SignupPage;