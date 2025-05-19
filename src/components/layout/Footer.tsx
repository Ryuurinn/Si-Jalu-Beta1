import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1f4a00] text-white" data-id="j06kkeygq" data-path="src/components/layout/Footer.tsx">
      <div className="container mx-auto px-4 py-12" data-id="k2as3uq76" data-path="src/components/layout/Footer.tsx">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-id="nf7dh19me" data-path="src/components/layout/Footer.tsx">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1" data-id="mnbjvut5q" data-path="src/components/layout/Footer.tsx">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white" data-id="w0yoapd1u" data-path="src/components/layout/Footer.tsx">Si Jalu</span>
            </Link>
            <p className="text-sm text-gray-300" data-id="nyx9cbh9l" data-path="src/components/layout/Footer.tsx">
              Connecting individuals and small businesses with trusted creative professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div data-id="48wirsg2n" data-path="src/components/layout/Footer.tsx">
            <h3 className="text-lg font-semibold mb-4 text-[#ffb33a]" data-id="4tmcwjo7q" data-path="src/components/layout/Footer.tsx">Quick Links</h3>
            <ul className="space-y-2" data-id="0wu0ft8z0" data-path="src/components/layout/Footer.tsx">
              <li data-id="c8mqz2lng" data-path="src/components/layout/Footer.tsx">
                <Link to="/" className="text-sm text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li data-id="m9gagu9wp" data-path="src/components/layout/Footer.tsx">
                <Link to="/about" className="text-sm text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li data-id="z21xtfi7z" data-path="src/components/layout/Footer.tsx">
                <Link to="/products" className="text-sm text-gray-300 hover:text-white">
                  Products
                </Link>
              </li>
              <li data-id="ozij7pflm" data-path="src/components/layout/Footer.tsx">
                <Link to="/team" className="text-sm text-gray-300 hover:text-white">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div data-id="bi2ks519y" data-path="src/components/layout/Footer.tsx">
            <h3 className="text-lg font-semibold mb-4 text-[#ffb33a]" data-id="63wjqmuv5" data-path="src/components/layout/Footer.tsx">Our Products</h3>
            <ul className="space-y-2" data-id="59brf36zx" data-path="src/components/layout/Footer.tsx">
              <li data-id="ucdxjk2c9" data-path="src/components/layout/Footer.tsx">
                <Link to="/jalucourse" className="text-sm text-gray-300 hover:text-white">
                  JaluCourse
                </Link>
              </li>
              <li data-id="sbgt8asec" data-path="src/components/layout/Footer.tsx">
                <Link to="/jalumentoring" className="text-sm text-gray-300 hover:text-white">
                  JaluMentoring
                </Link>
              </li>
              <li data-id="fa5rh1xva" data-path="src/components/layout/Footer.tsx">
                <Link to="/jalurequest" className="text-sm text-gray-300 hover:text-white">
                  JaluRequest
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-id="du1ay6sqy" data-path="src/components/layout/Footer.tsx">
            <h3 className="text-lg font-semibold mb-4 text-[#ffb33a]" data-id="8bnb8u7jq" data-path="src/components/layout/Footer.tsx">Contact Us</h3>
            <ul className="space-y-2" data-id="qkam80vyj" data-path="src/components/layout/Footer.tsx">
              <li className="text-sm text-gray-300" data-id="c7pdw54zm" data-path="src/components/layout/Footer.tsx">
                <span className="block" data-id="x6n78wass" data-path="src/components/layout/Footer.tsx">Email: support@sijalu.com</span>
              </li>
              <li className="text-sm text-gray-300" data-id="nd1jeapxa" data-path="src/components/layout/Footer.tsx">
                <span className="block" data-id="f7gl2cqrr" data-path="src/components/layout/Footer.tsx">Phone: +62 812 3456 7890</span>
              </li>
              <li className="text-sm text-gray-300" data-id="9kt54n1a2" data-path="src/components/layout/Footer.tsx">
                <span className="block" data-id="g1gajrvyd" data-path="src/components/layout/Footer.tsx">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" data-id="zxzn0p4tp" data-path="src/components/layout/Footer.tsx">
          <p className="text-sm text-gray-400" data-id="0bgm2de4z" data-path="src/components/layout/Footer.tsx">
            &copy; {new Date().getFullYear()} Si Jalu. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0" data-id="g7umcbnru" data-path="src/components/layout/Footer.tsx">
            <a href="#" className="text-gray-400 hover:text-white" data-id="rpr0dp7ni" data-path="src/components/layout/Footer.tsx">
              <span className="sr-only" data-id="vhjgesebh" data-path="src/components/layout/Footer.tsx">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true" data-id="2cq08yxix" data-path="src/components/layout/Footer.tsx">

                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd" data-id="52tsttm20" data-path="src/components/layout/Footer.tsx" />

              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" data-id="ut3nlbuy9" data-path="src/components/layout/Footer.tsx">
              <span className="sr-only" data-id="vdrb0wn59" data-path="src/components/layout/Footer.tsx">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true" data-id="jzgm5y7js" data-path="src/components/layout/Footer.tsx">

                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd" data-id="614xhplt9" data-path="src/components/layout/Footer.tsx" />

              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" data-id="jllctmekv" data-path="src/components/layout/Footer.tsx">
              <span className="sr-only" data-id="0fbab799t" data-path="src/components/layout/Footer.tsx">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true" data-id="ozifor19o" data-path="src/components/layout/Footer.tsx">

                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" data-id="ds11tp991" data-path="src/components/layout/Footer.tsx" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white" data-id="z6rmpbcb4" data-path="src/components/layout/Footer.tsx">
              <span className="sr-only" data-id="fway4x29g" data-path="src/components/layout/Footer.tsx">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true" data-id="64vy7b2kd" data-path="src/components/layout/Footer.tsx">

                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" data-id="vuudpurib" data-path="src/components/layout/Footer.tsx" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;