
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title = "Kairos IT Services", 
  description = "Premium IT solutions including POS systems, inventory management, utility meters, and PAR 3M products. Authorized importer and repair center.",
  keywords = "IT services, POS systems, PixelPoint, MarketMan, inventory management, utility meters, PAR 3M, restaurant technology",
  canonical,
  ogImage = "/kairos-logo.png"
}: SEOHeadProps) => {
  const fullTitle = title === "Kairos IT Services" ? title : `${title} | Kairos IT Services`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Kairos IT Services",
          "description": description,
          "url": window.location.origin,
          "logo": `${window.location.origin}/kairos-logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-KAIROS",
            "contactType": "customer service"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
