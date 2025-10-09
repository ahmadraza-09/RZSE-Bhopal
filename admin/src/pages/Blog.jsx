import React, { useState } from "react";
import {
  Search,
  Edit,
  Trash2,
  Plus,
  Eye,
  EyeOff,
  Clock,
  X,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import { blogPosts as initialBlogPosts } from "../data/mockData";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    content: "",
    category: "",
    featured_image: "",
    author_name: "",
    tags: "",
    published: false,
    created_at: new Date().toISOString(),
  });

  const categories = [
    "all",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || post.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const togglePublished = (id) => {
    setBlogPosts(
      blogPosts.map((post) =>
        post.id === id ? { ...post, published: !post.published } : post
      )
    );
  };

  const openModal = (post = null) => {
    if (post) {
      setEditingPost(post);
      setFormData({
        ...post,
        tags: post.tags ? post.tags.join(",") : "",
      });
    } else {
      setEditingPost(null);
      setFormData({
        id: "",
        title: "",
        description: "",
        content: "",
        category: "",
        featured_image: "",
        author_name: "",
        tags: "",
        published: false,
        created_at: new Date().toISOString(),
      });
    }
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const calculateReadTime = (content) => {
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / 200);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "tags") {
      const cleanedValue = value.replace(/\s+/g, "");
      const tagsArray = cleanedValue.split(",").slice(0, 5);
      setFormData((prev) => ({
        ...prev,
        [name]: tagsArray.join(","),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSave = () => {
    const read_time = calculateReadTime(formData.content);
    const updatedData = {
      ...formData,
      read_time,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    if (editingPost) {
      setBlogPosts((prev) =>
        prev.map((post) => (post.id === editingPost.id ? updatedData : post))
      );
    } else {
      setBlogPosts((prev) => [
        ...prev,
        { ...updatedData, id: Date.now().toString() },
      ]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setBlogPosts((prev) => prev.filter((post) => post.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Blog Management
              </h1>
              <p className="text-gray-600">Create and manage blog posts</p>
            </div>
            <button
              onClick={() => openModal()}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Post</span>
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Blog List */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-64 h-48 md:h-auto">
                    <img
                      src={post.featured_image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                          {post.published ? (
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              Published
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                              <EyeOff className="w-3 h-3 mr-1" />
                              Draft
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <span>{post.author_name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.read_time} min read</span>
                        </div>
                        <div>
                          {new Date(post.created_at).toLocaleDateString()}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => togglePublished(post.id)}
                          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            post.published
                              ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                              : "bg-green-600 text-white hover:bg-green-700"
                          }`}
                        >
                          {post.published ? "Unpublish" : "Publish"}
                        </button>
                        <button
                          onClick={() => openModal(post)}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 overflow-hidden animate-fadeIn pt-10 pb-10">
          <div className="bg-white rounded-2xl shadow-2xl h-full overflow-y-scroll w-full max-w-2xl p-8 relative my-10">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
            </h2>

            <div>
              <label className="text-gray-700 text-sm font-semibold mb-1 block">
                Title
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="pt-4">
              <label className="text-gray-700 text-sm font-semibold mb-1 block">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Short summary of the blog post"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div>
                <label className="text-gray-700 text-sm font-semibold mb-1 block">
                  Author Name
                </label>
                <input
                  name="author_name"
                  value={formData.author_name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="text-gray-700 text-sm font-semibold mb-1 block">
                  Category
                </label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-gray-700 text-sm font-semibold mb-1 block">
                  Featured Image URL
                </label>
                <input
                  name="featured_image"
                  value={formData.featured_image}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-gray-700 text-sm font-semibold mb-1 block">
                  Content
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-gray-700 text-sm font-semibold mb-1 block">
                  Tags (comma-separated, max 5)
                </label>
                <input
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g. React,JavaScript"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-6">
              <label className="flex items-center space-x-2 text-gray-700">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span>Publish</span>
              </label>

              <div className="flex gap-3">
                <button
                  onClick={closeModal}
                  className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Save Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
