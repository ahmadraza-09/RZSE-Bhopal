import { CheckCircle, Award, Users, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { teamMembers, testimonials } from "../data/mockData";

const About = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about HomeFixPro - your trusted partner for home appliance repairs with 15+ years of experience, certified technicians, and 50,000+ satisfied customers."
        keywords="about us, appliance repair company, certified technicians, home services"
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Repair Zone Services
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted partner for professional home appliance repair services
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2008, HomeFixPro started with a simple mission: to
                provide reliable, professional, and affordable appliance repair
                services to homeowners across India. What began as a small team
                of dedicated technicians has grown into one of the most trusted
                names in home appliance repair.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With over 15 years of experience and 50,000+ satisfied
                customers, we've built our reputation on quality workmanship,
                transparent pricing, and exceptional customer service. Our
                certified technicians undergo rigorous training and stay updated
                with the latest repair techniques and technologies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we service all major appliance brands and offer
                warranty-protected repairs, ensuring peace of mind for every
                customer. Our commitment to excellence and customer satisfaction
                remains at the heart of everything we do.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://techsquadteam.com/assets/profile/blogimages/b8c7da5cb0ab0ab4e62069608ff8f63f.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Technician at work"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://res.cloudinary.com/liaison-inc/image/upload/c_fit,f_auto,q_auto,w_1200/services/homeguide/backgrounds/refrigerator-repair-or-maintenance.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional service"
                className="rounded-xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide fast, reliable, and affordable appliance repair services that exceed customer expectations.",
              },
              {
                icon: Award,
                title: "Quality Service",
                desc: "We maintain the highest standards of workmanship with certified technicians and genuine parts.",
              },
              {
                icon: Users,
                title: "Customer First",
                desc: "Customer satisfaction is our top priority. We listen, understand, and deliver solutions.",
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                desc: "Transparent pricing, honest assessments, and ethical business practices in everything we do.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Milestones that shaped our success
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2008",
                  title: "Company Founded",
                  desc: "Started with 3 technicians and a passion for service",
                },
                {
                  year: "2012",
                  title: "10,000 Customers",
                  desc: "Reached our first major milestone of satisfied customers",
                },
                {
                  year: "2016",
                  title: "Expansion",
                  desc: "Expanded services to 15 major cities across India",
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  desc: "Launched online booking and customer portal",
                },
                {
                  year: "2023",
                  title: "50,000+ Customers",
                  desc: "Proud to serve over 50,000 happy customers",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-24 text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    {index !== 4 && (
                      <div className="absolute left-1.5 top-6 w-1 h-full bg-blue-200"></div>
                    )}
                    <div className="pl-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Expert Technicians
            </h2>
            <p className="text-lg text-gray-600">
              Certified professionals dedicated to your satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.specialization}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">
                      {member.experience} exp.
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{member.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from real customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-xl shadow-lg"
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

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Quality Service?
          </h2>
          <p className="text-xl mb-8">
            Join 50,000+ satisfied customers who trust HomeFixPro
          </p>
          <Link
            to="/book-service"
            className="inline-flex items-center bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
          >
            Book Your Service Today
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
