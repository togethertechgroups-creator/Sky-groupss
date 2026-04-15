import React from 'react';
import { Helmet } from 'react-helmet-async';
import JsonLd from './JsonLd';

export default function SEOHead({
  title = "Sky Groups",
  description = "A premium multi-service organization based in Tamil Nadu.",
  canonical = "https://www.skygroupss.in",
  ogImage = "/og-image.jpg",
  schema = null
}) {
  // SEO Validation for Dev Mode
  if (import.meta.env.DEV) {
    if (title.length > 60) {
      console.warn(`SEO Warning: Title too long (${title.length} chars): ${title}`);
    }
    if (description.length > 160) {
      console.warn(`SEO Warning: Description too long (${description.length} chars)`);
    } else if (description.length < 140) {
      console.warn(`SEO Warning: Description too short (${description.length} chars)`);
    }
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:see_also" content="https://www.facebook.com/skyagroups" />
      <meta property="og:see_also" content="https://www.instagram.com/skyagroups" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@skyagroups" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
