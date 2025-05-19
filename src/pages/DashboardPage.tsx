import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  GraduationCapIcon,
  Users2Icon,
  FileTextIcon,
  HistoryIcon,
  UserIcon,
  SettingsIcon,
  CoinsIcon,
  ArrowRightIcon } from
"lucide-react";

const DashboardPage = () => {
  const { user, isAuthenticated, userPreferences } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null; // Will redirect in the effect above
  }

  return (
    <div className="min-h-screen flex flex-col" data-id="er5dmvgx4" data-path="src/pages/DashboardPage.tsx">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50" data-id="b4a4ency1" data-path="src/pages/DashboardPage.tsx">
        <div className="container mx-auto px-4" data-id="dczokmkwz" data-path="src/pages/DashboardPage.tsx">
          <div className="mb-8" data-id="c8xddct58" data-path="src/pages/DashboardPage.tsx">
            <h1 className="text-3xl font-bold mb-2" data-id="d3s3ojfn4" data-path="src/pages/DashboardPage.tsx">Welcome, {user.type === 'personal' ? user.name : user.companyName}</h1>
            <p className="text-gray-600" data-id="vu4kwp20b" data-path="src/pages/DashboardPage.tsx">
              Dashboard overview of your Si Jalu account
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6" data-id="80e0upotv" data-path="src/pages/DashboardPage.tsx">
            <div className="lg:col-span-1" data-id="kppeodeii" data-path="src/pages/DashboardPage.tsx">
              <div className="space-y-6" data-id="8rwivr8z0" data-path="src/pages/DashboardPage.tsx">
                {/* User Profile Card */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <UserIcon className="h-5 w-5 mr-2 text-[#357e00]" />
                      Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {user.type === 'personal' ?
                    <div className="space-y-2" data-id="hybci293x" data-path="src/pages/DashboardPage.tsx">
                        <div className="flex justify-between" data-id="nrs1wcoky" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="92ltq64v6" data-path="src/pages/DashboardPage.tsx">Name:</span>
                          <span className="text-sm font-medium" data-id="n39lqw34j" data-path="src/pages/DashboardPage.tsx">{user.name}</span>
                        </div>
                        <div className="flex justify-between" data-id="6a2r7vmns" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="lj9q1qf2r" data-path="src/pages/DashboardPage.tsx">Age:</span>
                          <span className="text-sm font-medium" data-id="3i6w6ycxm" data-path="src/pages/DashboardPage.tsx">{user.age}</span>
                        </div>
                        <div className="flex justify-between" data-id="70qfke2gf" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="2kq46orab" data-path="src/pages/DashboardPage.tsx">Job:</span>
                          <span className="text-sm font-medium" data-id="8igslfcq4" data-path="src/pages/DashboardPage.tsx">{user.job}</span>
                        </div>
                        <div className="flex justify-between" data-id="5gjzbdzk4" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="4mjkvymzu" data-path="src/pages/DashboardPage.tsx">Email:</span>
                          <span className="text-sm font-medium" data-id="7vwdmrjsg" data-path="src/pages/DashboardPage.tsx">{user.email}</span>
                        </div>
                      </div> :

                    <div className="space-y-2" data-id="rbzypkbz3" data-path="src/pages/DashboardPage.tsx">
                        <div className="flex justify-between" data-id="c4rjyszij" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="ny1filnlc" data-path="src/pages/DashboardPage.tsx">Company:</span>
                          <span className="text-sm font-medium" data-id="j3655iybi" data-path="src/pages/DashboardPage.tsx">{user.companyName}</span>
                        </div>
                        <div className="flex justify-between" data-id="4olpgmcva" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="1ot2m8k4v" data-path="src/pages/DashboardPage.tsx">Type:</span>
                          <span className="text-sm font-medium" data-id="1zptnpy4c" data-path="src/pages/DashboardPage.tsx">{user.companyType}</span>
                        </div>
                        <div className="flex justify-between" data-id="05hqkr2de" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="mn1jr2hfe" data-path="src/pages/DashboardPage.tsx">Started:</span>
                          <span className="text-sm font-medium" data-id="2e4yujr0s" data-path="src/pages/DashboardPage.tsx">{new Date(user.startingDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between" data-id="9z8rwr3r3" data-path="src/pages/DashboardPage.tsx">
                          <span className="text-sm text-gray-500" data-id="2d4k35hiz" data-path="src/pages/DashboardPage.tsx">Email:</span>
                          <span className="text-sm font-medium" data-id="ewp2y9kes" data-path="src/pages/DashboardPage.tsx">{user.email}</span>
                        </div>
                      </div>
                    }
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-4 text-[#357e00] border-[#357e00]"
                      onClick={() => navigate("/profile")}>

                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Points Card */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <CoinsIcon className="h-5 w-5 mr-2 text-[#ffb33a]" />
                      Points
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-4" data-id="xhaibq1jr" data-path="src/pages/DashboardPage.tsx">
                      <p className="text-3xl font-bold text-[#ffb33a]" data-id="2dw6vbw8q" data-path="src/pages/DashboardPage.tsx">{userPreferences.points}</p>
                      <p className="text-sm text-gray-500 mt-1" data-id="anua7o8xs" data-path="src/pages/DashboardPage.tsx">Available Points</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-[#ffb33a] border-[#ffb33a]">

                      Top Up Points
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Quick Links */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <SettingsIcon className="h-5 w-5 mr-2 text-[#357e00]" />
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2" data-id="chfnr6e79" data-path="src/pages/DashboardPage.tsx">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-700 hover:text-[#357e00] hover:bg-[#357e00]/10"
                        onClick={() => navigate("/jalucourse")}>

                        <GraduationCapIcon className="h-4 w-4 mr-2" />
                        Explore Courses
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-700 hover:text-[#357e00] hover:bg-[#357e00]/10"
                        onClick={() => navigate("/jalumentoring")}>

                        <Users2Icon className="h-4 w-4 mr-2" />
                        Find Mentors
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-gray-700 hover:text-[#357e00] hover:bg-[#357e00]/10"
                        onClick={() => navigate("/jalurequest")}>

                        <FileTextIcon className="h-4 w-4 mr-2" />
                        Create Request
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="lg:col-span-3" data-id="hbswif7zm" data-path="src/pages/DashboardPage.tsx">
              <Tabs defaultValue="activity">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                
                {/* Activity Tab */}
                <TabsContent value="activity">
                  <div className="space-y-6" data-id="wa0kpg0dg" data-path="src/pages/DashboardPage.tsx">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your recent interactions on Si Jalu</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4" data-id="5dij7kitu" data-path="src/pages/DashboardPage.tsx">
                          {/* Activity items - these would be dynamically populated in a real app */}
                          <div className="flex items-start gap-4 p-4 rounded-lg border" data-id="02lgqws71" data-path="src/pages/DashboardPage.tsx">
                            <div className="rounded-full bg-[#357e00]/10 p-2" data-id="v5vxw2aq1" data-path="src/pages/DashboardPage.tsx">
                              <FileTextIcon className="h-5 w-5 text-[#357e00]" />
                            </div>
                            <div data-id="2fnqakdss" data-path="src/pages/DashboardPage.tsx">
                              <h4 className="font-medium" data-id="hzzpj0jc2" data-path="src/pages/DashboardPage.tsx">Open Request Created</h4>
                              <p className="text-sm text-gray-500" data-id="28zvo5syi" data-path="src/pages/DashboardPage.tsx">You created a new open request for logo design</p>
                              <p className="text-xs text-gray-400 mt-1" data-id="01vp1b9gm" data-path="src/pages/DashboardPage.tsx">Today at 10:30 AM</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4 p-4 rounded-lg border" data-id="spcw1i3dm" data-path="src/pages/DashboardPage.tsx">
                            <div className="rounded-full bg-[#ffb33a]/10 p-2" data-id="kp61i9rog" data-path="src/pages/DashboardPage.tsx">
                              <Users2Icon className="h-5 w-5 text-[#ffb33a]" />
                            </div>
                            <div data-id="pdfmz5wyl" data-path="src/pages/DashboardPage.tsx">
                              <h4 className="font-medium" data-id="2up35kp0s" data-path="src/pages/DashboardPage.tsx">Mentoring Session Booked</h4>
                              <p className="text-sm text-gray-500" data-id="z85159uzc" data-path="src/pages/DashboardPage.tsx">You booked a session with Ahmad Rizki</p>
                              <p className="text-xs text-gray-400 mt-1" data-id="l7e2rj965" data-path="src/pages/DashboardPage.tsx">Yesterday at 2:15 PM</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4 p-4 rounded-lg border" data-id="f44xzja13" data-path="src/pages/DashboardPage.tsx">
                            <div className="rounded-full bg-[#73a151]/10 p-2" data-id="rpsnju0k8" data-path="src/pages/DashboardPage.tsx">
                              <GraduationCapIcon className="h-5 w-5 text-[#73a151]" />
                            </div>
                            <div data-id="s14mycyw0" data-path="src/pages/DashboardPage.tsx">
                              <h4 className="font-medium" data-id="s464o7gvr" data-path="src/pages/DashboardPage.tsx">Course Enrollment</h4>
                              <p className="text-sm text-gray-500" data-id="uzuvniwq7" data-path="src/pages/DashboardPage.tsx">You enrolled in "Fundamentals of Graphic Design"</p>
                              <p className="text-xs text-gray-400 mt-1" data-id="3kjhalmbh" data-path="src/pages/DashboardPage.tsx">3 days ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-id="pcldganbu" data-path="src/pages/DashboardPage.tsx">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">JaluCourse</CardTitle>
                          <CardDescription>Your enrolled courses</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-2xl font-bold" data-id="kn58br7fw" data-path="src/pages/DashboardPage.tsx">1</p>
                          <p className="text-sm text-gray-500" data-id="cbdj6luqz" data-path="src/pages/DashboardPage.tsx">Active enrollment</p>
                        </CardContent>
                        <div className="px-6 pb-4" data-id="vf3cdcvlb" data-path="src/pages/DashboardPage.tsx">
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-[#357e00]"
                            onClick={() => navigate("/jalucourse")}>

                            View Courses <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">JaluMentoring</CardTitle>
                          <CardDescription>Your mentoring sessions</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-2xl font-bold" data-id="2ei0yl9av" data-path="src/pages/DashboardPage.tsx">2</p>
                          <p className="text-sm text-gray-500" data-id="a4sax8q53" data-path="src/pages/DashboardPage.tsx">Upcoming sessions</p>
                        </CardContent>
                        <div className="px-6 pb-4" data-id="yn4khx3fj" data-path="src/pages/DashboardPage.tsx">
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-[#357e00]"
                            onClick={() => navigate("/jalumentoring")}>

                            View Sessions <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </Card>
                      
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">JaluRequest</CardTitle>
                          <CardDescription>Your service requests</CardDescription>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <p className="text-2xl font-bold" data-id="lwx57tbwc" data-path="src/pages/DashboardPage.tsx">3</p>
                          <p className="text-sm text-gray-500" data-id="fjg25s79a" data-path="src/pages/DashboardPage.tsx">Active requests</p>
                        </CardContent>
                        <div className="px-6 pb-4" data-id="53jgulqyd" data-path="src/pages/DashboardPage.tsx">
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-[#357e00]"
                            onClick={() => navigate("/jalurequest")}>

                            View Requests <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Preferences Tab */}
                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Preferences</CardTitle>
                      <CardDescription>Customize your Si Jalu experience</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6" data-id="p4xmymt90" data-path="src/pages/DashboardPage.tsx">
                        <div data-id="xlmfmuhpw" data-path="src/pages/DashboardPage.tsx">
                          <h3 className="text-lg font-medium mb-3" data-id="h54h3il9q" data-path="src/pages/DashboardPage.tsx">Service Preferences</h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3" data-id="ht6itcngz" data-path="src/pages/DashboardPage.tsx">
                            <div className="border rounded-md p-3 flex items-center space-x-2" data-id="ub9xb83vk" data-path="src/pages/DashboardPage.tsx">
                              <input type="checkbox" id="pref-1" className="h-4 w-4 text-[#357e00]" data-id="alu4bgh2c" data-path="src/pages/DashboardPage.tsx" />
                              <label htmlFor="pref-1" className="text-sm" data-id="royd58q7t" data-path="src/pages/DashboardPage.tsx">Graphic Design</label>
                            </div>
                            <div className="border rounded-md p-3 flex items-center space-x-2" data-id="ts0va34zb" data-path="src/pages/DashboardPage.tsx">
                              <input type="checkbox" id="pref-2" className="h-4 w-4 text-[#357e00]" data-id="vd2rk5shp" data-path="src/pages/DashboardPage.tsx" />
                              <label htmlFor="pref-2" className="text-sm" data-id="q5vap7781" data-path="src/pages/DashboardPage.tsx">Web Development</label>
                            </div>
                            <div className="border rounded-md p-3 flex items-center space-x-2" data-id="787ef0xr8" data-path="src/pages/DashboardPage.tsx">
                              <input type="checkbox" id="pref-3" className="h-4 w-4 text-[#357e00]" data-id="lnfvy01oy" data-path="src/pages/DashboardPage.tsx" />
                              <label htmlFor="pref-3" className="text-sm" data-id="l12la6nek" data-path="src/pages/DashboardPage.tsx">UI/UX Design</label>
                            </div>
                            <div className="border rounded-md p-3 flex items-center space-x-2" data-id="gkgajokdw" data-path="src/pages/DashboardPage.tsx">
                              <input type="checkbox" id="pref-4" className="h-4 w-4 text-[#357e00]" data-id="6fbphu7cb" data-path="src/pages/DashboardPage.tsx" />
                              <label htmlFor="pref-4" className="text-sm" data-id="bhacpzi69" data-path="src/pages/DashboardPage.tsx">Content Writing</label>
                            </div>
                            <div className="border rounded-md p-3 flex items-center space-x-2" data-id="alu16iz9a" data-path="src/pages/DashboardPage.tsx">
                              <input type="checkbox" id="pref-5" className="h-4 w-4 text-[#357e00]" data-id="5phutgzzl" data-path="src/pages/DashboardPage.tsx" />
                              <label htmlFor="pref-5" className="text-sm" data-id="fhjfze0fu" data-path="src/pages/DashboardPage.tsx">Social Media</label>
                            </div>
                            <div className="border rounded-md p-3 flex items-center space-x-2" data-id="apxoc9zzo" data-path="src/pages/DashboardPage.tsx">
                              <input type="checkbox" id="pref-6" className="h-4 w-4 text-[#357e00]" data-id="zn3w4onm9" data-path="src/pages/DashboardPage.tsx" />
                              <label htmlFor="pref-6" className="text-sm" data-id="umzlr2n7a" data-path="src/pages/DashboardPage.tsx">Video Editing</label>
                            </div>
                          </div>
                        </div>
                        
                        <div data-id="wc69ggjhu" data-path="src/pages/DashboardPage.tsx">
                          <h3 className="text-lg font-medium mb-3" data-id="m7g3yyou4" data-path="src/pages/DashboardPage.tsx">Notification Settings</h3>
                          <div className="space-y-3" data-id="39gyecc2g" data-path="src/pages/DashboardPage.tsx">
                            <div className="flex items-center justify-between" data-id="l7ygipvqy" data-path="src/pages/DashboardPage.tsx">
                              <div data-id="48ve6katd" data-path="src/pages/DashboardPage.tsx">
                                <p className="font-medium" data-id="ech8ql5h7" data-path="src/pages/DashboardPage.tsx">Email Notifications</p>
                                <p className="text-sm text-gray-500" data-id="u7m7jc68r" data-path="src/pages/DashboardPage.tsx">Receive updates about your activity</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="su8iine8c" data-path="src/pages/DashboardPage.tsx">
                                <input type="checkbox" id="notify-1" className="h-4 w-4 text-[#357e00]" defaultChecked data-id="ho7u22epf" data-path="src/pages/DashboardPage.tsx" />
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between" data-id="deu0yjrqp" data-path="src/pages/DashboardPage.tsx">
                              <div data-id="at78sj224" data-path="src/pages/DashboardPage.tsx">
                                <p className="font-medium" data-id="es1w0flii" data-path="src/pages/DashboardPage.tsx">New Offers</p>
                                <p className="text-sm text-gray-500" data-id="lko385s5w" data-path="src/pages/DashboardPage.tsx">Receive notifications about new offers and promotions</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="xga45kn4q" data-path="src/pages/DashboardPage.tsx">
                                <input type="checkbox" id="notify-2" className="h-4 w-4 text-[#357e00]" data-id="46gdltyky" data-path="src/pages/DashboardPage.tsx" />
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between" data-id="voykzk9rp" data-path="src/pages/DashboardPage.tsx">
                              <div data-id="lg9x4vpmr" data-path="src/pages/DashboardPage.tsx">
                                <p className="font-medium" data-id="5p811kvf2" data-path="src/pages/DashboardPage.tsx">Platform Updates</p>
                                <p className="text-sm text-gray-500" data-id="ia4xuumgs" data-path="src/pages/DashboardPage.tsx">Stay informed about new features and improvements</p>
                              </div>
                              <div className="ml-auto flex items-center" data-id="jvojd2s1h" data-path="src/pages/DashboardPage.tsx">
                                <input type="checkbox" id="notify-3" className="h-4 w-4 text-[#357e00]" defaultChecked data-id="kjqwfkemo" data-path="src/pages/DashboardPage.tsx" />
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="pt-2" data-id="izcizm2nx" data-path="src/pages/DashboardPage.tsx">
                          <Button className="bg-[#357e00] hover:bg-[#1f4a00]">
                            Save Preferences
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* History Tab */}
                <TabsContent value="history">
                  <Card>
                    <CardHeader>
                      <CardTitle>Transaction History</CardTitle>
                      <CardDescription>Your recent transactions on Si Jalu</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6" data-id="apy4f4rui" data-path="src/pages/DashboardPage.tsx">
                        {/* In a real app, these would be populated from API data */}
                        <div className="overflow-x-auto" data-id="axgdtw5x8" data-path="src/pages/DashboardPage.tsx">
                          <table className="w-full" data-id="rj6me603r" data-path="src/pages/DashboardPage.tsx">
                            <thead data-id="s8kom01f3" data-path="src/pages/DashboardPage.tsx">
                              <tr className="border-b" data-id="7ng09u5az" data-path="src/pages/DashboardPage.tsx">
                                <th className="text-left py-3 px-4 font-medium" data-id="drlfy81dj" data-path="src/pages/DashboardPage.tsx">Date</th>
                                <th className="text-left py-3 px-4 font-medium" data-id="uxuoux2xd" data-path="src/pages/DashboardPage.tsx">Description</th>
                                <th className="text-right py-3 px-4 font-medium" data-id="dkufxkk5n" data-path="src/pages/DashboardPage.tsx">Amount</th>
                                <th className="text-right py-3 px-4 font-medium" data-id="wivudxf1j" data-path="src/pages/DashboardPage.tsx">Status</th>
                              </tr>
                            </thead>
                            <tbody data-id="c9158cixy" data-path="src/pages/DashboardPage.tsx">
                              <tr className="border-b" data-id="fo06lha6r" data-path="src/pages/DashboardPage.tsx">
                                <td className="py-3 px-4 text-sm" data-id="wiq5ux5dw" data-path="src/pages/DashboardPage.tsx">Aug 15, 2023</td>
                                <td className="py-3 px-4 text-sm" data-id="nt524s1mr" data-path="src/pages/DashboardPage.tsx">Graphic Design Course</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="5djpzuj6m" data-path="src/pages/DashboardPage.tsx">Rp 250,000</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="xabihuvmk" data-path="src/pages/DashboardPage.tsx">
                                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800" data-id="mw1rtfocf" data-path="src/pages/DashboardPage.tsx">Paid</span>
                                </td>
                              </tr>
                              <tr className="border-b" data-id="7uu5q68cr" data-path="src/pages/DashboardPage.tsx">
                                <td className="py-3 px-4 text-sm" data-id="i05wuu2g6" data-path="src/pages/DashboardPage.tsx">Aug 10, 2023</td>
                                <td className="py-3 px-4 text-sm" data-id="55ed490jg" data-path="src/pages/DashboardPage.tsx">Mentoring Session with Ahmad</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="b51ae0s55" data-path="src/pages/DashboardPage.tsx">Rp 150,000</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="xvqbmxlxj" data-path="src/pages/DashboardPage.tsx">
                                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800" data-id="npghjie2w" data-path="src/pages/DashboardPage.tsx">Paid</span>
                                </td>
                              </tr>
                              <tr className="border-b" data-id="zizq2ge4l" data-path="src/pages/DashboardPage.tsx">
                                <td className="py-3 px-4 text-sm" data-id="etzkskn09" data-path="src/pages/DashboardPage.tsx">Aug 5, 2023</td>
                                <td className="py-3 px-4 text-sm" data-id="tdcw82uqy" data-path="src/pages/DashboardPage.tsx">Points Top Up</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="cy40wp702" data-path="src/pages/DashboardPage.tsx">Rp 100,000</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="slmvpbsvs" data-path="src/pages/DashboardPage.tsx">
                                  <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800" data-id="8iyqmt96m" data-path="src/pages/DashboardPage.tsx">Completed</span>
                                </td>
                              </tr>
                              <tr className="border-b" data-id="7p6qx8wim" data-path="src/pages/DashboardPage.tsx">
                                <td className="py-3 px-4 text-sm" data-id="cdfwl65sh" data-path="src/pages/DashboardPage.tsx">Jul 28, 2023</td>
                                <td className="py-3 px-4 text-sm" data-id="ehq9tyfdu" data-path="src/pages/DashboardPage.tsx">Logo Design Request</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="9fw3px0cp" data-path="src/pages/DashboardPage.tsx">Rp 500,000</td>
                                <td className="py-3 px-4 text-sm text-right" data-id="xixuz6m1s" data-path="src/pages/DashboardPage.tsx">
                                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800" data-id="f5qbnz1il" data-path="src/pages/DashboardPage.tsx">In Progress</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="pt-2 flex justify-center" data-id="y6fb8ni5l" data-path="src/pages/DashboardPage.tsx">
                          <Button
                            variant="outline"
                            className="text-[#357e00] border-[#357e00]">

                            <HistoryIcon className="h-4 w-4 mr-2" />
                            View All History
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

export default DashboardPage;