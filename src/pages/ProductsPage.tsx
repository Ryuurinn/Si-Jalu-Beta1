import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBox from "@/components/home/ChatBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCapIcon,
  Users2Icon,
  FileTextIcon,
  ArrowRightIcon,
  CheckCircle2Icon } from
"lucide-react";

const ProductsPage = () => {
  return (
    <div className="min-h-screen flex flex-col" data-id="cp7plq7w6" data-path="src/pages/ProductsPage.tsx">
      <Navbar />
      
      <main className="flex-grow" data-id="vrtqllrvp" data-path="src/pages/ProductsPage.tsx">
        {/* Hero Section */}
        <section className="bg-[#357e00] text-white py-20" data-id="h5j70mv8r" data-path="src/pages/ProductsPage.tsx">
          <div className="container mx-auto px-4 text-center" data-id="ox2caprc2" data-path="src/pages/ProductsPage.tsx">
            <h1 className="text-4xl font-bold mb-6" data-id="d27d86i21" data-path="src/pages/ProductsPage.tsx">Our Products</h1>
            <p className="text-xl max-w-3xl mx-auto" data-id="2y0rrou9u" data-path="src/pages/ProductsPage.tsx">
              Discover our suite of services designed to connect you with creative professionals.
            </p>
          </div>
        </section>
        
        {/* Products Tabs */}
        <section className="py-16" data-id="uxdm674xl" data-path="src/pages/ProductsPage.tsx">
          <div className="container mx-auto px-4 max-w-5xl" data-id="4ocp2lgin" data-path="src/pages/ProductsPage.tsx">
            <Tabs defaultValue="jalucourse" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="jalucourse" className="py-3">JaluCourse</TabsTrigger>
                <TabsTrigger value="jalumentoring" className="py-3">JaluMentoring</TabsTrigger>
                <TabsTrigger value="jalurequest" className="py-3">JaluRequest</TabsTrigger>
              </TabsList>
              
              {/* JaluCourse Tab */}
              <TabsContent value="jalucourse">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-id="xsoovf78v" data-path="src/pages/ProductsPage.tsx">
                  <div data-id="0s33f4in4" data-path="src/pages/ProductsPage.tsx">
                    <h2 className="text-3xl font-bold mb-6 text-[#357e00]" data-id="j5kjtyncj" data-path="src/pages/ProductsPage.tsx">JaluCourse</h2>
                    <p className="text-gray-700 mb-6" data-id="m9aoz87es" data-path="src/pages/ProductsPage.tsx">
                      Special learning sessions officially hosted by Si Jalu, offering hands-on training and certification on creative topics.
                    </p>
                    
                    <div className="space-y-4 mb-8" data-id="z0zfeiofd" data-path="src/pages/ProductsPage.tsx">
                      <div className="flex items-start gap-3" data-id="v2zp09f2j" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#357e00] mt-0.5 flex-shrink-0" />
                        <div data-id="g331qcrz5" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="v6p3613ky" data-path="src/pages/ProductsPage.tsx">Expert Instructors</h3>
                          <p className="text-sm text-gray-600" data-id="ai4borj21" data-path="src/pages/ProductsPage.tsx">Learn from industry professionals with years of experience.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" data-id="iiy9pvm3j" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#357e00] mt-0.5 flex-shrink-0" />
                        <div data-id="b88sef0n8" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="sjs4qr19r" data-path="src/pages/ProductsPage.tsx">Official Certification</h3>
                          <p className="text-sm text-gray-600" data-id="f474uuw1u" data-path="src/pages/ProductsPage.tsx">Receive recognized certifications upon course completion.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" data-id="212qcpmh3" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#357e00] mt-0.5 flex-shrink-0" />
                        <div data-id="s3m4fkyot" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="4doigcsgo" data-path="src/pages/ProductsPage.tsx">Hands-On Projects</h3>
                          <p className="text-sm text-gray-600" data-id="dkpmiagmt" data-path="src/pages/ProductsPage.tsx">Apply what you learn through practical projects and assignments.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-[#357e00] hover:bg-[#1f4a00]" asChild>
                      <Link to="/jalucourse">
                        Explore Courses <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="bg-[#357e00]/5 p-8 rounded-lg flex justify-center items-center" data-id="sol5pc0ja" data-path="src/pages/ProductsPage.tsx">
                    <div className="text-center" data-id="na6u7u838" data-path="src/pages/ProductsPage.tsx">
                      <div className="w-24 h-24 mx-auto bg-[#357e00]/10 rounded-full flex items-center justify-center mb-6" data-id="elb1nvue9" data-path="src/pages/ProductsPage.tsx">
                        <GraduationCapIcon className="h-12 w-12 text-[#357e00]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2" data-id="t0jjuilw7" data-path="src/pages/ProductsPage.tsx">JaluCourse</h3>
                      <p className="text-gray-600" data-id="qimtfjlj7" data-path="src/pages/ProductsPage.tsx">
                        Elevate your skills with structured learning experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* JaluMentoring Tab */}
              <TabsContent value="jalumentoring">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-id="k8a5jqm38" data-path="src/pages/ProductsPage.tsx">
                  <div data-id="yq9mwmhqz" data-path="src/pages/ProductsPage.tsx">
                    <h2 className="text-3xl font-bold mb-6 text-[#ffb33a]" data-id="g04bc5nk9" data-path="src/pages/ProductsPage.tsx">JaluMentoring</h2>
                    <p className="text-gray-700 mb-6" data-id="q3lia9m6p" data-path="src/pages/ProductsPage.tsx">
                      A consultation-based feature where users can book sessions with experienced creative professionals for guidance, feedback, or skill development.
                    </p>
                    
                    <div className="space-y-4 mb-8" data-id="73nevxd9w" data-path="src/pages/ProductsPage.tsx">
                      <div className="flex items-start gap-3" data-id="o6hznqdz7" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#ffb33a] mt-0.5 flex-shrink-0" />
                        <div data-id="htkbdfyyf" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="9tsl2aosg" data-path="src/pages/ProductsPage.tsx">Personalized Guidance</h3>
                          <p className="text-sm text-gray-600" data-id="eu5ig968z" data-path="src/pages/ProductsPage.tsx">Get one-on-one attention focused on your specific needs.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" data-id="s68rxdoed" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#ffb33a] mt-0.5 flex-shrink-0" />
                        <div data-id="4o6abqxcn" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="bl7bs8k0s" data-path="src/pages/ProductsPage.tsx">Flexible Scheduling</h3>
                          <p className="text-sm text-gray-600" data-id="ijda3lkgc" data-path="src/pages/ProductsPage.tsx">Book sessions that fit your schedule and availability.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" data-id="6rwoi4538" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#ffb33a] mt-0.5 flex-shrink-0" />
                        <div data-id="szf43esd8" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="gh564g3zc" data-path="src/pages/ProductsPage.tsx">Expert Feedback</h3>
                          <p className="text-sm text-gray-600" data-id="vuhapntv1" data-path="src/pages/ProductsPage.tsx">Receive constructive criticism and advice from industry experts.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-[#ffb33a] hover:bg-[#ffb33a]/80 text-[#1f4a00]" asChild>
                      <Link to="/jalumentoring">
                        Find a Mentor <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="bg-[#ffb33a]/5 p-8 rounded-lg flex justify-center items-center" data-id="zd7mkofw6" data-path="src/pages/ProductsPage.tsx">
                    <div className="text-center" data-id="1ux58hfg9" data-path="src/pages/ProductsPage.tsx">
                      <div className="w-24 h-24 mx-auto bg-[#ffb33a]/10 rounded-full flex items-center justify-center mb-6" data-id="nbmwzhrkg" data-path="src/pages/ProductsPage.tsx">
                        <Users2Icon className="h-12 w-12 text-[#ffb33a]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2" data-id="e3dztoo7f" data-path="src/pages/ProductsPage.tsx">JaluMentoring</h3>
                      <p className="text-gray-600" data-id="nyb153z08" data-path="src/pages/ProductsPage.tsx">
                        Accelerate your growth with personalized mentorship.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* JaluRequest Tab */}
              <TabsContent value="jalurequest">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-id="x3zb6iwni" data-path="src/pages/ProductsPage.tsx">
                  <div data-id="t6c8f7xjl" data-path="src/pages/ProductsPage.tsx">
                    <h2 className="text-3xl font-bold mb-6 text-[#73a151]" data-id="qveisvnb4" data-path="src/pages/ProductsPage.tsx">JaluRequest</h2>
                    <p className="text-gray-700 mb-6" data-id="drxl4sfu2" data-path="src/pages/ProductsPage.tsx">
                      A request feature that connects users with creative professionals for services like graphic design, web development, and hosting.
                    </p>
                    
                    <div className="space-y-4 mb-8" data-id="u30lvv6cj" data-path="src/pages/ProductsPage.tsx">
                      <div className="flex items-start gap-3" data-id="hf857361x" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#73a151] mt-0.5 flex-shrink-0" />
                        <div data-id="9ay4l5cea" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="ypdbsuy8i" data-path="src/pages/ProductsPage.tsx">Open Requests</h3>
                          <p className="text-sm text-gray-600" data-id="q396qvg8a" data-path="src/pages/ProductsPage.tsx">Post public job requests and receive applications from qualified professionals.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" data-id="0gtefvd8w" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#73a151] mt-0.5 flex-shrink-0" />
                        <div data-id="r1hb261jw" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="sr7vf52fs" data-path="src/pages/ProductsPage.tsx">Direct Requests</h3>
                          <p className="text-sm text-gray-600" data-id="3tfvip5o8" data-path="src/pages/ProductsPage.tsx">Browse professional portfolios and send private requests to specific partners.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3" data-id="a1wzxpljo" data-path="src/pages/ProductsPage.tsx">
                        <CheckCircle2Icon className="h-6 w-6 text-[#73a151] mt-0.5 flex-shrink-0" />
                        <div data-id="hj3xjanap" data-path="src/pages/ProductsPage.tsx">
                          <h3 className="font-semibold mb-1" data-id="wnljrrpam" data-path="src/pages/ProductsPage.tsx">Secure Collaboration</h3>
                          <p className="text-sm text-gray-600" data-id="rgofncc70" data-path="src/pages/ProductsPage.tsx">Work with vetted professionals in a secure and transparent environment.</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-[#73a151] hover:bg-[#73a151]/80" asChild>
                      <Link to="/jalurequest">
                        Post a Request <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="bg-[#73a151]/5 p-8 rounded-lg flex justify-center items-center" data-id="8piy3vwtk" data-path="src/pages/ProductsPage.tsx">
                    <div className="text-center" data-id="tldycbosw" data-path="src/pages/ProductsPage.tsx">
                      <div className="w-24 h-24 mx-auto bg-[#73a151]/10 rounded-full flex items-center justify-center mb-6" data-id="v4mhadkpg" data-path="src/pages/ProductsPage.tsx">
                        <FileTextIcon className="h-12 w-12 text-[#73a151]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2" data-id="0b1ora03k" data-path="src/pages/ProductsPage.tsx">JaluRequest</h3>
                      <p className="text-gray-600" data-id="del0wnccd" data-path="src/pages/ProductsPage.tsx">
                        Connect with professionals for your creative projects.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-50" data-id="n8b6l82ew" data-path="src/pages/ProductsPage.tsx">
          <div className="container mx-auto px-4 max-w-4xl text-center" data-id="ncj31by4y" data-path="src/pages/ProductsPage.tsx">
            <h2 className="text-3xl font-bold mb-6" data-id="w6xkfbjcc" data-path="src/pages/ProductsPage.tsx">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-8" data-id="ldxp0atch" data-path="src/pages/ProductsPage.tsx">
              Sign up now to access our full range of services and connect with creative professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4" data-id="y9fsnx70d" data-path="src/pages/ProductsPage.tsx">
              <Button className="bg-[#357e00] hover:bg-[#1f4a00]" size="lg" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
              <Button variant="outline" className="border-[#357e00] text-[#357e00]" size="lg" asChild>
                <Link to="/login">Log In</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBox />
    </div>);

};

export default ProductsPage;