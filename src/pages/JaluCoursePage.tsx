import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/courses/CourseCard";
import { SAMPLE_COURSES } from "@/lib/constants";
import { SearchIcon } from "lucide-react";

const JaluCoursePage = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(SAMPLE_COURSES);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Filter courses based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCourses(SAMPLE_COURSES);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = SAMPLE_COURSES.filter(
      (course) =>
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.instructor.toLowerCase().includes(query)
    );

    setFilteredCourses(filtered);
  }, [searchQuery]);

  if (!isAuthenticated) {
    return null; // Redirect will happen in the effect
  }

  return (
    <div className="min-h-screen flex flex-col" data-id="u89nm3b65" data-path="src/pages/JaluCoursePage.tsx">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50" data-id="lhzd3l6uw" data-path="src/pages/JaluCoursePage.tsx">
        <div className="container mx-auto px-4" data-id="v9k8z984c" data-path="src/pages/JaluCoursePage.tsx">
          <div className="mb-8" data-id="9bup4njbn" data-path="src/pages/JaluCoursePage.tsx">
            <h1 className="text-3xl font-bold mb-2" data-id="kw30cju13" data-path="src/pages/JaluCoursePage.tsx">JaluCourse</h1>
            <p className="text-gray-600" data-id="xabj9iyk5" data-path="src/pages/JaluCoursePage.tsx">
              Discover and enroll in official learning sessions hosted by Si Jalu
            </p>
          </div>
          
          {/* Search and Filter Section */}
          <div className="mb-8" data-id="zajsatl3q" data-path="src/pages/JaluCoursePage.tsx">
            <div className="flex flex-col md:flex-row gap-4" data-id="9zpi9cige" data-path="src/pages/JaluCoursePage.tsx">
              <div className="relative flex-grow" data-id="rd4zswn7y" data-path="src/pages/JaluCoursePage.tsx">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} />

              </div>
              <div className="flex gap-2" data-id="eyns1zb0c" data-path="src/pages/JaluCoursePage.tsx">
                <Button variant="outline" className="whitespace-nowrap">
                  Filter
                </Button>
                <Button variant="outline" className="whitespace-nowrap" onClick={() => setSearchQuery("")}>
                  Clear
                </Button>
              </div>
            </div>
          </div>
          
          {/* Featured Course */}
          <div className="mb-12" data-id="ln2o8edwg" data-path="src/pages/JaluCoursePage.tsx">
            <div className="bg-gradient-to-r from-[#357e00] to-[#73a151] rounded-lg overflow-hidden" data-id="l690ok4z4" data-path="src/pages/JaluCoursePage.tsx">
              <div className="md:flex" data-id="mzl3fuoy4" data-path="src/pages/JaluCoursePage.tsx">
                <div className="md:w-1/2 p-8 md:p-12 text-white" data-id="6dx4wewvc" data-path="src/pages/JaluCoursePage.tsx">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4" data-id="r5u06sqoy" data-path="src/pages/JaluCoursePage.tsx">Web Development Bootcamp</h2>
                  <p className="mb-6" data-id="lmxcgxsok" data-path="src/pages/JaluCoursePage.tsx">
                    Comprehensive training on modern web development techniques and best practices. Learn from industry experts and gain hands-on experience building real-world projects.
                  </p>
                  <div className="space-y-3" data-id="g3yt6qt6c" data-path="src/pages/JaluCoursePage.tsx">
                    <div className="flex items-center" data-id="9nr4gi76h" data-path="src/pages/JaluCoursePage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="4be5z3b83" data-path="src/pages/JaluCoursePage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-id="qd1aepptw" data-path="src/pages/JaluCoursePage.tsx" />
                      </svg>
                      <span data-id="x9gpfa531" data-path="src/pages/JaluCoursePage.tsx">September 1, 2023</span>
                    </div>
                    <div className="flex items-center" data-id="ek04dzij6" data-path="src/pages/JaluCoursePage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="d4pt5g21s" data-path="src/pages/JaluCoursePage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-id="un44fiu16" data-path="src/pages/JaluCoursePage.tsx" />
                      </svg>
                      <span data-id="c5xa39j9f" data-path="src/pages/JaluCoursePage.tsx">8 weeks, 3 sessions per week</span>
                    </div>
                    <div className="flex items-center" data-id="4j25vwyqt" data-path="src/pages/JaluCoursePage.tsx">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-id="j3b41p8pb" data-path="src/pages/JaluCoursePage.tsx">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" data-id="phjjta78c" data-path="src/pages/JaluCoursePage.tsx" />
                      </svg>
                      <span data-id="rw0xejrnt" data-path="src/pages/JaluCoursePage.tsx">Si Jalu Certified Web Developer</span>
                    </div>
                  </div>
                  <Button className="mt-8 bg-white text-[#357e00] hover:bg-gray-100">
                    Enroll Now - Rp 350,000
                  </Button>
                </div>
                <div className="md:w-1/2 bg-white flex items-center justify-center p-8" data-id="o5mqc15kz" data-path="src/pages/JaluCoursePage.tsx">
                  <img
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=500&auto=format&fit=crop"
                    alt="Web Development Bootcamp"
                    className="rounded-lg shadow-lg max-h-64 object-cover" data-id="kvhr2nyzu" data-path="src/pages/JaluCoursePage.tsx" />

                </div>
              </div>
            </div>
          </div>
          
          {/* Courses Grid */}
          <div data-id="yt17judcv" data-path="src/pages/JaluCoursePage.tsx">
            <h2 className="text-2xl font-bold mb-6" data-id="kom9tgra3" data-path="src/pages/JaluCoursePage.tsx">Available Courses</h2>
            
            {filteredCourses.length > 0 ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-id="a0a7nxlx6" data-path="src/pages/JaluCoursePage.tsx">
                {filteredCourses.map((course) =>
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                date={course.date}
                price={course.price}
                certification={course.certification}
                instructor={course.instructor}
                image={course.image} />

              )}
              </div> :

            <div className="text-center py-12" data-id="p4ir8shjj" data-path="src/pages/JaluCoursePage.tsx">
                <h3 className="text-lg font-medium text-gray-700 mb-2" data-id="8fdh7n1tv" data-path="src/pages/JaluCoursePage.tsx">No courses found</h3>
                <p className="text-gray-500" data-id="ophcm0gja" data-path="src/pages/JaluCoursePage.tsx">
                  We couldn't find any courses matching your search. Try different keywords or clear your search.
                </p>
              </div>
            }
          </div>
        </div>
      </main>
      
      <Footer />
    </div>);

};

export default JaluCoursePage;