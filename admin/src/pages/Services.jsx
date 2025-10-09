import React, { useState } from "react";
import { Edit, Trash2, Plus, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { services as mockServices } from "../data/mockData";
import * as Icons from "lucide-react";

const Services = () => {
  const [serviceList, setServiceList] = useState(mockServices);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    slug: "",
    description: "",
    detailed_description: "",
    image_url: "",
    icon: "",
    starting_price: "",
    features: [],
    process_steps: [],
    faqs: [],
  });

  const openModal = (service = null) => {
    if (service) {
      setEditingService(service);
      setFormData({ ...service });
    } else {
      setEditingService(null);
      setFormData({
        id: "",
        name: "",
        slug: "",
        description: "",
        detailed_description: "",
        image_url: "",
        icon: "",
        starting_price: "",
        features: [],
        process_steps: [],
        faqs: [],
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Features Add/Delete
  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };
  const updateFeature = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({ ...prev, features: newFeatures }));
  };
  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  // Process Steps Add/Delete
  const addProcessStep = () => {
    setFormData((prev) => ({
      ...prev,
      process_steps: [
        ...prev.process_steps,
        { step: prev.process_steps.length + 1, title: "", description: "" },
      ],
    }));
  };
  const updateProcessStep = (index, field, value) => {
    const newSteps = [...formData.process_steps];
    newSteps[index][field] = value;
    setFormData((prev) => ({ ...prev, process_steps: newSteps }));
  };
  const removeProcessStep = (index) => {
    setFormData((prev) => ({
      ...prev,
      process_steps: prev.process_steps.filter((_, i) => i !== index),
    }));
  };

  // FAQs Add/Delete
  const addFaq = () => {
    setFormData((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };
  const updateFaq = (index, field, value) => {
    const newFaqs = [...formData.faqs];
    newFaqs[index][field] = value;
    setFormData((prev) => ({ ...prev, faqs: newFaqs }));
  };
  const removeFaq = (index) => {
    setFormData((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const handleSave = () => {
    if (editingService) {
      setServiceList((prev) =>
        prev.map((s) => (s.id === editingService.id ? formData : s))
      );
    } else {
      setServiceList((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setServiceList((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Services Management
              </h1>
              <p className="text-gray-600">Manage all service offerings</p>
            </div>
            <button
              onClick={() => openModal()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Add Service</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={service.image_url}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white p-3 rounded-lg">
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
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Starting Price</p>
                        <p className="text-2xl font-bold text-blue-600">
                          ₹{service.starting_price}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Features</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {service.features.length}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal(service)}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => handleDelete(service.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {editingService ? "Edit Service" : "Add Service"}
            </h2>

            <div className="space-y-4">
              <input
                name="name"
                placeholder="Service Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                name="slug"
                placeholder="Slug"
                value={formData.slug}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                name="description"
                placeholder="Short Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <textarea
                name="detailed_description"
                placeholder="Detailed Description"
                value={formData.detailed_description}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                name="image_url"
                placeholder="Image URL"
                value={formData.image_url}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                name="icon"
                placeholder="Icon Name (e.g., Wind)"
                value={formData.icon}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />
              <input
                name="starting_price"
                type="number"
                placeholder="Starting Price"
                value={formData.starting_price}
                onChange={handleInputChange}
                className="w-full border rounded-lg px-3 py-2"
              />

              {/* Features */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Features</h3>
                  <button
                    onClick={addFeature}
                    className="text-blue-600 flex items-center gap-1"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
                {formData.features.map((feature, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      value={feature}
                      onChange={(e) => updateFeature(i, e.target.value)}
                      placeholder={`Feature ${i + 1}`}
                      className="flex-1 border px-2 py-1 rounded"
                    />
                    <button
                      onClick={() => removeFeature(i)}
                      className="text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Process Steps */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">Process Steps</h3>
                  <button
                    onClick={addProcessStep}
                    className="text-blue-600 flex items-center gap-1"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
                {formData.process_steps.map((step, i) => (
                  <div key={i} className="mb-3 border p-2 rounded-lg">
                    <input
                      value={step.title}
                      onChange={(e) =>
                        updateProcessStep(i, "title", e.target.value)
                      }
                      placeholder="Step Title"
                      className="w-full border px-2 py-1 rounded mb-2"
                    />
                    <textarea
                      value={step.description}
                      onChange={(e) =>
                        updateProcessStep(i, "description", e.target.value)
                      }
                      placeholder="Step Description"
                      className="w-full border px-2 py-1 rounded"
                    />
                    <button
                      onClick={() => removeProcessStep(i)}
                      className="text-red-600 mt-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* FAQs */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold">FAQs</h3>
                  <button
                    onClick={addFaq}
                    className="text-blue-600 flex items-center gap-1"
                  >
                    <Plus size={16} /> Add
                  </button>
                </div>
                {formData.faqs.map((faq, i) => (
                  <div key={i} className="mb-3 border p-2 rounded-lg">
                    <input
                      value={faq.question}
                      onChange={(e) => updateFaq(i, "question", e.target.value)}
                      placeholder="Question"
                      className="w-full border px-2 py-1 rounded mb-2"
                    />
                    <textarea
                      value={faq.answer}
                      onChange={(e) => updateFaq(i, "answer", e.target.value)}
                      placeholder="Answer"
                      className="w-full border px-2 py-1 rounded"
                    />
                    <button
                      onClick={() => removeFaq(i)}
                      className="text-red-600 mt-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Save Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
