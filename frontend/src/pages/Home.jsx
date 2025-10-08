import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  ThumbsUp,
  Star,
  Phone,
  Wrench,
} from "lucide-react";
import SEO from "../components/SEO";
import { services, testimonials, brands } from "../data/mockData";
import * as Icons from "lucide-react";

const Home = () => {
  const featuredServices = services.slice(0, 6);
  const featuredTestimonials = testimonials.filter((t) => t.is_featured);

  return (
    <>
      <SEO
        title="Repair Zone Service Expert in Bhopal - Get Professional Home Services"
        description="Professional home appliance repair services in MP Nagar, Bhopal for AC, refrigerator, washing machine, microwave, and more. Fast, reliable, and affordable repairs at your doorstep."
        keywords="appliance repair Bhopal, AC repair Bhopal, fridge repair Bhopal, washing machine repair Bhopal, home services Bhopal, MP Nagar Bhopal"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Expert Appliance Repair at Your Doorstep
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Fast, reliable, and affordable repair services for all your home
                appliances
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/book-service"
                  className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
                >
                  Book Service Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+919522675728"
                  className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-white"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 95226 75728
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">50K+</div>
                  <div className="text-blue-200 text-sm">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-blue-200 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.8★</div>
                  <div className="text-blue-200 text-sm">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://iticollege.edu/wp-content/uploads/2023/09/HVAC-Technicians.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional Technician"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert repair services for all major home appliances with
              certified technicians
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image_url}
                      alt={service.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white p-3 rounded-lg shadow-lg">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{service.starting_price}+
                      </span>
                      <span className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform inline-flex items-center">
                        View Details
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Simple and hassle-free process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Book Online",
                desc: "Schedule service at your convenience",
              },
              {
                icon: CheckCircle,
                title: "Get Confirmed",
                desc: "Receive instant booking confirmation",
              },
              {
                icon: Wrench,
                title: "Expert Arrives",
                desc: "Certified technician visits your home",
              },
              {
                icon: ThumbsUp,
                title: "Job Done",
                desc: "Quality repair with warranty",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted appliance repair partner
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Warranty Protected",
                desc: "Up to 90 days warranty on all repairs",
              },
              {
                icon: Star,
                title: "Certified Experts",
                desc: "Highly trained and experienced technicians",
              },
              {
                icon: Clock,
                title: "Same Day Service",
                desc: "Fast response and quick repairs",
              },
              {
                icon: ThumbsUp,
                title: "Affordable Pricing",
                desc: "Transparent pricing with no hidden costs",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brands We Service
            </h2>
            <p className="text-lg text-gray-600">
              We repair all major appliance brands
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
              >
                <img src={brand.logo} alt="" className="h-6" />
                {/* <span className="text-xl font-bold text-gray-700">
                  {brand.name}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.customer_image}
                    alt={testimonial.customer_name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.customer_name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-3">{testimonial.review_text}</p>
                <p className="text-sm text-blue-600 font-medium">
                  {testimonial.service_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Appliance Repair?
          </h2>
          <p className="text-xl mb-8">
            Book your service now and get same-day expert assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-service"
              className="inline-flex items-center justify-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Book Service Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+919522675728"
              className="inline-flex items-center justify-center bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all border-2 border-white"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
