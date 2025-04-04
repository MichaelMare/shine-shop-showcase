
import { useState, useEffect } from "react";
import { Product, products } from "../data/products";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))];

  useEffect(() => {
    setAllProducts(products);
    setFilteredProducts(products);
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(product => product.category === category));
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-navy mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of premium products. Filter by category to find exactly what you're looking for.
          </p>
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? "bg-navy text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
