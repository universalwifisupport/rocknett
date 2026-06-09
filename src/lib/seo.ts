// SEO and Schema Markup Utilities

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rocknet",
  "url": "https://rocknett.com",
  "logo": "https://rocknett.com/logo.png",
  "description": "Authorized third-party Internet Service Provider offering high-speed cable internet, TV, and streaming services.",
  "sameAs": [
    "https://www.facebook.com/rocknett",
    "https://twitter.com/rocknett",
    "https://www.linkedin.com/company/rocknett"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+18884788407",
    "email": "support@rocknett.com"
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rocknet",
  "image": "https://rocknett.com/logo.png",
  "description": "Authorized third-party Internet Service Provider",
  "url": "https://rocknett.com",
  "telephone": "+18884788407",
  "email": "support@rocknett.com",
  "areaServed": "US",
  "availableLanguage": ["en"],
  "priceRange": "$$"
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://rocknett.com${item.url}`
  }))
});

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  datePublished: string;
  author: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.headline,
  "description": article.description,
  "datePublished": article.datePublished,
  "author": {
    "@type": "Organization",
    "name": article.author
  }
});
