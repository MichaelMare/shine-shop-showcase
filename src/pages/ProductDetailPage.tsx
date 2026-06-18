import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product, getProductById } from "../data/products";
import { LoadingSpinner } from "../components/ui/loading-spinner";
import SEOHead from "../components/SEOHead";
import Breadcrumb from "../components/Breadcrumb";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Simulate loading delay
      setTimeout(() => {
        const foundProduct = getProductById(id);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          navigate("/not-found");
        }
        setLoading(false);
      }, 300);
    } else {
      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Product not found.</p>
        <Link to="/products" className="text-navy hover:underline mt-4 inline-block">
          Back to Solutions
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Solutions", href: "/products" },
    { label: product.name }
  ];

  return (
    <div className="py-12">
      <SEOHead 
        title={product.name}
        description={product.description}
        keywords={`${product.name}, ${product.category}, IT services, ${product.importable ? 'import services' : ''} ${product.repairable ? 'repair services' : ''}`.trim()}
      />
      
      <div className="container mx-auto px-4">
        {/* Breadcrumb navigation */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product image / fallback */}
          <div className="flex items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-navy p-8 min-h-[320px]">
            {(!product.image || product.image.startsWith("/src/")) ? (
              <div
                className="flex h-full w-full items-center justify-center rounded-lg"
                role="img"
                aria-label={`${product.name}`}
              >
                <span className="font-display text-2xl font-semibold text-white/90">{product.name}</span>
              </div>
            ) : (
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 max-w-full object-contain"
                loading="lazy"
              />
            )}
          </div>

          {/* Product details */}
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1 className="mt-3 text-navy">{product.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{product.description}</p>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-navy">What it covers</h3>
              <ul className="mt-3 space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(product.importable || product.repairable) && (
              <div className="mt-8 rounded-xl bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-navy">Services available</h3>
                <ul className="mt-2 space-y-1.5 text-slate-600">
                  {product.importable && (
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Available for import
                    </li>
                  )}
                  {product.repairable && (
                    <li className="flex items-center gap-2">
                      <span className="text-orange">✓</span> Repair services available
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-orange px-7 py-3.5 font-semibold text-white transition-colors duration-200 hover:bg-orange-dark"
              >
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
