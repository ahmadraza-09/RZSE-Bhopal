import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Wrench,
  MessageSquare,
  Users,
  FileText,
  Settings,
  LogOut,
  Menu,
  X,
  UserStar,
} from "lucide-react";
import { useAdminAuth } from "../contexts/AuthContext";
import { useState } from "react";
import Logo from "../assets/logo.jpeg";

const Sidebar = () => {
  const location = useLocation();
  const { logout, adminUser } = useAdminAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: "/admin", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/admin/bookings", icon: Calendar, label: "Bookings" },
    { path: "/admin/services", icon: Wrench, label: "Services" },
    { path: "/admin/blog", icon: FileText, label: "Blog Posts" },
    { path: "/admin/contact", icon: MessageSquare, label: "Contact" },
    { path: "/admin/customers", icon: Users, label: "Customers" },
    { path: "/admin/testimonials", icon: UserStar, label: "Testimonials" },
    { path: "/admin/settings", icon: Settings, label: "Settings" },
  ];

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      <aside
        className={`fixed left-0 top-0 shadow-lg h-screen w-64 bg-gradient-to-b from-white to-white text-black z-40 transform transition-transform duration-300 ${
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-700">
            <Link to="/admin" className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-0 rounded-lg">
                {/* <Wrench className="w-6 h-6 text-white" /> */}
                <img
                  src={Logo}
                  alt=""
                  className="w-10 h-10 rounded text-white"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">Repair Zone</h1>
                <p className="text-xs text-gray-400">Admin Panel</p>
              </div>
            </Link>
          </div>

          {/* <div className="p-4 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                {adminUser?.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {adminUser?.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {adminUser?.role}
                </p>
              </div>
            </div>
          </div> */}

          <nav className="flex-1 overflow-y-auto p-4 scroll">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-blue-600 text-white"
                        : "text-black hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* <div className="p-4 border-t border-gray-700">
            <button
              onClick={logout}
              className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-gray-300 bg-red-600 cursor-pointer text-white transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div> */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
