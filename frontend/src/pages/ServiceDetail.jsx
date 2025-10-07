import { useParams, Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Shield,
  Clock,
  Star,
} from "lucide-react";
import SEO from "../components/SEO";
import { services } from "../data/mockData";
import * as Icons from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <Link to="/services" className="text-blue-600 hover:underline">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon];

  return (
    <>
      <SEO
        title={service.name}
        description={service.detailed_description}
        keywords={`${service.name}, appliance repair, home service`}
        image={service.image_url}
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white p-3 rounded-lg">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  {service.name}
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                {service.detailed_description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">
                    ₹{service.starting_price}+
                  </div>
                  <div className="text-sm text-blue-200">Starting Price</div>
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">90 Days</div>
                  <div className="text-sm text-blue-200">Warranty</div>
                </div>
                <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">4.8★</div>
                  <div className="text-sm text-blue-200">Rating</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={service.image_url}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Service Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Process
                </h2>
                <div className="space-y-6">
                  {service.process_steps.map((step) => (
                    <div key={step.step} className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-600 font-bold">
                          {step.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {service.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Book This Service
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span>Warranty Protected</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Same Day Service</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Star className="w-5 h-5 text-blue-600" />
                    <span>Certified Technicians</span>
                  </div>
                </div>
                <Link
                  to="/book-service"
                  state={{ serviceId: service.id, serviceName: service.name }}
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg mb-3"
                >
                  Book Service Now
                </Link>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center w-full bg-gray-100 text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 98765 43210
                </a>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Need help?</span> Our
                    customer support team is available 24/7 to assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Services You May Need
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services
              .filter((s) => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => {
                const RelatedIcon = Icons[relatedService.icon];
                return (
                  <Link
                    key={relatedService.id}
                    to={`/services/${relatedService.slug}`}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        {RelatedIcon && (
                          <RelatedIcon className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {relatedService.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {relatedService.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-blue-600">
                        ₹{relatedService.starting_price}+
                      </span>
                      <span className="text-blue-600 font-medium inline-flex items-center">
                        View
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
