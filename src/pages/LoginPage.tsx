import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Success",
        description: "You have successfully logged in"
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid email or password",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" data-id="h3r0zh87f" data-path="src/pages/LoginPage.tsx">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50" data-id="fl3ey04ue" data-path="src/pages/LoginPage.tsx">
        <div className="container mx-auto px-4" data-id="z6jt4yqg8" data-path="src/pages/LoginPage.tsx">
          <div className="max-w-md mx-auto" data-id="5he32knf9" data-path="src/pages/LoginPage.tsx">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                <CardDescription className="text-center">
                  Enter your email and password to login to your account
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4" data-id="374o1o799" data-path="src/pages/LoginPage.tsx">
                  <div className="space-y-2" data-id="2dxyg8tq3" data-path="src/pages/LoginPage.tsx">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required />

                  </div>
                  
                  <div className="space-y-2" data-id="e6dcp82ci" data-path="src/pages/LoginPage.tsx">
                    <div className="flex items-center justify-between" data-id="h60adcrn5" data-path="src/pages/LoginPage.tsx">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-[#357e00] hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required />

                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-[#357e00] hover:bg-[#1f4a00]"
                    disabled={isLoading}>

                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-gray-500" data-id="pjdg7i2oj" data-path="src/pages/LoginPage.tsx">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#357e00] hover:underline">
                    Sign up
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

export default LoginPage;