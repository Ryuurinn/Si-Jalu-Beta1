import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MembershipCard from "@/components/home/MembershipCard";
import ChatBox from "@/components/home/ChatBox";
import { Link } from "react-router-dom";
import { MEMBERSHIP_TIERS } from "@/lib/constants";
import { GraduationCapIcon, Users2Icon, FileTextIcon } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col" data-id="c5zepffhv" data-path="src/pages/HomePage.tsx">
      <Navbar />
      
      <main className="flex-grow" data-id="9jjl9mm2s" data-path="src/pages/HomePage.tsx">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#357e00] to-[#73a151] text-white py-20 md:py-32" data-id="69pwl3aoo" data-path="src/pages/HomePage.tsx">
          <div className="container mx-auto px-4 flex flex-col items-center text-center" data-id="y9m4qd2j3" data-path="src/pages/HomePage.tsx">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-id="czkbr6nb8" data-path="src/pages/HomePage.tsx">
              Connect with Creative Professionals
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl" data-id="vuxf5p51f" data-path="src/pages/HomePage.tsx">
              Si Jalu brings together individuals and small businesses with trusted creative experts. Learn, consult, and create with our community of professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" data-id="c2xuqy1zx" data-path="src/pages/HomePage.tsx">
              <Button size="lg" className="bg-white text-[#357e00] hover:bg-gray-100" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} data-id="xtai7eehc" data-path="src/pages/HomePage.tsx"></div>
        </section>
        
        {/* Membership Section */}
        <section className="py-20 bg-gray-50" data-id="l0lulbbo2" data-path="src/pages/HomePage.tsx">
          <div className="container mx-auto px-4" data-id="umdc43c1a" data-path="src/pages/HomePage.tsx">
            <div className="text-center mb-12" data-id="y9ci61zdo" data-path="src/pages/HomePage.tsx">
              <h2 className="text-3xl font-bold mb-4" data-id="7wvw8n51j" data-path="src/pages/HomePage.tsx">Choose Your Membership</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="hnx634dk3" data-path="src/pages/HomePage.tsx">
                Select the plan that best fits your needs. Upgrade or downgrade anytime.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-id="yvhniwj8p" data-path="src/pages/HomePage.tsx">
              {MEMBERSHIP_TIERS.map((tier, index) =>
              <MembershipCard
                key={tier.name}
                name={tier.name}
                price={tier.price}
                benefits={tier.benefits}
                color={tier.color}
                textColor={tier.textColor}
                borderColor={tier.borderColor}
                popular={index === 1} // Gold tier is marked as popular
              />
              )}
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-20" data-id="7aavcxoj5" data-path="src/pages/HomePage.tsx">
          <div className="container mx-auto px-4" data-id="w4cihorti" data-path="src/pages/HomePage.tsx">
            <div className="text-center mb-12" data-id="hhv6fdulg" data-path="src/pages/HomePage.tsx">
              <h2 className="text-3xl font-bold mb-4" data-id="zk3f12r2q" data-path="src/pages/HomePage.tsx">Our Products</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="3um2qinlj" data-path="src/pages/HomePage.tsx">
                Discover our suite of services designed to connect you with creative professionals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-id="tlceopsqj" data-path="src/pages/HomePage.tsx">
              <ProductCard
                title="JaluCourse"
                description="Special learning sessions officially hosted by Si Jalu, offering hands-on training and certification on creative topics."
                icon={<GraduationCapIcon />}
                link="/jalucourse"
                color="#357e00" />

              
              <ProductCard
                title="JaluMentoring"
                description="A consultation-based feature where users can book sessions with experienced creative professionals for guidance, feedback, or skill development."
                icon={<Users2Icon />}
                link="/jalumentoring"
                color="#ffb33a" />

              
              <ProductCard
                title="JaluRequest"
                description="A request feature that connects users with creative professionals for services like graphic design, web development, and hosting."
                icon={<FileTextIcon />}
                link="/jalurequest"
                color="#73a151" />

            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-[#1f4a00] text-white" data-id="ljnfgbnfl" data-path="src/pages/HomePage.tsx">
          <div className="container mx-auto px-4 text-center" data-id="4wadrnngt" data-path="src/pages/HomePage.tsx">
            <h2 className="text-3xl font-bold mb-4" data-id="qc59qe0og" data-path="src/pages/HomePage.tsx">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" data-id="t7mbg78cq" data-path="src/pages/HomePage.tsx">
              Join Si Jalu today and connect with creative professionals who can help bring your ideas to life.
            </p>
            <Button size="lg" className="bg-[#ffb33a] text-[#1f4a00] hover:bg-[#ffb33a]/90" asChild>
              <Link to="/signup">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBox />
    </div>);

};

export default HomePage;