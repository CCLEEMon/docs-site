import React from 'react';

interface FAQ {
  question: string;
  answer: string;
}

/**
 * FAQ Schema for Google Rich Results & AI Overviews
 * Usage: <FAQSchema faqs={[{question: "...", answer: "..."}]} />
 * Note: faqs are static content authored in MDX, not user input
 */
export default function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };
  // faqs are static MDX content, safe to serialize
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
