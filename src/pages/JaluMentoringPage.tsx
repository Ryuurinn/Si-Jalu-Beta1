import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MentorCard from "@/components/mentoring/MentorCard";
import { SAMPLE_MENTORS } from "@/lib/constants";
import { SearchIcon, SlidersHorizontalIcon } from "lucide-react";

const JaluMentoringPage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMentors, setFilteredMentors] = useState(SAMPLE_MENTORS);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // All unique tags from mentors
  const allTags = Array.from(
    new Set(SAMPLE_MENTORS.flatMap((mentor) => mentor.tags))
  ).sort();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Filter mentors based on search query and selected tags
  useEffect(() => {
    let filtered = [...SAMPLE_MENTORS];

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (mentor) =>
        mentor.name.toLowerCase().includes(query) ||
        mentor.specialty.toLowerCase().includes(query) ||
        mentor.bio.toLowerCase().includes(query) ||
        mentor.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((mentor) =>
      selectedTags.some((tag) => mentor.tags.includes(tag))
      );
    }

    setFilteredMentors(filtered);
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
    prev.includes(tag) ?
    prev.filter((t) => t !== tag) :
    [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
  };

  if (!isAuthenticated) {
    return null; // Redirect will happen in the effect
  }

  return (
    <div className="min-h-screen flex flex-col" data-id="4zkb0lzjq" data-path="src/pages/JaluMentoringPage.tsx">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50" data-id="msepnfykx" data-path="src/pages/JaluMentoringPage.tsx">
        <div className="container mx-auto px-4" data-id="1jrymzlzq" data-path="src/pages/JaluMentoringPage.tsx">
          <div className="mb-8" data-id="g0yibquem" data-path="src/pages/JaluMentoringPage.tsx">
            <h1 className="text-3xl font-bold mb-2" data-id="q8y47ggrs" data-path="src/pages/JaluMentoringPage.tsx">JaluMentoring</h1>
            <p className="text-gray-600" data-id="cag4v01if" data-path="src/pages/JaluMentoringPage.tsx">
              Connect with experienced creative professionals for guidance and feedback
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="mb-8" data-id="060grvo8x" data-path="src/pages/JaluMentoringPage.tsx">
            <div className="flex flex-col md:flex-row gap-4" data-id="mztefo1ae" data-path="src/pages/JaluMentoringPage.tsx">
              <div className="relative flex-grow" data-id="z0csrnat6" data-path="src/pages/JaluMentoringPage.tsx">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search mentors..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} />

              </div>
              <Button
                variant="outline"
                className="whitespace-nowrap"
                onClick={clearFilters}>

                Clear Filters
              </Button>
            </div>
            
            {/* Tags filter */}
            <div className="mt-4" data-id="djlizcolx" data-path="src/pages/JaluMentoringPage.tsx">
              <div className="flex items-center gap-2 mb-2" data-id="lygnufrrv" data-path="src/pages/JaluMentoringPage.tsx">
                <SlidersHorizontalIcon className="h-4 w-4 text-gray-500" />
                <h3 className="text-sm font-medium" data-id="cfzid1wkc" data-path="src/pages/JaluMentoringPage.tsx">Filter by expertise:</h3>
              </div>
              <div className="flex flex-wrap gap-2" data-id="e3f68k1iu" data-path="src/pages/JaluMentoringPage.tsx">
                {allTags.map((tag) =>
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                  selectedTags.includes(tag) ?
                  "bg-[#357e00] hover:bg-[#1f4a00]" :
                  "hover:bg-[#357e00]/10 text-gray-700"}`
                  }
                  onClick={() => toggleTag(tag)}>

                    {tag}
                  </Badge>
                )}
              </div>
            </div>
          </div>
          
          {/* Featured Mentor */}
          <div className="mb-12" data-id="62pbawmpd" data-path="src/pages/JaluMentoringPage.tsx">
            <div className="bg-gradient-to-r from-[#ffb33a] to-[#ffb33a]/70 rounded-lg overflow-hidden" data-id="yltoegciw" data-path="src/pages/JaluMentoringPage.tsx">
              <div className="md:flex" data-id="0vsu20br4" data-path="src/pages/JaluMentoringPage.tsx">
                <div className="md:w-1/2 p-8 md:p-12 text-[#1f4a00]" data-id="l7je5zk58" data-path="src/pages/JaluMentoringPage.tsx">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" data-id="j4aqiubhg" data-path="src/pages/JaluMentoringPage.tsx">Need personalized guidance?</h2>
                  <p className="mb-6" data-id="9ser6z1y5" data-path="src/pages/JaluMentoringPage.tsx">
                    Our mentoring sessions connect you directly with industry experts who can provide personalized feedback, answer your questions, and help you develop your skills.
                  </p>
                  <div className="space-y-3" data-id="p2n63v6rh" data-path="src/pages/JaluMentoringPage.tsx">
                    <div className="flex items-center" data-id="yo25ix2x6" data-path="src/pages/JaluMentoringPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="e9s68j2tf" data-path="src/pages/JaluMentoringPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-id="uwbqrwqyx" data-path="src/pages/JaluMentoringPage.tsx" />
                      </svg>
                      <span data-id="h5ho5qtmy" data-path="src/pages/JaluMentoringPage.tsx">Verified professional mentors</span>
                    </div>
                    <div className="flex items-center" data-id="bnr7r9ezs" data-path="src/pages/JaluMentoringPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="nxmfykka2" data-path="src/pages/JaluMentoringPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-id="bqj95y8wu" data-path="src/pages/JaluMentoringPage.tsx" />
                      </svg>
                      <span data-id="b8b1j1ygc" data-path="src/pages/JaluMentoringPage.tsx">Flexible scheduling options</span>
                    </div>
                    <div className="flex items-center" data-id="m5l55nd8u" data-path="src/pages/JaluMentoringPage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="0pg8yypc4" data-path="src/pages/JaluMentoringPage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" data-id="f4yze2awc" data-path="src/pages/JaluMentoringPage.tsx" />
                      </svg>
                      <span data-id="djcbz2fw4" data-path="src/pages/JaluMentoringPage.tsx">Online or in-person sessions</span>
                    </div>
                  </div>
                  <Button className="mt-8 bg-[#1f4a00] text-white hover:bg-[#1f4a00]/80">
                    Explore Mentors
                  </Button>
                </div>
                <div className="md:w-1/2 bg-white flex items-center justify-center p-8" data-id="e6e5qraue" data-path="src/pages/JaluMentoringPage.tsx">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=500&auto=format&fit=crop"
                    alt="Mentoring Session"
                    className="rounded-lg shadow-lg max-h-64 object-cover" data-id="m5echzk6i" data-path="src/pages/JaluMentoringPage.tsx" />

                </div>
              </div>
            </div>
          </div>
          
          {/* Mentors Grid */}
          <div data-id="z8kvisqr5" data-path="src/pages/JaluMentoringPage.tsx">
            <h2 className="text-2xl font-bold mb-6" data-id="nkq9upras" data-path="src/pages/JaluMentoringPage.tsx">Available Mentors</h2>
            
            {filteredMentors.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="462t0kui5" data-path="src/pages/JaluMentoringPage.tsx">
                {filteredMentors.map((mentor) =>
              <MentorCard
                key={mentor.id}
                id={mentor.id}
                name={mentor.name}
                specialty={mentor.specialty}
                rate={mentor.rate}
                rating={mentor.rating}
                reviews={mentor.reviews}
                tags={mentor.tags}
                bio={mentor.bio}
                avatar={mentor.avatar} />

              )}
              </div> :

            <div className="text-center py-12" data-id="eup65et18" data-path="src/pages/JaluMentoringPage.tsx">
                <h3 className="text-lg font-medium text-gray-700 mb-2" data-id="df19hzyvj" data-path="src/pages/JaluMentoringPage.tsx">No mentors found</h3>
                <p className="text-gray-500" data-id="9gwo07pf7" data-path="src/pages/JaluMentoringPage.tsx">
                  We couldn't find any mentors matching your criteria. Try adjusting your filters or search query.
                </p>
                <Button
                variant="outline"
                className="mt-4"
                onClick={clearFilters}>

                  Clear All Filters
                </Button>
              </div>
            }
          </div>
        </div>
      </main>
      
      <Footer />
    </div>);

};

export default JaluMentoringPage;