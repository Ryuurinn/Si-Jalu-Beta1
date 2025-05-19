import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBox from "@/components/home/ChatBox";
import TeamMember from "@/components/home/TeamMember";
import { TEAM_MEMBERS } from "@/lib/constants";

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col" data-id="ikgri39w2" data-path="src/pages/TeamPage.tsx">
      <Navbar />
      
      <main className="flex-grow" data-id="pbyhsd5j8" data-path="src/pages/TeamPage.tsx">
        {/* Hero Section */}
        <section className="bg-[#357e00] text-white py-20" data-id="uapip8cbi" data-path="src/pages/TeamPage.tsx">
          <div className="container mx-auto px-4 text-center" data-id="5dqp1uqlj" data-path="src/pages/TeamPage.tsx">
            <h1 className="text-4xl font-bold mb-6" data-id="2bir9ecjp" data-path="src/pages/TeamPage.tsx">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto" data-id="7g7uv49de" data-path="src/pages/TeamPage.tsx">
              Meet the passionate professionals behind Si Jalu who are dedicated to connecting creative talents with those who need them.
            </p>
          </div>
        </section>
        
        {/* Team Members Section */}
        <section className="py-16" data-id="00d85yo5q" data-path="src/pages/TeamPage.tsx">
          <div className="container mx-auto px-4" data-id="npao7jyja" data-path="src/pages/TeamPage.tsx">
            <div className="text-center mb-12" data-id="brn21kfho" data-path="src/pages/TeamPage.tsx">
              <h2 className="text-3xl font-bold mb-4" data-id="dihwnc9qb" data-path="src/pages/TeamPage.tsx">Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto" data-id="yo7dov962" data-path="src/pages/TeamPage.tsx">
                Our leadership team brings together diverse expertise in technology, creative industries, and business development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" data-id="vwj1bt3n8" data-path="src/pages/TeamPage.tsx">
              {TEAM_MEMBERS.map((member) =>
              <TeamMember
                key={member.name}
                name={member.name}
                position={member.position}
                contact={member.contact}
                bio={member.bio}
                avatar={member.avatar} />

              )}
            </div>
          </div>
        </section>
        
        {/* Company Culture */}
        <section className="py-16 bg-gray-50" data-id="5g0jk6jhw" data-path="src/pages/TeamPage.tsx">
          <div className="container mx-auto px-4 max-w-4xl" data-id="bn2s3etnc" data-path="src/pages/TeamPage.tsx">
            <div className="text-center mb-12" data-id="ahym4jivr" data-path="src/pages/TeamPage.tsx">
              <h2 className="text-3xl font-bold mb-4" data-id="ujnjy38a6" data-path="src/pages/TeamPage.tsx">Our Culture</h2>
              <p className="text-gray-600" data-id="wy3ogcyw3" data-path="src/pages/TeamPage.tsx">
                At Si Jalu, we foster a culture of creativity, collaboration, and continuous learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12" data-id="t51v84w46" data-path="src/pages/TeamPage.tsx">
              <div className="bg-white p-8 rounded-lg shadow-sm" data-id="pc679f4iw" data-path="src/pages/TeamPage.tsx">
                <h3 className="text-xl font-bold mb-4 text-[#357e00]" data-id="o1tlrcij5" data-path="src/pages/TeamPage.tsx">What We Value</h3>
                <ul className="space-y-3" data-id="5nx6irsm2" data-path="src/pages/TeamPage.tsx">
                  <li className="flex items-start gap-3" data-id="q83xh4r3k" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#357e00] flex-shrink-0" data-id="n65rcwdxv" data-path="src/pages/TeamPage.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-id="tp2cudrn5" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <div data-id="6yf8i7o2k" data-path="src/pages/TeamPage.tsx">
                      <p className="font-medium" data-id="5x3huh5n5" data-path="src/pages/TeamPage.tsx">Innovation</p>
                      <p className="text-sm text-gray-600" data-id="tbz03que5" data-path="src/pages/TeamPage.tsx">We embrace new ideas and approaches to solving problems.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-id="n7dikebzf" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#357e00] flex-shrink-0" data-id="e9nkfq2z1" data-path="src/pages/TeamPage.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-id="6qwlg5t9i" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <div data-id="cfgohg41p" data-path="src/pages/TeamPage.tsx">
                      <p className="font-medium" data-id="03u4p9l0t" data-path="src/pages/TeamPage.tsx">Inclusivity</p>
                      <p className="text-sm text-gray-600" data-id="5zrn2ztfr" data-path="src/pages/TeamPage.tsx">We believe in creating an environment where everyone feels welcome and valued.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-id="wu9cp1mwb" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#357e00] flex-shrink-0" data-id="r5ed3d3u1" data-path="src/pages/TeamPage.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-id="9j396sst8" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <div data-id="fdbm709yn" data-path="src/pages/TeamPage.tsx">
                      <p className="font-medium" data-id="qkw0tswp4" data-path="src/pages/TeamPage.tsx">Excellence</p>
                      <p className="text-sm text-gray-600" data-id="eqthggurl" data-path="src/pages/TeamPage.tsx">We strive for excellence in everything we do, from user experience to partner support.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm" data-id="kztqgnpso" data-path="src/pages/TeamPage.tsx">
                <h3 className="text-xl font-bold mb-4 text-[#357e00]" data-id="wwc1lagbd" data-path="src/pages/TeamPage.tsx">How We Work</h3>
                <ul className="space-y-3" data-id="8rdc1dhgv" data-path="src/pages/TeamPage.tsx">
                  <li className="flex items-start gap-3" data-id="rgy8slk6o" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#357e00] flex-shrink-0" data-id="s7sm9aqei" data-path="src/pages/TeamPage.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-id="by4hll8lb" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <div data-id="ad9n6loha" data-path="src/pages/TeamPage.tsx">
                      <p className="font-medium" data-id="5ecuccity" data-path="src/pages/TeamPage.tsx">Collaborative</p>
                      <p className="text-sm text-gray-600" data-id="5t576119d" data-path="src/pages/TeamPage.tsx">We believe in the power of teamwork and cross-functional collaboration.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-id="hnethli9z" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#357e00] flex-shrink-0" data-id="005khq4bd" data-path="src/pages/TeamPage.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-id="cyazfr8ky" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <div data-id="6sciuryf8" data-path="src/pages/TeamPage.tsx">
                      <p className="font-medium" data-id="qnndb68cp" data-path="src/pages/TeamPage.tsx">User-Focused</p>
                      <p className="text-sm text-gray-600" data-id="wql49361d" data-path="src/pages/TeamPage.tsx">We put our users—both clients and creative professionals—at the center of everything we do.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3" data-id="m17a051d7" data-path="src/pages/TeamPage.tsx">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#357e00] flex-shrink-0" data-id="lgfshavqj" data-path="src/pages/TeamPage.tsx">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" data-id="yvj28na5f" data-path="src/pages/TeamPage.tsx" />
                    </svg>
                    <div data-id="pc09o8p7g" data-path="src/pages/TeamPage.tsx">
                      <p className="font-medium" data-id="ev08nw9p4" data-path="src/pages/TeamPage.tsx">Agile</p>
                      <p className="text-sm text-gray-600" data-id="kag7gczt1" data-path="src/pages/TeamPage.tsx">We embrace change and adapt quickly to better serve our community.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Our Team */}
        <section className="py-16" data-id="du8jwn0ev" data-path="src/pages/TeamPage.tsx">
          <div className="container mx-auto px-4 text-center max-w-3xl" data-id="co96ga63g" data-path="src/pages/TeamPage.tsx">
            <h2 className="text-3xl font-bold mb-4" data-id="t4x4mo259" data-path="src/pages/TeamPage.tsx">Join Our Team</h2>
            <p className="text-gray-600 mb-8" data-id="1jd89942f" data-path="src/pages/TeamPage.tsx">
              We're always looking for talented individuals who are passionate about connecting creative professionals with those who need their services.
            </p>
            <div className="bg-[#357e00]/10 p-8 rounded-lg" data-id="kjb0bzgwi" data-path="src/pages/TeamPage.tsx">
              <h3 className="text-xl font-semibold mb-4 text-[#357e00]" data-id="2xmhwk8uj" data-path="src/pages/TeamPage.tsx">Current Openings</h3>
              <p className="text-gray-700 mb-6" data-id="e9lewwkd6" data-path="src/pages/TeamPage.tsx">
                We currently don't have any open positions, but we're always interested in meeting talented people. Send your resume to <span className="text-[#357e00] font-medium" data-id="6nuf28o98" data-path="src/pages/TeamPage.tsx">careers@sijalu.com</span> and we'll keep you in mind for future opportunities.
              </p>
              <p className="text-sm text-gray-600" data-id="yq34fnp9n" data-path="src/pages/TeamPage.tsx">
                Si Jalu is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBox />
    </div>);

};

export default TeamPage;