import { useParams, Link } from "react-router-dom";
import {
  Clock,
  User,
  Calendar,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts } from "../data/mockData";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Article Not Found
          </h1>
          <Link to="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(
      (p) => p.category === post.category && p.id !== post.id && p.published
    )
    .slice(0, 3);

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
        image={post.featured_image}
        url={shareUrl}
      />

      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
            <div className="flex items-center space-x-3">
              <img
                src={post.author_image}
                alt={post.author_name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-gray-900">
                    {post.author_name}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <Clock className="w-3 h-3" />
                  <span>{post.read_time} min read</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="mb-8 rounded-xl overflow-hidden shadow-xl">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          <div className="flex items-center justify-between mb-8 pb-6 border-b">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-sm font-medium flex items-center">
                <Share2 className="w-4 h-4 mr-2" />
                Share:
              </span>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white p-2 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-gray-900 mt-8 mb-4"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="bg-gray-50 rounded-xl p-6 flex items-start space-x-4">
              <img
                src={post.author_image}
                alt={post.author_name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  About {post.author_name}
                </h3>
                <p className="text-gray-700">
                  Expert writer and technician with years of experience in home
                  appliance repair and maintenance. Passionate about sharing
                  knowledge to help homeowners keep their appliances running
                  smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={relatedPost.featured_image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{relatedPost.read_time} min</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Help?</h2>
          <p className="text-xl mb-8">
            Our expert technicians are ready to assist you
          </p>
          <Link
            to="/book-service"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
          >
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
