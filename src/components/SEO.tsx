import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
}

export default function SEO({ title, description, keywords, canonical }: SEOProps) {
  const siteName = "Solution Point Pro";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://solutionpointpro.com/logo.png" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://solutionpointpro.com/logo.png" />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Schema.org for Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": siteName,
          "description": description,
          "url": canonical || "https://solutionpointpro.com",
          "telephone": "+8801741516454",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dhaka",
            "addressCountry": "BD"
          },
          "priceRange": "৳৳"
        })}
      </script>
    </Helmet>
  );
}
