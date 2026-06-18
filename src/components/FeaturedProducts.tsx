
import { useEffect, useState } from "react";
import { Product, getFeaturedProducts } from "../data/products";
import ProductCard from "./ProductCard";
import { SkeletonCard } from "./ui/skeleton-card";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setFeaturedProducts(getFeaturedProducts());
      setLoading(false);
    }, 300);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">What we do</span>
          <h2 className="mt-3 text-navy">Solutions we implement and support</h2>
          <p className="mt-4 text-lg text-slate-600">
            The core systems we deploy for retail and hospitality operators &mdash;
            each one set up, integrated and maintained by our own team.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
