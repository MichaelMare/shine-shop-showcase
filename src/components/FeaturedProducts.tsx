
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-navy mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our handpicked selection of premium products, chosen for their exceptional quality, 
            design, and value. These featured items represent the best of what we offer.
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
