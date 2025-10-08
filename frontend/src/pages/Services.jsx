import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { services } from "../data/mockData";
import * as Icons from "lucide-react";

const Services = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Repair Zone Service Expert - Appliance Repair Services in MP Nagar, Bhopal"
        description="Comprehensive home appliance repair services in MP Nagar, Bhopal including AC, refrigerator, washing machine, microwave, TV, geyser, RO, and chimney repairs. Expert technicians at your service."
        keywords="appliance repair MP Nagar, AC repair Bhopal, refrigerator repair Bhopal, washing machine repair Bhopal, microwave repair, TV repair, geyser repair, RO service, chimney service"
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional repair services for all your home appliances with
            certified technicians and warranty protection
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image_url}
                      alt={service.name}
                      className="w-full h-full object-cover object-top  group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="bg-white p-3 rounded-lg shadow-lg">
                          {IconComponent && (
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                          ₹{service.starting_price}+
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start text-sm text-gray-700"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                        View Details
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                      <button
                        onClick={() => navigate("/book-service")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team can help diagnose your appliance issue and recommend
            the right service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+919522675728"
              className="inline-flex items-center justify-center bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
            >
              Call: +91 9522675728
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
