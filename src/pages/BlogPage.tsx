import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SEO from "../components/SEO";
import WhatsAppCTA from "../components/WhatsAppCTA";
import {
  Search,
  ChevronRight,
  Calendar,
  User,
  ArrowRight,
  Mail,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

const categories = [
  "All",
  "Digital Strategy",
  "Website Design",
  "SEO",
  "Facebook Ads",
  "Branding",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter(
    (post) => !post.featured || activeCategory !== "All" || searchQuery !== "",
  );

  return (
    <div className="min-h-screen font-sans selection:bg-primary-blue selection:text-white bg-bg-light">
      <SEO
        title="Digital Growth Blog & Business Insights"
        description="Actionable web design, SEO, and digital marketing strategies for small businesses and entrepreneurs in Bangladesh."
        keywords="digital marketing blog bd, web design tips bangladesh, local seo strategies, facebook ads bangladesh"
        canonical="https://solutionpointpro.com/blog"
      />

      <main className="pt-24 lg:pt-32 pb-20">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-dark mb-6 leading-tight">
              Actionable Insights to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
                Scale Your Business
              </span>
            </h1>
            <p className="text-lg text-text-dark/70">
              Expert strategies, tutorials, and case studies on website design,
              SEO, and digital marketing tailored for the Bangladeshi market.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Search & Categories (Mobile mostly, visible on desktop too) */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex overflow-x-auto no-scrollbar gap-2 w-full md:w-auto pb-2 md:pb-0">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
                        activeCategory === category
                          ? "bg-primary-blue text-white"
                          : "bg-slate-100 text-text-dark/70 hover:bg-slate-200"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary-blue transition-all"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                </div>
              </div>

              {/* Featured Post (Only show if 'All' category and no search) */}
              {featuredPost &&
                activeCategory === "All" &&
                searchQuery === "" && (
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md group relative"
                  >
                    <Link
                      to={`/blog/${featuredPost.slug}`}
                      className="absolute inset-0 z-10"
                    >
                      <span className="sr-only">Read article</span>
                    </Link>
                    <div className="relative h-72 md:h-96 w-full overflow-hidden">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-accent-green text-dark-navy text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide">
                        Featured
                      </div>
                    </div>
                    <div className="p-8 md:p-10 relative bg-white">
                      <div className="flex items-center gap-4 text-sm text-text-dark/60 mb-4">
                        <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" /> {featuredPost.date}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-text-dark mb-4 group-hover:text-primary-blue transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-text-dark/70 text-lg leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
                            <User className="w-5 h-5 text-text-dark/60" />
                          </div>
                          <span className="font-semibold text-text-dark">
                            {featuredPost.author}
                          </span>
                        </div>
                        <span className="text-primary-blue font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                )}

              {/* Regular Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <AnimatePresence>
                  {regularPosts.map((post, idx) => (
                    <motion.article
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      key={post.id}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col relative"
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="absolute inset-0 z-10"
                      >
                        <span className="sr-only">Read article</span>
                      </Link>
                      <div className="h-56 relative overflow-hidden rounded-t-2xl">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary-blue text-xs font-bold px-3 py-1.5 rounded-lg uppercase tracking-wide shadow-sm">
                          {post.category}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-text-dark/60 mb-3">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-text-dark mb-3 leading-snug group-hover:text-primary-blue transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-text-dark/70 text-sm mb-6 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                          <span className="text-xs font-semibold text-text-dark/60 flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5" /> {post.author}
                          </span>
                          <span className="text-primary-blue group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>

                {regularPosts.length === 0 && (
                  <div className="col-span-1 md:col-span-2 text-center py-12">
                    <p className="text-text-dark/60 text-lg">
                      No articles found matching your criteria.
                    </p>
                  </div>
                )}
              </div>

              {/* Pagination (Dummy) */}
              {regularPosts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="inline-flex items-center gap-2 bg-white rounded-xl p-2 border border-slate-100 shadow-sm">
                    <button
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:bg-bg-light transition-colors"
                      disabled
                    >
                      <ChevronRight className="w-5 h-5 rotate-180" />
                    </button>
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-blue text-white font-semibold">
                      1
                    </button>
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center text-text-dark/70 hover:bg-bg-light font-semibold transition-colors">
                      2
                    </button>
                    <button className="w-10 h-10 rounded-lg flex items-center justify-center text-text-dark/70 hover:bg-bg-light transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar (SEO optimized, Lead Generation Focused) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Lead Capture Banner */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
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
                    Ready to dominate your market?
                  </h3>
                  <p className="text-white/80 text-sm mb-6">
                    Get a personalized digital growth roadmap for your business.
                    No obligations, just pure value.
                  </p>
                  <a
                    href="https://wa.me/8801741516454?text=Hi%2C+I'd+like+a+free+digital+strategy+session!"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full bg-accent-green hover:opacity-90 text-dark-navy text-center font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:-translate-y-1"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </motion.div>

              {/* Newsletter Setup */}
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

              {/* Popular Categories */}
              <div className="bg-white p-8 lg:p-12 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-text-dark mb-6">
                  Explore Topics
                </h3>
                <ul className="space-y-3">
                  {categories
                    .filter((c) => c !== "All")
                    .map((category) => (
                      <li key={category}>
                        <button
                          onClick={() => setActiveCategory(category)}
                          className="w-full flex items-center justify-between py-2 text-text-dark/70 hover:text-primary-blue transition-colors group"
                        >
                          <span className="font-medium group-hover:translate-x-1 transition-transform">
                            {category}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-bg-light flex items-center justify-center group-hover:bg-primary-blue/10 transition-colors">
                            <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-primary-blue" />
                          </div>
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <WhatsAppCTA />
    </div>
  );
}
