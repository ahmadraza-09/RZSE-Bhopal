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
    excerpt: "",
    category: "",
    featured_image: "",
    author_name: "",
    author_image: "",
    read_time: 0,
    published: false,
    created_at: new Date().toISOString(),
  });

  const categories = [
    "all",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
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
      setFormData({ ...post });
    } else {
      setEditingPost(null);
      setFormData({
        id: "",
        title: "",
        excerpt: "",
        category: "",
        featured_image: "",
        author_name: "",
        author_image: "",
        read_time: 0,
        published: false,
        created_at: new Date().toISOString(),
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
    if (editingPost) {
      setBlogPosts((prev) =>
        prev.map((post) => (post.id === editingPost.id ? formData : post))
      );
    } else {
      setBlogPosts((prev) => [
        ...prev,
        { ...formData, id: Date.now().toString() },
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
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <img
                            src={post.author_image}
                            alt={post.author_name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
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
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-bold mb-4">
              {editingPost ? "Edit Post" : "New Post"}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Post Title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="excerpt"
                placeholder="Excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="featured_image"
                placeholder="Featured Image URL"
                value={formData.featured_image}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="author_name"
                placeholder="Author Name"
                value={formData.author_name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="author_image"
                placeholder="Author Image URL"
                value={formData.author_image}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                name="read_time"
                placeholder="Read Time (minutes)"
                value={formData.read_time}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">Publish</span>
              </label>

              <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Save Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
