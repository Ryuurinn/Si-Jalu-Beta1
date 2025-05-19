// Color constants for Si Jalu
export const COLORS = {
  primary: '#357e00',
  secondary: '#ffb33a',
  tertiary: '#73a151',
  darkGreen: '#1f4a00',
  white: '#ffffff'
};

// Membership tiers
export const MEMBERSHIP_TIERS = [
{
  name: 'Silver',
  price: 'Free',
  benefits: [
  'Access to basic features',
  'Browse JaluCourse catalog',
  'View mentor profiles'],

  color: COLORS.white,
  textColor: COLORS.darkGreen,
  borderColor: COLORS.tertiary
},
{
  name: 'Gold',
  price: 'Rp 20,000/month',
  benefits: [
  'All Silver benefits',
  'Discounted JaluCourse access',
  'Priority mentoring slots',
  'Post up to 5 requests per month'],

  color: COLORS.secondary,
  textColor: COLORS.darkGreen,
  borderColor: COLORS.secondary
},
{
  name: 'Diamond',
  price: 'Rp 50,000/month',
  benefits: [
  'All Gold benefits',
  'Exclusive JaluCourse access',
  'Premium mentoring slots',
  'Unlimited requests',
  'Priority support'],

  color: COLORS.primary,
  textColor: COLORS.white,
  borderColor: COLORS.primary
}];


// Team members
export const TEAM_MEMBERS = [
{
  name: 'John Doe',
  position: 'CEO',
  contact: 'john@sijalu.com',
  bio: 'Visionary leader with 10+ years in creative industries',
  avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
},
{
  name: 'Jane Smith',
  position: 'CFO',
  contact: 'jane@sijalu.com',
  bio: 'Financial expert specializing in creative economy',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
},
{
  name: 'Michael Chen',
  position: 'CTO',
  contact: 'michael@sijalu.com',
  bio: 'Tech innovator with passion for AI and platform solutions',
  avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop'
},
{
  name: 'Sarah Johnson',
  position: 'COO',
  contact: 'sarah@sijalu.com',
  bio: 'Operations expert focused on creative professional networks',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
},
{
  name: 'David Williams',
  position: 'CMO',
  contact: 'david@sijalu.com',
  bio: 'Marketing strategist specializing in creative industries',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
},
{
  name: 'Olivia Rodriguez',
  position: 'CCO',
  contact: 'olivia@sijalu.com',
  bio: 'Creative professional with extensive industry connections',
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
}];


// FAQ questions for AI Chatbot
export const FAQ_QUESTIONS = [
{
  question: 'What is Si Jalu?',
  answer: 'Si Jalu is a digital platform connecting individuals and small businesses with trusted creative professionals through courses, mentoring, and service requests.'
},
{
  question: 'How do I get started?',
  answer: 'Simply sign up for a free Silver account to start exploring our services. You can upgrade to Gold or Diamond membership anytime.'
},
{
  question: 'What is JaluCourse?',
  answer: 'JaluCourse offers special learning sessions officially hosted by Si Jalu, providing hands-on training and certification on creative topics.'
},
{
  question: 'How does JaluMentoring work?',
  answer: 'JaluMentoring is a consultation-based feature where you can book sessions with experienced creative professionals for guidance, feedback, or skill development.'
},
{
  question: 'What is JaluRequest?',
  answer: 'JaluRequest connects you with creative professionals for services like graphic design, web development, and hosting. You can post open requests or directly contact specific partners.'
},
{
  question: 'What are the membership tiers?',
  answer: 'We offer three tiers: Silver (Free), Gold (Rp 20,000/month), and Diamond (Rp 50,000/month), each with different benefits and access levels.'
}];


// Sample courses
export const SAMPLE_COURSES = [
{
  id: 1,
  title: 'Fundamentals of Graphic Design',
  description: 'Learn the essential principles and tools of graphic design from industry experts.',
  date: '2023-08-15',
  price: 'Rp 250,000',
  certification: 'Si Jalu Certified Graphic Designer Level 1',
  instructor: 'Olivia Rodriguez',
  image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=300&auto=format&fit=crop'
},
{
  id: 2,
  title: 'Web Development Bootcamp',
  description: 'Comprehensive training on modern web development techniques and best practices.',
  date: '2023-09-01',
  price: 'Rp 350,000',
  certification: 'Si Jalu Certified Web Developer',
  instructor: 'Michael Chen',
  image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=300&auto=format&fit=crop'
},
{
  id: 3,
  title: 'Brand Strategy Masterclass',
  description: 'Learn how to build and manage powerful brands that connect with audiences.',
  date: '2023-09-15',
  price: 'Rp 300,000',
  certification: 'Si Jalu Certified Brand Strategist',
  instructor: 'David Williams',
  image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=300&auto=format&fit=crop'
}];


// Sample mentors
export const SAMPLE_MENTORS = [
{
  id: 1,
  name: 'Ahmad Rizki',
  specialty: 'Graphic Design',
  rate: 'Rp 150,000/hour',
  rating: 4.8,
  reviews: 124,
  tags: ['Graphic Design', 'Branding', 'Illustration'],
  bio: 'Experienced graphic designer with expertise in branding and illustration.',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop'
},
{
  id: 2,
  name: 'Siti Nurhayati',
  specialty: 'UI/UX Design',
  rate: 'Rp 200,000/hour',
  rating: 4.9,
  reviews: 98,
  tags: ['UI/UX', 'Web Design', 'App Design'],
  bio: 'UI/UX specialist with a focus on creating intuitive and engaging user experiences.',
  avatar: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=200&auto=format&fit=crop'
},
{
  id: 3,
  name: 'Budi Santoso',
  specialty: 'Web Development',
  rate: 'Rp 175,000/hour',
  rating: 4.7,
  reviews: 112,
  tags: ['Web Development', 'Frontend', 'React'],
  bio: 'Full-stack web developer with a passion for building responsive and accessible websites.',
  avatar: 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=200&auto=format&fit=crop'
},
{
  id: 4,
  name: 'Dewi Anggraini',
  specialty: 'Content Creation',
  rate: 'Rp 125,000/hour',
  rating: 4.6,
  reviews: 86,
  tags: ['Content Writing', 'Copywriting', 'Social Media'],
  bio: 'Content creator specializing in compelling copy that converts and engages.',
  avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop'
}];