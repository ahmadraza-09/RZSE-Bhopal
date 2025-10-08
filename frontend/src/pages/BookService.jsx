import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import SEO from "../components/SEO";
import { services } from "../data/mockData";

const BookService = () => {
  const location = useLocation();
  const stateData = location.state || null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceId: stateData?.serviceId || "",
    applianceBrand: "",
    issueDescription: "",
    preferredDate: "",
    preferredTime: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (stateData?.serviceId) {
      setFormData((prev) => ({
        ...prev,
        serviceId: stateData.serviceId || "",
      }));
    }
  }, [stateData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.serviceId) newErrors.serviceId = "Please select a service";
    if (!formData.issueDescription.trim())
      newErrors.issueDescription = "Please describe the issue";
    if (!formData.preferredDate)
      newErrors.preferredDate = "Preferred date is required";
    if (!formData.preferredTime)
      newErrors.preferredTime = "Preferred time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const minDate = new Date().toISOString().split("T")[0];

  if (submitted) {
    return (
      <>
        <SEO
          title="Booking Confirmed"
          description="Your service booking has been confirmed. Our team will contact you shortly."
        />
        <div className="pt-24 pb-16 min-h-screen bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Thank you,{" "}
                <span className="font-semibold">{formData.name}</span>! Your
                service booking has been received.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Booking Details:
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <span className="font-medium">Service:</span>{" "}
                    {services.find((s) => s.id === formData.serviceId)?.name}
                  </p>
                  <p>
                    <span className="font-medium">Date:</span>{" "}
                    {new Date(formData.preferredDate).toLocaleDateString()}
                  </p>
                  <p>
                    <span className="font-medium">Time:</span>{" "}
                    {formData.preferredTime}
                  </p>
                  <p>
                    <span className="font-medium">Phone:</span> {formData.phone}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {formData.email}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Our team will contact you within 2 hours to confirm the booking
                details. You will receive a confirmation email shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      address: "",
                      serviceId: "",
                      applianceBrand: "",
                      issueDescription: "",
                      preferredDate: "",
                      preferredTime: "",
                    });
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Book Another Service
                </button>
                <a
                  href="/"
                  className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Repair Zone Service Expert - Book Appliance Repair in MP Nagar, Bhopal"
        description="Book your home appliance repair service online in MP Nagar, Bhopal with Repair Zone Service Expert. Fast, reliable, and convenient booking with certified technicians."
        keywords="Repair Zone Service Expert, appliance repair booking Bhopal, book service MP Nagar, AC repair, fridge repair, washing machine repair"
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Service
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Fill in the details below and our team will get back to you shortly
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Full address including landmark"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="serviceId"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Select Service *
                  </label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.serviceId ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Choose a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                  {errors.serviceId && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.serviceId}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="applianceBrand"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Appliance Brand
                  </label>
                  <input
                    type="text"
                    id="applianceBrand"
                    name="applianceBrand"
                    value={formData.applianceBrand}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., LG, Samsung, etc."
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="issueDescription"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Describe the Issue *
                </label>
                <textarea
                  id="issueDescription"
                  name="issueDescription"
                  value={formData.issueDescription}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                    errors.issueDescription
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Please describe the problem with your appliance..."
                />
                {errors.issueDescription && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.issueDescription}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={minDate}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.preferredDate
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Time Slot *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.preferredTime
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select time slot</option>
                    <option value="9:00 AM - 12:00 PM">
                      9:00 AM - 12:00 PM
                    </option>
                    <option value="12:00 PM - 3:00 PM">
                      12:00 PM - 3:00 PM
                    </option>
                    <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                    <option value="6:00 PM - 9:00 PM">6:00 PM - 9:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Note:</span> Our team will
                  contact you within 2 hours to confirm the booking. Service
                  charges will be confirmed after inspection.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookService;
