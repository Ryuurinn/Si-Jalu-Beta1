import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = isAuthenticated ?
  [
  { title: 'Dashboard', href: '/dashboard' },
  { title: 'JaluCourse', href: '/jalucourse' },
  { title: 'JaluMentoring', href: '/jalumentoring' },
  { title: 'JaluRequest', href: '/jalurequest' },
  { title: 'Profile', href: '/profile' }] :

  [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Products', href: '/products' },
  { title: 'Our Team', href: '/team' }];


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white" data-id="k9r7wlxbb" data-path="src/components/layout/Navbar.tsx">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-id="cpe5tcx21" data-path="src/components/layout/Navbar.tsx">
        <div className="flex h-16 items-center justify-between" data-id="lbhmqgha2" data-path="src/components/layout/Navbar.tsx">
          {/* Logo */}
          <div className="flex items-center" data-id="g7l16uwti" data-path="src/components/layout/Navbar.tsx">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-[#357e00]" data-id="x3rz9luri" data-path="src/components/layout/Navbar.tsx">Si Jalu</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1" data-id="fl4vtjuxa" data-path="src/components/layout/Navbar.tsx">
            {navLinks.map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
              location.pathname === link.href ?
              'text-white bg-[#357e00]' :
              'text-gray-700 hover:bg-[#73a151]/20'}`
              }>

                {link.title}
              </Link>
            )}

            {isAuthenticated ?
            <Button
              variant="ghost"
              onClick={logout}
              className="ml-2 text-red-600 hover:text-red-800 hover:bg-red-100">

                Log Out
              </Button> :

            <div className="flex items-center space-x-2 ml-2" data-id="eph9jgn83" data-path="src/components/layout/Navbar.tsx">
                <Link to="/login">
                  <Button variant="outline" className="border-[#357e00] text-[#357e00] hover:bg-[#357e00]/10">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-[#357e00] text-white hover:bg-[#1f4a00]">
                    Sign Up
                  </Button>
                </Link>
              </div>
            }
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center" data-id="prkj706vn" data-path="src/components/layout/Navbar.tsx">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-[#73a151]/20 focus:outline-none"
              aria-expanded="false" data-id="zgu77wgl2" data-path="src/components/layout/Navbar.tsx">

              <span className="sr-only" data-id="1jibe1uf6" data-path="src/components/layout/Navbar.tsx">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true" data-id="33f3fuqhs" data-path="src/components/layout/Navbar.tsx">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" data-id="ta20pbzlm" data-path="src/components/layout/Navbar.tsx" />

              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true" data-id="l9ve5s3sk" data-path="src/components/layout/Navbar.tsx">

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" data-id="1t86eiwnb" data-path="src/components/layout/Navbar.tsx" />

              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`} data-id="izm0od9qy" data-path="src/components/layout/Navbar.tsx">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg" data-id="h6ntpd0uh" data-path="src/components/layout/Navbar.tsx">
          {navLinks.map((link) =>
          <Link
            key={link.href}
            to={link.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
            location.pathname === link.href ?
            'text-white bg-[#357e00]' :
            'text-gray-700 hover:bg-[#73a151]/20'}`
            }
            onClick={() => setMobileMenuOpen(false)}>

              {link.title}
            </Link>
          )}

          {isAuthenticated ?
          <button
            onClick={() => {
              logout();
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-100" data-id="f9g421t9j" data-path="src/components/layout/Navbar.tsx">

              Log Out
            </button> :

          <div className="space-y-2 pt-2" data-id="j5v0bb3v0" data-path="src/components/layout/Navbar.tsx">
              <Link
              to="/login"
              className="block w-full"
              onClick={() => setMobileMenuOpen(false)}>

                <Button
                variant="outline"
                className="w-full border-[#357e00] text-[#357e00] hover:bg-[#357e00]/10">

                  Log In
                </Button>
              </Link>
              <Link
              to="/signup"
              className="block w-full"
              onClick={() => setMobileMenuOpen(false)}>

                <Button
                className="w-full bg-[#357e00] text-white hover:bg-[#1f4a00]">

                  Sign Up
                </Button>
              </Link>
            </div>
          }
        </div>
      </div>
    </header>);

};

export default Navbar;