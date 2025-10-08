import React, { useState } from "react";
import {
  Search,
  Star,
  Edit,
  Trash2,
  Plus,
  ToggleLeft,
  ToggleRight,
  X,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { testimonials as initialTestimonials } from "../data/mockData";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    customer_name: "",
    customer_image: "",
    location: "",
    service_name: "",
    rating: 0,
    review_text: "",
    is_featured: false,
  });

  const filteredTestimonials = testimonials.filter(
    (t) =>
      t.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFeatured = (id) => {
    setTestimonials(
      testimonials.map((t) =>
        t.id === id ? { ...t, is_featured: !t.is_featured } : t
      )
    );
  };

  const openModal = (testimonial = null) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({ ...testimonial });
    } else {
      setEditingTestimonial(null);
      setFormData({
        id: "",
        customer_name: "",
        customer_image: "",
        location: "",
        service_name: "",
        rating: 0,
        review_text: "",
        is_featured: false,
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    if (editingTestimonial) {
      setTestimonials((prev) =>
        prev.map((t) => (t.id === editingTestimonial.id ? formData : t))
      );
    } else {
      setTestimonials((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Testimonials Management
              </h1>
              <p className="text-gray-600">
                Manage customer reviews and ratings
              </p>
            </div>
            <button
              onClick={() => openModal()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Review</span>
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by customer name or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.customer_image}
                      alt={testimonial.customer_name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {testimonial.customer_name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFeatured(testimonial.id)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    title={
                      testimonial.is_featured
                        ? "Remove from featured"
                        : "Add to featured"
                    }
                  >
                    {testimonial.is_featured ? (
                      <ToggleRight className="w-8 h-8 text-blue-600" />
                    ) : (
                      <ToggleLeft className="w-8 h-8" />
                    )}
                  </button>
                </div>

                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 line-clamp-3">
                  {testimonial.review_text}
                </p>

                <div className="mb-4 pb-4 border-b">
                  <p className="text-sm text-blue-600 font-medium">
                    {testimonial.service_name}
                  </p>
                </div>

                {testimonial.is_featured && (
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Featured on Homepage
                    </span>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => openModal(testimonial)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(testimonial.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {editingTestimonial ? "Edit Review" : "Add Review"}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="customer_name"
                placeholder="Customer Name"
                value={formData.customer_name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="customer_image"
                placeholder="Customer Image URL"
                value={formData.customer_image}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="service_name"
                placeholder="Service Name"
                value={formData.service_name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="rating"
                placeholder="Rating (0-5)"
                value={formData.rating}
                onChange={handleInputChange}
                min={0}
                max={5}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="review_text"
                placeholder="Review Text"
                value={formData.review_text}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="is_featured"
                  checked={formData.is_featured}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">Featured on Homepage</span>
              </label>

              <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Save Review
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
