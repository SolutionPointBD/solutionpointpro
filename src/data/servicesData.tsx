import React from 'react';
import { Globe, Search, Palette, Share2, Target, Briefcase, PenTool, Layout, Smartphone, Zap, Code, Shield, TrendingUp, BarChart, Users, MessageCircle, Settings, Camera, Video, Monitor, LineChart, Calendar, Star, Eye, Printer, Package } from 'lucide-react';

export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  bonuses?: string[];
  isFeatured?: boolean;
  badge?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  overview: string;
  benefits: Feature[];
  features: Feature[];
  pricing: PricingTier[];
  comparisonTable: {
    feature: string;
    starter: string | boolean;
    standard: string | boolean;
    premium: string | boolean;
  }[];
  process: { step: string; title: string; description: string }[];
  faqs: FAQItem[];
  testimonial?: {
    quote: string;
    name: string;
    title: string;
    image: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "website-design": {
    id: "website-design",
    title: "Website Design & Development",
    subtitle: "Custom, Lightning-Fast, High-Converting Websites Built for Modern Bangladesh Businesses.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/11/1.webp",
    overview: "Your website is your 24/7 digital salesperson. We build custom, responsive, and SEO-optimized websites that not only look stunning but are engineered to convert visitors into paying clients.",
    benefits: [
      { title: "Mobile-First Design", description: "Flawless performance on all devices, capturing the massive mobile audience in Bangladesh.", icon: <Smartphone className="w-6 h-6" /> },
      { title: "Blazing Fast Speed", description: "Optimized for sub-2-second load times to reduce bounce rates and improve SEO.", icon: <Zap className="w-6 h-6" /> },
      { title: "High Conversion Focus", description: "Strategic layout and copywriting designed with consumer psychology in mind.", icon: <Target className="w-6 h-6" /> }
    ],
    features: [
      { title: "Custom UI/UX Design", description: "No generic templates. Tailored designs that match your unique brand identity.", icon: <Layout className="w-6 h-6" /> },
      { title: "SEO Ready Structure", description: "Built from the ground up following technical SEO best practices.", icon: <Search className="w-6 h-6" /> },
      { title: "Secure & Scalable", description: "Enterprise-grade security protocols so your business data stays safe.", icon: <Shield className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Starter Business",
        price: "15,000",
        period: "BDT / one-time",
        description: "Perfect for local service providers needing a professional online presence.",
        features: ["Up to 5 Pages Design", "Mobile Responsive", "Basic Contact Form", "WhatsApp Integration", "1 Month Free Support"],
        badge: "Great Start"
      },
      {
        name: "Growth Agency",
        price: "30,000",
        period: "BDT / one-time",
        description: "Ideal for growing businesses needing dynamic features and lead generation.",
        features: ["Up to 10 Pages", "Custom UI/UX Design", "On-Page SEO Optimization", "Advanced Lead Forms", "Speed Optimization (90+ Score)", "3 Months Free Support"],
        bonuses: ["Free Premium Domain (1 Year)", "1 Month Free Hosting"],
        isFeatured: true,
        badge: "Most Popular"
      },
      {
        name: "E-Commerce / Custom",
        price: "50,000+",
        period: "BDT / one-time",
        description: "For retail brands and enterprises requiring robust functionality.",
        features: ["Unlimited Categories", "Payment Gateway Setup (bKash/Cards)", "Inventory Management", "Advanced Filtering", "User Accounts & Dashboards", "6 Months Priority Support"],
        bonuses: ["Free Social Media Banner Pack", "Strategy Consultation"]
      }
    ],
    comparisonTable: [
      { feature: "Custom Pages", starter: "Up to 5", standard: "Up to 10", premium: "Unlimited Products/Multi-page" },
      { feature: "Mobile Responsive", starter: true, standard: true, premium: true },
      { feature: "Speed Optimization", starter: false, standard: true, premium: true },
      { feature: "Advanced Lead Capture", starter: false, standard: true, premium: true },
      { feature: "Payment Gateway Integration", starter: false, standard: false, premium: true }
    ],
    process: [
      { step: "01", title: "Discovery & Strategy", description: "Understanding your business goals, target audience, and website requirements." },
      { step: "02", title: "UI/UX Design", description: "Creating wireframes and premium visual designs tailored to your brand identity." },
      { step: "03", title: "Front-End Build", description: "Building responsive, pixel-perfect interfaces using modern React & Tailwind." },
      { step: "04", title: "Back-End & CMS", description: "Setting up robust databases, CMS, and necessary API integrations." },
      { step: "05", title: "QA & Optimization", description: "Rigorous testing for speed, security, and on-page SEO optimization." },
      { step: "06", title: "Launch & Support", description: "Smooth deployment with ongoing support to ensure zero downtime." }
    ],
    faqs: [
      { question: "How long does it take to build a website?", answer: "A standard 5-page website takes about 7-10 days, while custom eCommerce sites might take 3-4 weeks depending on requirements." },
      { question: "Do you provide hosting and domains?", answer: "Yes! Our Growth and Custom packages include free domain and hosting for the first year. Alternatively, we can deploy on your existing servers." },
      { question: "Will my website look good on mobile?", answer: "Absolutely. We use a mobile-first approach. Given that over 80% of web traffic in Bangladesh is mobile, it's our top priority." }
    ]
  },

  "seo": {
    id: "seo",
    title: "SEO Services",
    subtitle: "Dominate Google Search Results and Attract High-Intent Traffic Structurally.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/11/3.webp",
    overview: "Stop hiding on page 2 of Google. Our ethical, data-driven SEO strategies help your local BD business rank higher, driving consistent, free, and highly motivated organic traffic to your website.",
    benefits: [
      { title: "Long-term ROI", description: "Unlike paid ads, SEO builds permanent digital assets that compound over time.", icon: <TrendingUp className="w-6 h-6" /> },
      { title: "Targeted Leads", description: "Capture users actively searching for your exact services in your city.", icon: <Target className="w-6 h-6" /> },
      { title: "Brand Authority", description: "Ranking on page 1 instantly elevates your brand trust in the eyes of consumers.", icon: <Shield className="w-6 h-6" /> }
    ],
    features: [
      { title: "Local SEO (Google Maps)", description: "Dominate local map packs in Dhaka, Chittagong, or any city you target.", icon: <Globe className="w-6 h-6" /> },
      { title: "Technical SEO Audit", description: "Fixing crawl errors, site speed, and structural issues preventing rankings.", icon: <Settings className="w-6 h-6" /> },
      { title: "High-Quality Backlinks", description: "Earning authoritative links from trusted Bangladeshi and global sites.", icon: <Share2 className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Local Starter Page",
        price: "10,000",
        period: "BDT / month",
        description: "For small local businesses seeking visibility on Google Maps and basic search.",
        features: ["Google My Business Optimization", "Basic On-Page SEO (5 Pages)", "Local Citation Building", "5 Keywords Target", "Monthly Performance Report"],
        badge: "Local Biz"
      },
      {
        name: "Growth SEO",
        price: "20,000",
        period: "BDT / month",
        description: "Aggressive ranking strategy for service businesses facing tough competition.",
        features: ["Technical SEO Audit & Fixes", "Advanced On-Page SEO", "2 Blog Posts/Month Content Strategy", "15 Keywords Target", "High-Quality Link Building", "Competitor Analysis"],
        bonuses: ["Free Website Speed Optimization"],
        isFeatured: true,
        badge: "Best ROI"
      },
      {
        name: "National & eCommerce",
        price: "35,000",
        period: "BDT / month",
        description: "For brands targeting country-wide reach or high-volume eCommerce sites.",
        features: ["Comprehensive Technical SEO", "Category & Product Optimization", "4 Blog Posts/Month", "30+ Keywords Target", "Premium Guest Posting", "Conversion Rate Optimization (CRO)", "Bi-weekly Strategy Calls"],
        bonuses: ["Free Technical Audit Report", "Dedicated SEO Manager"]
      }
    ],
    comparisonTable: [
      { feature: "Targeted Keywords", starter: "5", standard: "15", premium: "30+" },
      { feature: "Google Maps Optimization", starter: true, standard: true, premium: true },
      { feature: "Content Marketing (Blogs)", starter: false, standard: "2 per month", premium: "4 per month" },
      { feature: "High Authority Backlinking", starter: false, standard: true, premium: true },
      { feature: "E-commerce Optimization", starter: false, standard: false, premium: true }
    ],
    process: [
      { step: "01", title: "Comprehensive Audit", description: "Deep analysis of your existing website architecture and performance." },
      { step: "02", title: "Keyword Research", description: "Identifying high-intent search terms to drive qualified traffic." },
      { step: "03", title: "On-Page SEO", description: "Enhancing content, meta tags, and internal linking structures." },
      { step: "04", title: "Technical SEO", description: "Improving site speed, mobile-friendliness, and crawlability." },
      { step: "05", title: "Authority Building", description: "Strategic link-building to increase domain authority and trust." },
      { step: "06", title: "Tracking & Analytics", description: "Transparent analytics monitoring to measure rank improvements." }
    ],
    faqs: [
      { question: "How long until we see SEO results?", answer: "SEO is a medium to long-term strategy. Typically, you will start seeing significant upward movement in rankings within 3 to 6 months depending on competitiveness." },
      { question: "Are your backlinks safe? (White-hat?)", answer: "Yes! We strictly adhere to Google's Webmaster Guidelines. No spammy PBNs or toxic links—only genuine outreach and high-quality placements." },
      { question: "Do I need a new website for SEO?", answer: "Not always. We can work with your existing site. If it's structurally flawed beyond repair, we might suggest a rebuild, but we'll always try to optimize what you have first." }
    ]
  },

  "branding": {
    id: "branding",
    title: "Logo & Brand Identity",
    subtitle: "Forging Premium, Unforgettable Brands That Command Respect and Build Trust.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/11/4.webp",
    overview: "Your logo is the face of your business. We craft modern, meaningful, and professional brand identities that resonate with the Bangladesh market while matching international premium standards.",
    benefits: [
      { title: "First Impression", description: "Instantly communicate professionalism to potential clients.", icon: <Star className="w-6 h-6" /> },
      { title: "Brand Consistency", description: "A unified look across all channels builds massive trust.", icon: <Layout className="w-6 h-6" /> },
      { title: "Higher Perceived Value", description: "Premium branding allows you to charge premium prices for your services.", icon: <TrendingUp className="w-6 h-6" /> }
    ],
    features: [
      { title: "Original Vector Artwork", description: "100% original, scalable designs. No cheap stock icons.", icon: <PenTool className="w-6 h-6" /> },
      { title: "Brand Guidelines", description: "Rules for colors, typography, and logo usage to maintain consistency.", icon: <Briefcase className="w-6 h-6" /> },
      { title: "Social Media Kits", description: "Ready-to-use profile pictures and banners optimized for BD platforms.", icon: <Share2 className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Startup Logo",
        price: "5,000",
        period: "BDT / one-time",
        description: "For new startups needing a clean and professional face.",
        features: ["2 Initial Concepts", "Primary Logo Design", "3 Revisions", "High-Res PNG & JPG", "Source File (AI/EPS)"],
        badge: "Clean & Simple"
      },
      {
        name: "Standard Identity",
        price: "12,000",
        period: "BDT / one-time",
        description: "Complete visual foundation for registered businesses.",
        features: ["4 Initial Concepts", "Primary & Secondary Logos", "Unlimited Revisions", "Color Palette & Typography", "Business Card Design", "Social Media Profile Kits"],
        bonuses: ["Free Letterhead Design"],
        isFeatured: true,
        badge: "Agency Choice"
      },
      {
        name: "Complete Branding",
        price: "25,000",
        period: "BDT / one-time",
        description: "A full-scale brand overhaul for established scaling companies.",
        features: ["5 Initial Concepts", "Complete Logo Family (Icon, Wordmark)", "Comprehensive Brand Guideline Book", "Stationery Design (Cards, Envelopes, Folders)", "Social Media Post Templates (5)", "Email Signature Design"],
        bonuses: ["Animated Logo Intro (3-5 sec)"]
      }
    ],
    comparisonTable: [
      { feature: "Logo Concepts", starter: "2", standard: "4", premium: "5" },
      { feature: "Revisions", starter: "3 Rounds", standard: "Unlimited", premium: "Unlimited" },
      { feature: "Brand Typography & Colors", starter: false, standard: true, premium: true },
      { feature: "Social Media Kit", starter: false, standard: true, premium: true },
      { feature: "Brand Guideline Book", starter: false, standard: false, premium: true }
    ],
    process: [
      { step: "01", title: "Brand Audit", description: "Evaluating your current brand positioning and market competition." },
      { step: "02", title: "Strategy & Identity", description: "Defining your brand voice, mission, and distinct value proposition." },
      { step: "03", title: "Logo Design", description: "Designing a versatile, memorable logo and complete corporate identity." },
      { step: "04", title: "Color & Typography", description: "Establishing a premium color palette and typographic hierarchy." },
      { step: "05", title: "Brand Guidelines", description: "Creating a comprehensive rulebook for consistent visual communication." },
      { step: "06", title: "Execution & Rollout", description: "Applying new brand assets across all digital and physical touchpoints." }
    ],
    faqs: [
      { question: "What files will I receive?", answer: "You will receive high-resolution PNG, JPG, and the editable vector source files (AI, EPS, SVG) so your logo can be scaled to any size." },
      { question: "Who owns the copyright?", answer: "Once the final payment is cleared, you own 100% of the copyright for the final selected logo design." },
      { question: "What if I don't like any of the initial concepts?", answer: "Our brief process is thorough to avoid this, but if it happens, we will discuss what was missed and provide new concepts within the revision limits." }
    ]
  },

  "social-media": {
    id: "social-media",
    title: "Social Media Management",
    subtitle: "Grow Your Audience, Engage Communities, and Build Authority Across Social Channels.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/11/5.webp",
    overview: "Managing social media takes time you don't have. We handle your content creation, posting, and community engagement so your brand stays active, relevant, and growing on platforms like Facebook, Instagram, and LinkedIn.",
    benefits: [
      { title: "Consistent Presence", description: "Never miss a week. Keep your audience engaged with regular high-quality posts.", icon: <Calendar className="w-6 h-6" /> },
      { title: "Professional Aesthetics", description: "Visually stunning posts that elevate your brand's perception.", icon: <Palette className="w-6 h-6" /> },
      { title: "Community Trust", description: "Active engagement builds a loyal community around your products/services.", icon: <Users className="w-6 h-6" /> }
    ],
    features: [
      { title: "Content Strategy & Calendar", description: "We plan a month ahead so you always know what's publishing.", icon: <Layout className="w-6 h-6" /> },
      { title: "Custom Graphic Design", description: "Eye-catching visuals tailored to your branding guidelines.", icon: <PenTool className="w-6 h-6" /> },
      { title: "Performance Reporting", description: "Monthly analytics to track reach, engagement, and follower growth.", icon: <BarChart className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Maintain",
        price: "8,000",
        period: "BDT / month",
        description: "Keep your profiles active with professional, regular content.",
        features: ["1 Platform (e.g. Facebook)", "8 Custom Posts / Month", "Content Writing & Hashtags", "Basic Page Setup Check", "Monthly Report"],
        badge: "Essential"
      },
      {
        name: "Engage",
        price: "15,000",
        period: "BDT / month",
        description: "Actively grow and engage audiences across multiple channels.",
        features: ["2 Platforms (FB + IG)", "15 Custom Posts / Month", "4 Short Video Reels/TikToks", "Competitor Research", "Community Management (Replying)", "Monthly Strategy Report"],
        bonuses: ["Free Cover Photo Design updates"],
        isFeatured: true,
        badge: "Most Value"
      },
      {
        name: "Dominate",
        price: "25,000",
        period: "BDT / month",
        description: "An aggressive organic growth strategy for serious brands.",
        features: ["Up to 3 Platforms (FB/IG/LI)", "20 Custom Posts / Month", "8 Short Video Reels/TikToks", "Proactive Community Engagement", "Influencer Outreach Assistance", "Bi-Weekly Strategy Calls"],
        bonuses: ["1 High-Quality Brand Video/month"]
      }
    ],
    comparisonTable: [
      { feature: "Platforms Handled", starter: "1", standard: "2", premium: "3" },
      { feature: "Custom Posts", starter: "8/mo", standard: "15/mo", premium: "20/mo" },
      { feature: "Short Form Videos (Reels)", starter: false, standard: "4/mo", premium: "8/mo" },
      { feature: "Community Management", starter: false, standard: true, premium: "Proactive" },
      { feature: "Strategy Meetings", starter: false, standard: "Monthly", premium: "Bi-Weekly" }
    ],
    process: [
      { step: "01", title: "Platform Strategy", description: "Selecting the right channels and content mix for your audience." },
      { step: "02", title: "Profile Setup", description: "Enhancing your profiles for maximum discoverability and trust." },
      { step: "03", title: "Content Creation", description: "Producing engaging posts, reels, and stories that resonate." },
      { step: "04", title: "Community Engagement", description: "Active interaction with followers to build brand loyalty." },
      { step: "05", title: "Growth Tactics", description: "Implementing organic strategies to expand your follower base." },
      { step: "06", title: "Performance Reports", description: "Monthly reports analyzing reach, engagement, and conversions." }
    ],
    faqs: [
      { question: "Do you reply to messages and comments?", answer: "Yes, in our Engage and Dominate packages, we monitor and reply to basic comments and messages using agreed-upon guidelines." },
      { question: "Who provides the images or videos?", answer: "We can use your provided imagery, or utilize premium stock assets. For advanced packages, we also edit short-form videos from raw footage you send us." },
      { question: "Is ad spend included in these prices?", answer: "No, this service covers Organic Social Media Management. Facebook Ads Management is a separate service specifically designed for paid growth." }
    ]
  },

  "facebook-ads": {
    id: "facebook-ads",
    title: "Facebook / Meta Ads Management",
    subtitle: "High-ROI Paid Campaigns That Turn Clicks Into Revenue For BD Businesses.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/11/6.webp",
    overview: "Stop wasting money on the 'Boost Post' button. We build highly targeted, data-backed Meta ad campaigns that capture leads, drive eCommerce sales, and maximize your Return on Ad Spend (ROAS).",
    benefits: [
      { title: "Immediate Traffic", description: "Start generating leads and sales days after launch, not months.", icon: <Zap className="w-6 h-6" /> },
      { title: "Hyper-Targeting", description: "Show ads exactly to demographics in BD most likely to buy.", icon: <Target className="w-6 h-6" /> },
      { title: "Scale Predictably", description: "Put 100 Taka in, get 300 Taka out—then scale the budget.", icon: <TrendingUp className="w-6 h-6" /> }
    ],
    features: [
      { title: "Deep Audience Research", description: "Finding the hidden audience pockets your competitors ignore.", icon: <Search className="w-6 h-6" /> },
      { title: "A/B Split Testing", description: "Testing creatives and copy constantly to find the massive winners.", icon: <Code className="w-6 h-6" /> },
      { title: "Pixel & Conversion Tracking", description: "Accurate tracking of every purchase and lead. No guessing.", icon: <Target className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Starter Campaigns",
        price: "10,000",
        period: "BDT/mo (+ Ad Spend)",
        description: "Perfect for local businesses wanting to generate consistent leads/messages.",
        features: ["Campaign Setup & Strategy", "Up to 2 Campaigns", "3 Ad Creatives Included", "A/B Testing", "Monthly Reporting", "Max Ad Spend: 50,000 BDT/mo"],
        badge: "Lead Gen"
      },
      {
        name: "Growth E-Com / Scaler",
        price: "18,000",
        period: "BDT/mo (+ Ad Spend)",
        description: "For businesses who are ready to scale their daily sales volume.",
        features: ["Pixel & API Setup", "Up to 5 Campaigns", "Retargeting Setup", "6 Copy & Ad Creatives Included", "Weekly Optimization", "Max Ad Spend: 1.5 Lakh BDT/mo"],
        bonuses: ["Free Landing Page Consultation"],
        isFeatured: true,
        badge: "Best Value"
      },
      {
        name: "Enterprise ROAS",
        price: "30,000",
        period: "BDT/mo (+ Ad Spend)",
        description: "For high-volume brands spending aggressively to dominate the market.",
        features: ["Advanced Funnel Creation", "Unlimited Campaigns", "Dynamic Product Ads", "Ongoing Creative Generation", "Daily Optimization & Scaling", "Dedicated Account Manager"],
        bonuses: ["Free Conversion Rate Optimization Audit"]
      }
    ],
    comparisonTable: [
      { feature: "Active Campaigns", starter: "Up to 2", standard: "Up to 5", premium: "Unlimited" },
      { feature: "Ad Creatives Provided", starter: "3 / mo", standard: "6 / mo", premium: "Ongoing" },
      { feature: "Retargeting Infrastructure", starter: false, standard: true, premium: true },
      { feature: "Optimization Frequency", starter: "Bi-Weekly", standard: "Weekly", premium: "Daily" },
      { feature: "Max Monthly Ad Spend Limit", starter: "50K BDT", standard: "1.5L BDT", premium: "Unlimited" }
    ],
    process: [
      { step: "01", title: "Audience Research", description: "Pinpointing ideal customers based on demographics and behavior." },
      { step: "02", title: "Campaign Strategy", description: "Defining campaign objectives, funnels, and optimal budget allocation." },
      { step: "03", title: "Ad Creative & Copy", description: "Crafting compelling visuals and persuasive ad copy that converts." },
      { step: "04", title: "Precision Targeting", description: "Setting up custom and lookalike audiences for maximum relevance." },
      { step: "05", title: "A/B Testing", description: "Experimenting with different ad variations to find the lowest CPA." },
      { step: "06", title: "Scale & Optimize", description: "Reallocating budget to winning ads for sustainable ROI growth." }
    ],
    faqs: [
      { question: "Is ad spend included in your fee?", answer: "No, the pricing listed is our management fee. The actual ad spend is billed directly to your credit/debit card by Facebook." },
      { question: "How much should I spend on ads?", answer: "For local lead generation, we recommend starting at 500-1000 BDT per day. For eCommerce, standard starting budgets are typically 1000-2000 BDT per day to gather enough data." },
      { question: "What if the ads don't work?", answer: "While we can't guarantee sales (as your product/closing team matters), we guarantee targeted, high-quality traffic. If a campaign underperforms, we rapidly pivot and test new angles until we find traction." }
    ]
  },

  "business-consultation": {
    id: "business-consultation",
    title: "Digital Business Consultation",
    subtitle: "Navigate the Bangladesh Digital Landscape with Data, Strategy, and Experience.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/11/women-in-creative-agency-planning-on-tablet-compu-2022-12-10-00-16-14-utc-1024x650.webp",
    overview: "Don't burn money on trial and error. Work directly with our founders and strategists to map out your digital transformation, optimize your funnels, and scale operations intelligently.",
    benefits: [
      { title: "Avoid Costly Mistakes", description: "Get the right roadmap from day one and avoid burning capital on wrong channels.", icon: <Shield className="w-6 h-6" /> },
      { title: "Uncover Bottlenecks", description: "Find out exactly why your current traffic isn't converting into revenue.", icon: <Search className="w-6 h-6" /> },
      { title: "Actionable Strategy", description: "Walk away with a step-by-step execution plan, not just vague advice.", icon: <Target className="w-6 h-6" /> }
    ],
    features: [
      { title: "1-on-1 Video Sessions", description: "Direct access to our senior digital strategists.", icon: <Video className="w-6 h-6" /> },
      { title: "Competitor Teardowns", description: "We dissect what your top competitors are doing right (and wrong).", icon: <BarChart className="w-6 h-6" /> },
      { title: "Funnel Mapping", description: "Designing the exact customer journey from awareness to purchase.", icon: <LineChart className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Clarity Call",
        price: "3,000",
        period: "BDT / Session",
        description: "A focused 60-minute strategy session to solve a specific business problem.",
        features: ["1 Hour Zoom Call", "Pre-call Business Audit", "Specific Problem Solving", "Call Recording Provided", "Action Plan Email"],
        badge: "Quick Fix"
      },
      {
        name: "Growth Retainer",
        price: "10,000",
        period: "BDT / month",
        description: "Ongoing monthly advisory for founders needing a sounding board and strategic direction.",
        features: ["Two 60-min Strategy Calls/mo", "Deep Competitor Analysis", "Marketing Budget Allocation", "Funnels & Conversion Review", "Direct WhatsApp Support Access"],
        bonuses: ["Free Digital Resource Vault Access"],
        isFeatured: true,
        badge: "Most Popular"
      },
      {
        name: "Executive Partner",
        price: "25,000",
        period: "BDT / month",
        description: "We act as your fractional Chief Marketing Officer (CMO) to guide your internal teams.",
        features: ["Weekly Strategy Meetings", "Hiring & Team Building Advice", "Advanced Systems Creation", "Vendor/Agency Vetting Assistance", "Quarterly Roadmap Planning", "Priority Support"],
        bonuses: ["1 In-Person Meeting (Dhaka)"]
      }
    ],
    comparisonTable: [
      { feature: "Dedicated Strategy Sessions", starter: "1-Off", standard: "2 per month", premium: "Weekly" },
      { feature: "Pre-Call Audit", starter: true, standard: true, premium: "Continuous" },
      { feature: "Direct WhatsApp Access", starter: false, standard: true, premium: "Priority Response" },
      { feature: "Internal Team Guidance", starter: false, standard: false, premium: true }
    ],
    process: [
      { step: "01", title: "Initial Assessment", description: "Deep dive into your current business model and operational challenges." },
      { step: "02", title: "Goal Setting", description: "Defining clear, measurable objectives for digital transformation." },
      { step: "03", title: "Data Analysis", description: "Reviewing market trends, customer data, and competitive landscapes." },
      { step: "04", title: "Strategy Formulation", description: "Developing an actionable, step-by-step digital growth roadmap." },
      { step: "05", title: "Implementation", description: "Guiding your team through the execution of the strategic plan." },
      { step: "06", title: "Review & Pivot", description: "Continuous monitoring of outcomes and adjusting tactics as needed." }
    ],
    faqs: [
      { question: "Who will I be talking to?", answer: "You will consult directly with our Founder, Al Fardosh, or our Lead Digital Strategists who have years of experience scaling businesses in Bangladesh." },
      { question: "Is this for execution or just advice?", answer: "Consultation is advisory. If you want us to execute the strategy, you can transition to our marketing/development service packages." },
      { question: "What if I feel I got no value?", answer: "For the entry-level Clarity Call, we offer a 100% money-back guarantee if you don't walk away with a clear, actionable plan." }
    ]
  },
  
  "graphic-design": {
    id: "graphic-design",
    title: "Graphic Design Services",
    subtitle: "High-End Visual Assets That Elevate Your Marketing and Persuade Buyers.",
    heroImage: "https://solutionpointpro.com/wp-content/uploads/2024/12/3D-Visuals-and-Animations-in-Web-Development-A-Deep-Dive-into-Immersive-Design-1024x576.jpg",
    overview: "From stunning social media creatives to billboards and print materials, our design team produces eye-catching graphics that maintain your brand's premium perception across all mediums.",
    benefits: [
      { title: "Stand Out", description: "Stop the scroll with thumb-stopping aesthetics.", icon: <Eye className="w-6 h-6" /> },
      { title: "Brand Consistency", description: "Everything from your flyers to your website looks cohesive.", icon: <Layout className="w-6 h-6" /> },
      { title: "Fast Turnaround", description: "Reliable deliveries so your marketing campaigns never stall.", icon: <Zap className="w-6 h-6" /> }
    ],
    features: [
      { title: "Ad Creatives", description: "High-converting graphics optimized specifically for Facebook and Google Ads.", icon: <Target className="w-6 h-6" /> },
      { title: "Print Design", description: "Brochures, flyers, and banners designed with print-ready specifications.", icon: <Printer className="w-6 h-6" /> },
      { title: "Apparel & Packaging", description: "Custom packaging design that enhances the unboxing experience.", icon: <Package className="w-6 h-6" /> }
    ],
    pricing: [
      {
        name: "Basic Retainer",
        price: "5,000",
        period: "BDT / month",
        description: "For small businesses needing standard graphics monthly.",
        features: ["Up to 10 Designs/mo", "Social Media Graphics", "Basic Photo Editing", "Standard Delivery (3 days)", "2 Revisions per design"],
        badge: "Entry"
      },
      {
        name: "Pro Designer",
        price: "12,000",
        period: "BDT / month",
        description: "Your outsourced design department for growing brands.",
        features: ["Up to 30 Designs/mo", "Ad Creatives & Flyers", "GIF Animations", "Fast Delivery (48 Hrs)", "Unlimited Revisions", "Source Files Provided"],
        bonuses: ["Free Profile Optimization Kit"],
        isFeatured: true,
        badge: "Agency Favorite"
      },
      {
        name: "Unlimited VIP",
        price: "20,000",
        period: "BDT / month",
        description: "High-volume design needs with priority rendering.",
        features: ["Unlimited Design Requests", "Print & Packaging Design", "Complex Photo Manipulation", "Pitch Decks / Presentations", "Priority 24hr Delivery", "Dedicated UI/UX support tasks"],
        bonuses: ["Monthly Strategy Call"]
      }
    ],
    comparisonTable: [
      { feature: "Volume", starter: "10 Designs", standard: "30 Designs", premium: "Unlimited requests (1 at a time)" },
      { feature: "Turnaround Time", starter: "3-4 Days", standard: "48 Hours", premium: "24 Hours Priority" },
      { feature: "Revisions", starter: "2 Rounds", standard: "Unlimited", premium: "Unlimited" },
      { feature: "Source Files Included", starter: false, standard: true, premium: true },
      { feature: "Print/Packaging Design", starter: false, standard: false, premium: true }
    ],
    process: [
      { step: "01", title: "Creative Briefing", description: "Understanding the visual requirements and objectives of your project." },
      { step: "02", title: "Concept Development", description: "Brainstorming and sketching out initial design directions." },
      { step: "03", title: "Digital Drafting", description: "Creating high-fidelity designs using industry-standard tools." },
      { step: "04", title: "Review & Refine", description: "Collaborative review sessions to perfect the design elements." },
      { step: "05", title: "Final Polish", description: "Ensuring impeccable detailing and adherence to brand standards." },
      { step: "06", title: "Asset Delivery", description: "Providing print-ready and web-optimized files in all formats." }
    ],
    faqs: [
      { question: "What counts as 'Unlimited' in the VIP package?", answer: "You can submit as many design tasks as you want. We work on them sequentially (one at a time) and deliver each within 24-48 hours depending on complexity." },
      { question: "Do you design completely custom illustrations?", answer: "Custom digital illustration (like character drawings) is highly complex and handled as a separate custom quote, outside standard graphic design packages." },
      { question: "Are printing costs included?", answer: "No, we only provide the print-ready digital files (.pdf, .ai, .eps). You will need to take these to your local printing press." }
    ]
  }
};
