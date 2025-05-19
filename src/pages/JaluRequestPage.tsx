import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RequestForm from "@/components/requests/RequestForm";
import { FileTextIcon, ClockIcon, CheckCircleIcon, XCircleIcon, UserIcon } from "lucide-react";

const JaluRequestPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null; // Redirect will happen in the effect
  }

  return (
    <div className="min-h-screen flex flex-col" data-id="c0mo8sxk3" data-path="src/pages/JaluRequestPage.tsx">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50" data-id="rwa0y0vcz" data-path="src/pages/JaluRequestPage.tsx">
        <div className="container mx-auto px-4" data-id="kbbq02o7k" data-path="src/pages/JaluRequestPage.tsx">
          <div className="mb-8" data-id="k5q6l3fj3" data-path="src/pages/JaluRequestPage.tsx">
            <h1 className="text-3xl font-bold mb-2" data-id="var3yhya8" data-path="src/pages/JaluRequestPage.tsx">JaluRequest</h1>
            <p className="text-gray-600" data-id="m9g426sxb" data-path="src/pages/JaluRequestPage.tsx">
              Connect with creative professionals for your projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-id="tmmtn632f" data-path="src/pages/JaluRequestPage.tsx">
            {/* Left Side - Request Form */}
            <div className="lg:col-span-2" data-id="4v4vab7bb" data-path="src/pages/JaluRequestPage.tsx">
              <RequestForm />
            </div>
            
            {/* Right Side - Dashboard */}
            <div className="lg:col-span-1 space-y-6" data-id="n3dwxdc0a" data-path="src/pages/JaluRequestPage.tsx">
              {/* Active Requests */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <FileTextIcon className="h-5 w-5 mr-2 text-[#357e00]" />
                    Your Active Requests
                  </CardTitle>
                  <CardDescription>
                    Currently active requests you've created
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Sample active requests */}
                  <div className="border rounded-lg p-4" data-id="l6phon8ri" data-path="src/pages/JaluRequestPage.tsx">
                    <div className="flex justify-between items-start mb-2" data-id="mf79uger0" data-path="src/pages/JaluRequestPage.tsx">
                      <h3 className="font-medium" data-id="1rtl3e76o" data-path="src/pages/JaluRequestPage.tsx">Logo Design for Website</h3>
                      <Badge className="bg-blue-500">Open Request</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2" data-id="yqwyksnrl" data-path="src/pages/JaluRequestPage.tsx">
                      Looking for a modern, minimalist logo for my new e-commerce website.
                    </p>
                    <div className="flex justify-between text-sm text-gray-500" data-id="nee7fbfmf" data-path="src/pages/JaluRequestPage.tsx">
                      <span className="flex items-center" data-id="aa2fyha3e" data-path="src/pages/JaluRequestPage.tsx">
                        <ClockIcon className="h-4 w-4 mr-1" /> Posted 2 days ago
                      </span>
                      <span data-id="vv50f076b" data-path="src/pages/JaluRequestPage.tsx">Rp 500,000</span>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-4" data-id="3h88sgwnd" data-path="src/pages/JaluRequestPage.tsx">
                    <div className="flex justify-between items-start mb-2" data-id="5lrwwwvwg" data-path="src/pages/JaluRequestPage.tsx">
                      <h3 className="font-medium" data-id="gu1e4clcc" data-path="src/pages/JaluRequestPage.tsx">Website Redesign</h3>
                      <Badge className="bg-amber-500">Direct Request</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2" data-id="all3722qi" data-path="src/pages/JaluRequestPage.tsx">
                      Need help updating my business website with a modern design.
                    </p>
                    <div className="flex justify-between text-sm text-gray-500" data-id="vtqgxefcz" data-path="src/pages/JaluRequestPage.tsx">
                      <span className="flex items-center" data-id="bezgqqa1c" data-path="src/pages/JaluRequestPage.tsx">
                        <UserIcon className="h-4 w-4 mr-1" /> Budi Santoso
                      </span>
                      <span data-id="7ht7amzns" data-path="src/pages/JaluRequestPage.tsx">Rp 1,500,000</span>
                    </div>
                  </div>
                  
                  <Button
                    variant="outline"
                    className="w-full text-[#357e00] border-[#357e00]">

                    View All Requests
                  </Button>
                </CardContent>
              </Card>
              
              {/* Request Statistics */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Request Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4" data-id="z046o4ccq" data-path="src/pages/JaluRequestPage.tsx">
                    <div className="flex justify-between items-center" data-id="ma49jm45v" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="flex items-center" data-id="bq0lbcso2" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="w-10 h-10 rounded-full bg-[#357e00]/10 flex items-center justify-center mr-3" data-id="kwt79wzyd" data-path="src/pages/JaluRequestPage.tsx">
                          <FileTextIcon className="h-5 w-5 text-[#357e00]" />
                        </div>
                        <div data-id="1n0t8fxsm" data-path="src/pages/JaluRequestPage.tsx">
                          <p className="font-medium" data-id="a42qr00qe" data-path="src/pages/JaluRequestPage.tsx">Total Requests</p>
                          <p className="text-sm text-gray-500" data-id="o5dd5z04l" data-path="src/pages/JaluRequestPage.tsx">All time</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold" data-id="csiwwlu40" data-path="src/pages/JaluRequestPage.tsx">5</p>
                    </div>
                    
                    <div className="flex justify-between items-center" data-id="2lfexzn4v" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="flex items-center" data-id="x9qbvwhio" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3" data-id="kk7go0ib0" data-path="src/pages/JaluRequestPage.tsx">
                          <ClockIcon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div data-id="cmh7ydapc" data-path="src/pages/JaluRequestPage.tsx">
                          <p className="font-medium" data-id="s21p0vemo" data-path="src/pages/JaluRequestPage.tsx">In Progress</p>
                          <p className="text-sm text-gray-500" data-id="3scglrnx7" data-path="src/pages/JaluRequestPage.tsx">Active requests</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold" data-id="h0iza00dw" data-path="src/pages/JaluRequestPage.tsx">2</p>
                    </div>
                    
                    <div className="flex justify-between items-center" data-id="fernxl3lk" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="flex items-center" data-id="rm3kv7eaz" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3" data-id="shzcs936m" data-path="src/pages/JaluRequestPage.tsx">
                          <CheckCircleIcon className="h-5 w-5 text-green-600" />
                        </div>
                        <div data-id="ak93vq21h" data-path="src/pages/JaluRequestPage.tsx">
                          <p className="font-medium" data-id="e2ibraksg" data-path="src/pages/JaluRequestPage.tsx">Completed</p>
                          <p className="text-sm text-gray-500" data-id="0e8amxd78" data-path="src/pages/JaluRequestPage.tsx">Finished requests</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold" data-id="hmt3xtebh" data-path="src/pages/JaluRequestPage.tsx">3</p>
                    </div>
                    
                    <div className="flex justify-between items-center" data-id="aeavrqt5z" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="flex items-center" data-id="thi5er48k" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3" data-id="k92g3t5eo" data-path="src/pages/JaluRequestPage.tsx">
                          <XCircleIcon className="h-5 w-5 text-red-600" />
                        </div>
                        <div data-id="x03dsye2r" data-path="src/pages/JaluRequestPage.tsx">
                          <p className="font-medium" data-id="g9x8gu38a" data-path="src/pages/JaluRequestPage.tsx">Cancelled</p>
                          <p className="text-sm text-gray-500" data-id="ymlj9w7lh" data-path="src/pages/JaluRequestPage.tsx">Terminated requests</p>
                        </div>
                      </div>
                      <p className="text-2xl font-bold" data-id="ib1i59bs1" data-path="src/pages/JaluRequestPage.tsx">0</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Help Card */}
              <Card className="bg-[#ffb33a]/10 border-[#ffb33a]/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-[#1f4a00]">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4" data-id="cqehanllt" data-path="src/pages/JaluRequestPage.tsx">
                    Not sure how to create the perfect request? Our support team is here to help you connect with the right creative professionals.
                  </p>
                  <Button className="w-full bg-[#ffb33a] hover:bg-[#ffb33a]/80 text-[#1f4a00]">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Completed Requests Section */}
          <div className="mt-12" data-id="5eczp9m0z" data-path="src/pages/JaluRequestPage.tsx">
            <h2 className="text-2xl font-bold mb-6" data-id="67k61pg37" data-path="src/pages/JaluRequestPage.tsx">Recent Completed Requests</h2>
            
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="open">Open Requests</TabsTrigger>
                <TabsTrigger value="direct">Direct Requests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="usrp2zrj7" data-path="src/pages/JaluRequestPage.tsx">
                  {/* Sample completed projects */}
                  <Card>
                    <div className="flex items-start p-6" data-id="qc2v3egv2" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="mr-4" data-id="y3o012rtv" data-path="src/pages/JaluRequestPage.tsx">
                        <img
                          src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=120&auto=format&fit=crop"
                          alt="Project thumbnail"
                          className="w-16 h-16 object-cover rounded-lg" data-id="suablhng5" data-path="src/pages/JaluRequestPage.tsx" />

                      </div>
                      <div className="flex-1" data-id="tc5lncugq" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="flex justify-between items-start mb-2" data-id="2nje4psvc" data-path="src/pages/JaluRequestPage.tsx">
                          <h3 className="font-medium" data-id="qu1ds6wbr" data-path="src/pages/JaluRequestPage.tsx">Business Card Design</h3>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2" data-id="zs5i6zms4" data-path="src/pages/JaluRequestPage.tsx">
                          Modern business card design for a consulting company.
                        </p>
                        <div className="text-sm text-gray-500 flex justify-between" data-id="yxorxy3j2" data-path="src/pages/JaluRequestPage.tsx">
                          <span data-id="aoqpndbr2" data-path="src/pages/JaluRequestPage.tsx">Completed on Aug 10, 2023</span>
                          <span data-id="qr93fa7k0" data-path="src/pages/JaluRequestPage.tsx">Rp 250,000</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <Card>
                    <div className="flex items-start p-6" data-id="40n7m340a" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="mr-4" data-id="jj2xjmzu3" data-path="src/pages/JaluRequestPage.tsx">
                        <img
                          src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=120&auto=format&fit=crop"
                          alt="Project thumbnail"
                          className="w-16 h-16 object-cover rounded-lg" data-id="y4goyiyh3" data-path="src/pages/JaluRequestPage.tsx" />

                      </div>
                      <div className="flex-1" data-id="2s6oj0g0i" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="flex justify-between items-start mb-2" data-id="3pccb278i" data-path="src/pages/JaluRequestPage.tsx">
                          <h3 className="font-medium" data-id="lc923k7h1" data-path="src/pages/JaluRequestPage.tsx">Social Media Banner</h3>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2" data-id="5ndsmc4jd" data-path="src/pages/JaluRequestPage.tsx">
                          Set of social media banners for product launch campaign.
                        </p>
                        <div className="text-sm text-gray-500 flex justify-between" data-id="adv5vrkos" data-path="src/pages/JaluRequestPage.tsx">
                          <span data-id="mqur3c5x5" data-path="src/pages/JaluRequestPage.tsx">Completed on Jul 25, 2023</span>
                          <span data-id="5r3hvbr0b" data-path="src/pages/JaluRequestPage.tsx">Rp 300,000</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="open">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="p6t4yd3m0" data-path="src/pages/JaluRequestPage.tsx">
                  <Card>
                    <div className="flex items-start p-6" data-id="dntgatfan" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="mr-4" data-id="yb3v0mzha" data-path="src/pages/JaluRequestPage.tsx">
                        <img
                          src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=120&auto=format&fit=crop"
                          alt="Project thumbnail"
                          className="w-16 h-16 object-cover rounded-lg" data-id="cyamcw9bl" data-path="src/pages/JaluRequestPage.tsx" />

                      </div>
                      <div className="flex-1" data-id="ishanw5lt" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="flex justify-between items-start mb-2" data-id="d63m3xjuh" data-path="src/pages/JaluRequestPage.tsx">
                          <h3 className="font-medium" data-id="hxc81ievm" data-path="src/pages/JaluRequestPage.tsx">Social Media Banner</h3>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2" data-id="084rpqph3" data-path="src/pages/JaluRequestPage.tsx">
                          Set of social media banners for product launch campaign.
                        </p>
                        <div className="text-sm text-gray-500 flex justify-between" data-id="7xpjvv9aj" data-path="src/pages/JaluRequestPage.tsx">
                          <span data-id="ybne588ld" data-path="src/pages/JaluRequestPage.tsx">Completed on Jul 25, 2023</span>
                          <span data-id="brzh9yd11" data-path="src/pages/JaluRequestPage.tsx">Rp 300,000</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="direct">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-id="g07q8ilq5" data-path="src/pages/JaluRequestPage.tsx">
                  <Card>
                    <div className="flex items-start p-6" data-id="1kpz566qw" data-path="src/pages/JaluRequestPage.tsx">
                      <div className="mr-4" data-id="r39pbosrt" data-path="src/pages/JaluRequestPage.tsx">
                        <img
                          src="https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?q=80&w=120&auto=format&fit=crop"
                          alt="Project thumbnail"
                          className="w-16 h-16 object-cover rounded-lg" data-id="6ot0yz46m" data-path="src/pages/JaluRequestPage.tsx" />

                      </div>
                      <div className="flex-1" data-id="qjzzh6kji" data-path="src/pages/JaluRequestPage.tsx">
                        <div className="flex justify-between items-start mb-2" data-id="ifd99yykd" data-path="src/pages/JaluRequestPage.tsx">
                          <h3 className="font-medium" data-id="ga4vtwgoj" data-path="src/pages/JaluRequestPage.tsx">Business Card Design</h3>
                          <Badge className="bg-green-500">Completed</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2" data-id="2ym0m77wp" data-path="src/pages/JaluRequestPage.tsx">
                          Modern business card design for a consulting company.
                        </p>
                        <div className="text-sm text-gray-500 flex justify-between" data-id="q53fstbwr" data-path="src/pages/JaluRequestPage.tsx">
                          <span data-id="oxvf2hs63" data-path="src/pages/JaluRequestPage.tsx">Completed on Aug 10, 2023</span>
                          <span data-id="cog09gd4n" data-path="src/pages/JaluRequestPage.tsx">Rp 250,000</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>);

};

export default JaluRequestPage;