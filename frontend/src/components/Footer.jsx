import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Wrench,
} from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo.jpeg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-0 rounded-lg">
                {/* <Wrench className="w-6 h-6 text-white" /> */}
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-8 h-8 text-white rounded-md"
                />
              </div>
              <span className="text-xl font-bold text-white">
                Repair Zone Service
              </span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for all home appliance repair services.
              Professional, reliable, and affordable.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/ac-repair"
                  className="hover:text-blue-400 transition-colors"
                >
                  AC Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services/fridge-repair"
                  className="hover:text-blue-400 transition-colors"
                >
                  Refrigerator Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services/washing-machine-repair"
                  className="hover:text-blue-400 transition-colors"
                >
                  Washing Machine
                </Link>
              </li>
              <li>
                <Link
                  to="/services/microwave-repair"
                  className="hover:text-blue-400 transition-colors"
                >
                  Microwave Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tv-repair"
                  className="hover:text-blue-400 transition-colors"
                >
                  TV Repair
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  123 Service Street, Tech City, IN 400001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm hover:text-blue-400"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@homefixpro.com"
                  className="text-sm hover:text-blue-400"
                >
                  info@homefixpro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8 items-center justify-center flex flex-col">
          <h3 className="text-white font-semibold text-lg mb-4">
            Subscribe to Our Newsletter
          </h3>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-green-400 text-sm mt-2">
              Thank you for subscribing!
            </p>
          )}
        </div>

        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Repair Zone Service. All rights
            reserved. |
            <Link to="/privacy" className="hover:text-blue-400 ml-2">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms" className="hover:text-blue-400 ml-2">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
