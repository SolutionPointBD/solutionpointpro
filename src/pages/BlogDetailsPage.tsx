import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Calendar,
  User,
  ChevronRight,
  Zap,
  Mail,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../data/blogData";
import SEO from "../components/SEO";
import WhatsAppCTA from "../components/WhatsAppCTA";

export default function BlogDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen font-sans bg-bg-light selection:bg-primary-blue selection:text-white">
      <SEO
        title={`${post.title} | Solution Point Pro`}
        description={post.excerpt}
        canonical={`https://solutionpointpro.com/blog/${post.slug}`}
      />

      <main className="pt-24 lg:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-text-dark/60 hover:text-primary-blue transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Article Content */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
              <span className="inline-block bg-primary-blue/10 text-primary-blue text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide mb-6">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-dark mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-text-dark/60 mb-8 pb-8 border-b border-slate-100">
                <span className="flex items-center gap-2 font-medium">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  {post.author}
                </span>
                <span className="flex items-center gap-2 font-medium">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
              </div>

              <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-text-dark prose-a:text-primary-blue mx-auto">
                <div className="markdown-body">
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="bg-bg-light p-6 md:p-8 lg:p-10 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 justify-between">
                  <div>
                    <h4 className="font-bold text-text-dark mb-1">
                      Loved this article?
                    </h4>
                    <p className="text-sm text-text-dark/70">
                      Share it with your network or implement these strategies
                      today.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/8801741516454?text=Hi%2C+I+read+your+blog+and+want+to+talk!"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 bg-accent-green hover:opacity-90 text-dark-navy font-bold py-3 px-6 rounded-xl transition-transform hover:-translate-y-1 shadow-lg shadow-accent-green/30"
                  >
                    Discuss Your Strategy
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Lead Capture Banner */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary-blue to-blue-900 p-8 rounded-3xl text-white relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Zap size={100} />
                </div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                    Free Strategy Session
                  </span>
                  <h3 className="text-2xl font-bold mb-3 leading-tight">
                    Need expert help?
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    Implement the strategies from this article with the Solution
                    Point Pro team.
                  </p>
                  <a
                    href="https://wa.me/8801741516454?text=Hi%2C+I'd+like+a+free+digital+strategy+session!"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full bg-accent-green hover:opacity-90 text-dark-navy text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:-translate-y-1"
                  >
                    Book Consultation
                  </a>
                </div>
              </motion.div>

              {/* Newsletter */}
              <div className="bg-white p-8 lg:p-12 border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-cyan-accent/10 text-cyan-accent rounded-xl flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  Growth Insights Weekly
                </h3>
                <p className="text-text-dark/70 text-sm mb-6">
                  Join 5,000+ Bangladeshi entrepreneurs receiving our best
                  digital marketing tips every week.
                </p>

                {isSubscribed ? (
                  <div className="bg-accent-green/10 text-dark-navy p-4 rounded-xl border border-accent-green/20 flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent-green text-dark-navy flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold">You're in!</p>
                      <p className="text-xs mt-1">
                        Check your inbox for our latest strategies.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    className="space-y-3"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSubscribing(true);
                      setTimeout(() => {
                        setIsSubscribing(false);
                        setIsSubscribed(true);
                      }, 1000);
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-bg-light border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary-blue transition-all"
                      required
                      disabled={isSubscribing}
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full bg-dark-navy hover:bg-dark-navy/90 disabled:bg-slate-400 text-white font-bold py-3 rounded-xl transition-colors flex justify-center items-center gap-2"
                    >
                      {isSubscribing ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Subscribing...
                        </>
                      ) : (
                        "Subscribe Now"
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <div className="bg-white p-8 lg:p-12 border border-slate-100 shadow-sm">
                  <h3 className="text-xl font-bold text-text-dark mb-6">
                    Related Articles
                  </h3>
                  <ul className="space-y-6">
                    {relatedPosts.map((rp) => (
                      <li key={rp.id}>
                        <Link
                          to={`/blog/${rp.slug}`}
                          className="group flex gap-4 items-center"
                        >
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                              src={rp.image}
                              alt={rp.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-text-dark group-hover:text-primary-blue transition-colors line-clamp-2 leading-snug">
                              {rp.title}
                            </h4>
                            <p className="text-xs text-text-dark/60 mt-1 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {rp.date}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <WhatsAppCTA />
    </div>
  );
}
