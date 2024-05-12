import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-14 bg-primary-green px-4 py-5 flex justify-between items-center z-50`}
    >
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="Your Logo" className="h-6" />
          <h1 className="text-white text-xl font-bold ml-2">Start</h1>
        </div>
      </Link>
      <ul className="hidden md:flex space-x-4 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <IoClose className="text-white text-4xl" />
        ) : (
          <GiHamburgerMenu className="text-white text-3xl" />
        )}
      </button>
      <ul
        className={`md:hidden absolute top-full right-0 bg-primary-green px-4 py-2 transition duration-300 ease-in-out ${
          isMobileMenuOpen ? "block right-aligned" : "hidden"
        }`} // Apply right-aligned class conditionally
      >
        {navLinks.map((link) => (
          <li key={link.path} className="py-2">
            <Link
              to={link.path}
              className="text-white block hover:text-gray-200"
              onClick={toggleMobileMenu}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
