import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { UserIcon, WalletIcon, BellIcon, ShieldIcon, LogOutIcon } from "lucide-react";

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Form states for personal user
  const [personalName, setPersonalName] = useState("");
  const [personalAge, setPersonalAge] = useState("");
  const [personalJob, setPersonalJob] = useState("");

  // Form states for company user
  const [companyName, setCompanyName] = useState("");
  const [companyType, setCompanyType] = useState("");

  // Common form states
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with user data
  useEffect(() => {
    if (user) {
      setEmail(user.email);

      if (user.type === "personal") {
        setPersonalName(user.name);
        setPersonalAge(user.age.toString());
        setPersonalJob(user.job);
      } else {
        setCompanyName(user.companyName);
        setCompanyType(user.companyType);
      }
    }
  }, [user]);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    // In a real app, this would call an API
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Profile Updated",
        description: "Your profile has been updated successfully"
      });
    }, 1000);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();

    // In a real app, this would call an API
    toast({
      title: "Password Reset Email Sent",
      description: "Check your email for instructions to reset your password"
    });
  };

  const handleDeleteAccount = () => {
    // In a real app, this would call an API
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmed) {
      toast({
        title: "Account Deleted",
        description: "Your account has been deleted. You will be logged out now.",
        variant: "destructive"
      });

      setTimeout(() => {
        logout();
        navigate("/");
      }, 2000);
    }
  };

  if (!user) {
    return null; // Will redirect in the effect
  }

  return (
    <div className="min-h-screen flex flex-col" data-id="shatxrkgh" data-path="src/pages/ProfilePage.tsx">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50" data-id="oovmjqo2i" data-path="src/pages/ProfilePage.tsx">
        <div className="container mx-auto px-4" data-id="lf87x9smm" data-path="src/pages/ProfilePage.tsx">
          <div className="mb-8" data-id="w5vcgh74v" data-path="src/pages/ProfilePage.tsx">
            <h1 className="text-3xl font-bold mb-2" data-id="vnu7gi49n" data-path="src/pages/ProfilePage.tsx">Your Profile</h1>
            <p className="text-gray-600" data-id="nbsb2c1qx" data-path="src/pages/ProfilePage.tsx">
              Manage your account settings and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8" data-id="zsz29wzfv" data-path="src/pages/ProfilePage.tsx">
            {/* Sidebar */}
            <div className="lg:col-span-1" data-id="got39575p" data-path="src/pages/ProfilePage.tsx">
              <Card>
                <CardContent className="p-0">
                  <div className="p-6 flex flex-col items-center border-b" data-id="o8nvtplqu" data-path="src/pages/ProfilePage.tsx">
                    <div className="w-24 h-24 rounded-full bg-[#357e00] text-white flex items-center justify-center text-4xl font-bold mb-4" data-id="s061397qb" data-path="src/pages/ProfilePage.tsx">
                      {user.type === "personal" ?
                      user.name.charAt(0) :
                      user.companyName.charAt(0)}
                    </div>
                    <h2 className="text-xl font-bold" data-id="6fggkzo2c" data-path="src/pages/ProfilePage.tsx">
                      {user.type === "personal" ? user.name : user.companyName}
                    </h2>
                    <p className="text-gray-500 text-sm" data-id="lpn88or0d" data-path="src/pages/ProfilePage.tsx">
                      {user.type === "personal" ? user.job : user.companyType}
                    </p>
                  </div>
                  
                  <nav className="p-2" data-id="ea4i9xcei" data-path="src/pages/ProfilePage.tsx">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-700 hover:text-[#357e00] hover:bg-[#357e00]/10"
                      onClick={() => navigate("/dashboard")}>

                      <UserIcon className="h-4 w-4 mr-2" />
                      Dashboard
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-700 hover:text-[#357e00] hover:bg-[#357e00]/10"
                      onClick={() => navigate("/jalucourse")}>

                      <WalletIcon className="h-4 w-4 mr-2" />
                      My Courses
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-gray-700 hover:text-[#357e00] hover:bg-[#357e00]/10"
                      onClick={() => navigate("/jalurequest")}>

                      <ShieldIcon className="h-4 w-4 mr-2" />
                      My Requests
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      onClick={logout}>

                      <LogOutIcon className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3" data-id="lfec97n0p" data-path="src/pages/ProfilePage.tsx">
              <Tabs defaultValue="profile">
                <TabsList className="mb-6">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                
                {/* Profile Tab */}
                <TabsContent value="profile">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                      <CardDescription>
                        Update your personal information and how it appears on your profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleUpdateProfile} data-id="b9sghov4l" data-path="src/pages/ProfilePage.tsx">
                        <div className="space-y-6" data-id="ceako85om" data-path="src/pages/ProfilePage.tsx">
                          {user.type === "personal" ?
                          <>
                              <div className="space-y-2" data-id="f1zfpls8e" data-path="src/pages/ProfilePage.tsx">
                                <Label htmlFor="name">Full Name</Label>
                                <Input
                                id="name"
                                value={personalName}
                                onChange={(e) => setPersonalName(e.target.value)} />

                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-id="t51vtr7us" data-path="src/pages/ProfilePage.tsx">
                                <div className="space-y-2" data-id="ijr0atk0y" data-path="src/pages/ProfilePage.tsx">
                                  <Label htmlFor="age">Age</Label>
                                  <Input
                                  id="age"
                                  type="number"
                                  value={personalAge}
                                  onChange={(e) => setPersonalAge(e.target.value)} />

                                </div>
                                
                                <div className="space-y-2" data-id="g92uh5317" data-path="src/pages/ProfilePage.tsx">
                                  <Label htmlFor="job">Job/Profession</Label>
                                  <Input
                                  id="job"
                                  value={personalJob}
                                  onChange={(e) => setPersonalJob(e.target.value)} />

                                </div>
                              </div>
                            </> :

                          <>
                              <div className="space-y-2" data-id="wk6uucbe1" data-path="src/pages/ProfilePage.tsx">
                                <Label htmlFor="companyName">Company Name</Label>
                                <Input
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)} />

                              </div>
                              
                              <div className="space-y-2" data-id="mecoodg7f" data-path="src/pages/ProfilePage.tsx">
                                <Label htmlFor="companyType">Company Type</Label>
                                <Input
                                id="companyType"
                                value={companyType}
                                onChange={(e) => setCompanyType(e.target.value)} />

                              </div>
                            </>
                          }
                          
                          <div className="space-y-2" data-id="q9870ncgw" data-path="src/pages/ProfilePage.tsx">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)} />

                          </div>
                          
                          <div className="space-y-2" data-id="4evj2uhik" data-path="src/pages/ProfilePage.tsx">
                            <Label htmlFor="bio">Bio/Description</Label>
                            <Textarea
                              id="bio"
                              placeholder="Tell us about yourself or your company..."
                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                              className="min-h-[120px]" />

                          </div>
                        </div>
                        
                        <div className="mt-6" data-id="jt9l17nc6" data-path="src/pages/ProfilePage.tsx">
                          <Button
                            type="submit"
                            className="bg-[#357e00] hover:bg-[#1f4a00]"
                            disabled={isLoading}>

                            {isLoading ? "Updating..." : "Update Profile"}
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Security Tab */}
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>
                        Manage your password and account security
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6" data-id="e0rs7zn7q" data-path="src/pages/ProfilePage.tsx">
                        <form onSubmit={handleChangePassword} className="space-y-4" data-id="h2w4ap9u1" data-path="src/pages/ProfilePage.tsx">
                          <h3 className="text-lg font-medium" data-id="tovaydb5u" data-path="src/pages/ProfilePage.tsx">Change Password</h3>
                          
                          <div className="space-y-2" data-id="6hq3cg0h0" data-path="src/pages/ProfilePage.tsx">
                            <Label htmlFor="currentPassword">Current Password</Label>
                            <Input
                              id="currentPassword"
                              type="password"
                              placeholder="••••••••" />

                          </div>
                          
                          <div className="space-y-2" data-id="n1k99p7ps" data-path="src/pages/ProfilePage.tsx">
                            <Label htmlFor="newPassword">New Password</Label>
                            <Input
                              id="newPassword"
                              type="password"
                              placeholder="••••••••" />

                          </div>
                          
                          <div className="space-y-2" data-id="zajovycl0" data-path="src/pages/ProfilePage.tsx">
                            <Label htmlFor="confirmPassword">Confirm New Password</Label>
                            <Input
                              id="confirmPassword"
                              type="password"
                              placeholder="••••••••" />

                          </div>
                          
                          <Button
                            type="submit"
                            className="bg-[#357e00] hover:bg-[#1f4a00]">

                            Change Password
                          </Button>
                        </form>
                        
                        <div className="border-t pt-6" data-id="0xvu05isa" data-path="src/pages/ProfilePage.tsx">
                          <h3 className="text-lg font-medium mb-4" data-id="w3oybtezd" data-path="src/pages/ProfilePage.tsx">Danger Zone</h3>
                          <p className="text-gray-500 text-sm mb-4" data-id="zqhxqeqyc" data-path="src/pages/ProfilePage.tsx">
                            Once you delete your account, there is no going back. Please be certain.
                          </p>
                          <Button
                            variant="destructive"
                            onClick={handleDeleteAccount}>

                            Delete Account
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Notifications Tab */}
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Settings</CardTitle>
                      <CardDescription>
                        Manage how and when you receive notifications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6" data-id="p44h46dca" data-path="src/pages/ProfilePage.tsx">
                        <div data-id="qf2vtaz4r" data-path="src/pages/ProfilePage.tsx">
                          <h3 className="text-lg font-medium mb-4" data-id="406irq8h8" data-path="src/pages/ProfilePage.tsx">Email Notifications</h3>
                          
                          <div className="space-y-4" data-id="w2p5ibcl1" data-path="src/pages/ProfilePage.tsx">
                            <div className="flex items-center justify-between" data-id="nhf2uh91z" data-path="src/pages/ProfilePage.tsx">
                              <div data-id="pvqfql7be" data-path="src/pages/ProfilePage.tsx">
                                <p className="font-medium" data-id="cg71lfnl2" data-path="src/pages/ProfilePage.tsx">Platform Updates</p>
                                <p className="text-sm text-gray-500" data-id="msr96c1za" data-path="src/pages/ProfilePage.tsx">Receive updates about new features</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="xmunjwoxf" data-path="src/pages/ProfilePage.tsx">
                                <input type="checkbox" id="platform-updates" className="h-4 w-4 text-[#357e00]" defaultChecked data-id="2mqs5x9n1" data-path="src/pages/ProfilePage.tsx" />
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between" data-id="op2kn82q0" data-path="src/pages/ProfilePage.tsx">
                              <div data-id="xjzv87dlg" data-path="src/pages/ProfilePage.tsx">
                                <p className="font-medium" data-id="5zh9988ah" data-path="src/pages/ProfilePage.tsx">Course Notifications</p>
                                <p className="text-sm text-gray-500" data-id="4up4xw81a" data-path="src/pages/ProfilePage.tsx">Receive notifications about new courses</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="vogr16imk" data-path="src/pages/ProfilePage.tsx">
                                <input type="checkbox" id="course-notifs" className="h-4 w-4 text-[#357e00]" defaultChecked data-id="u2d3xtr7r" data-path="src/pages/ProfilePage.tsx" />
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between" data-id="lk87kja9a" data-path="src/pages/ProfilePage.tsx">
                              <div data-id="h2lhm6a80" data-path="src/pages/ProfilePage.tsx">
                                <p className="font-medium" data-id="9pbgjcojd" data-path="src/pages/ProfilePage.tsx">Request Updates</p>
                                <p className="text-sm text-gray-500" data-id="zjn98u2mh" data-path="src/pages/ProfilePage.tsx">Receive updates about your requests</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="5e3w9al4s" data-path="src/pages/ProfilePage.tsx">
                                <input type="checkbox" id="request-updates" className="h-4 w-4 text-[#357e00]" defaultChecked data-id="g0b5jir31" data-path="src/pages/ProfilePage.tsx" />
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between" data-id="l8kdql2a5" data-path="src/pages/ProfilePage.tsx">
                              <div data-id="7mrw0bl2n" data-path="src/pages/ProfilePage.tsx">
                                <p className="font-medium" data-id="6cfqmf6cm" data-path="src/pages/ProfilePage.tsx">Marketing Emails</p>
                                <p className="text-sm text-gray-500" data-id="zo35d8dy0" data-path="src/pages/ProfilePage.tsx">Receive marketing and promotional emails</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="gr2cg56mn" data-path="src/pages/ProfilePage.tsx">
                                <input type="checkbox" id="marketing-emails" className="h-4 w-4 text-[#357e00]" data-id="ds577khl5" data-path="src/pages/ProfilePage.tsx" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-4" data-id="h69v1a05w" data-path="src/pages/ProfilePage.tsx">
                          <Button className="bg-[#357e00] hover:bg-[#1f4a00]">
                            Save Notification Settings
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>);

};

export default ProfilePage;