import { Link } from "react-router-dom";
import { Clock, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import SEO from "../components/SEO";
import { blogPosts as rawPosts } from "../data/mockData";

// ✅ Generate slug from title
const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// ✅ Calculate read time
const calculateReadTime = (content) =>
  Math.max(Math.ceil((content?.split(" ").length || 0) / 200), 1);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add slug and read_time to all posts
  const blogPosts = rawPosts.map((post) => ({
    ...post,
    slug: generateSlug(post.title),
    read_time: calculateReadTime(post.content),
  }));

  const categories = [
    "All",
    ...Array.from(new Set(blogPosts.map((p) => p.category))),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory && post.published;
  });

  return (
    <>
      <SEO
        title="Repair Zone Service Expert Bhopal Blog - Appliance Tips & Repair Guides"
        description="Read our latest articles in MP Nagar, Bhopal on appliance maintenance tips, energy saving guides, DIY repairs, and expert advice for keeping your home appliances running smoothly."
        keywords="Bhopal appliance tips, maintenance guide Bhopal, energy saving Bhopal, DIY repair Bhopal, home appliance blog Bhopal"
      />

      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tips, guides, and expert advice for maintaining your home appliances
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.featured_image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author_name}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.read_time} min read
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:underline"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
