import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Wrench } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.jpeg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-0 rounded-lg">
              {/* <Wrench className="w-6 h-6 text-white" /> */}
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 text-white rounded-md fill"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">
              Repair Zone Service
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <Link
              to="/book-service"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+919876543210"
              className="flex items-center space-x-2 py-2 text-gray-700"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <Link
              to="/book-service"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
