
import { useState, useEffect } from "react";
import { Product, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { SkeletonCard } from "../components/ui/skeleton-card";

const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);

  // Get unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))];

  useEffect(() => {
    // Simulate loading delay for demonstration
    setTimeout(() => {
      setAllProducts(products);
      setFilteredProducts(products);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = allProducts;
    
    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [allProducts, selectedCategory, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-navy mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of premium products. Filter by category or search to find exactly what you're looking for.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-8 max-w-md mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Category filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-navy text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              {searchQuery 
                ? `No products found matching "${searchQuery}"`
                : "No products found in this category."
              }
            </p>
            {searchQuery && (
              <button
                onClick={() => handleSearch("")}
                className="mt-4 text-navy hover:underline"
              >
                Clear search
              </button>
            )}
          </div>
        )}

        {/* Results summary */}
        {!loading && filteredProducts.length > 0 && (
          <div className="text-center mt-8 text-sm text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
