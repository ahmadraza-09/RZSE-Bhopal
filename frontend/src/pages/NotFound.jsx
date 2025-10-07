import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:py-14">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <div className="inline-block">
              <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                404
              </h1>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have taken a repair break.
            Let's get you back on track!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
