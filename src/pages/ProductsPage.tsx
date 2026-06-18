import { useState, useEffect } from "react";
import { Product, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { SkeletonCard } from "../components/ui/skeleton-card";
import SEOHead from "../components/SEOHead";
import Breadcrumb from "../components/Breadcrumb";

const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const breadcrumbItems = [
    { label: "Solutions" }
  ];

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
    <div className="py-12 md:py-16">
      <SEOHead 
        title="Solutions"
        description="The systems we implement and support — PixelPoint POS, inventory management, supply-chain sensors, drive-thru, and utility metering — set up and maintained by our own team."
        keywords="POS systems, PixelPoint, inventory management, PAR, drive-thru systems, utility meters, IT services South Africa"
      />
      
      <div className="container mx-auto px-4">
        {/* Breadcrumb navigation */}
        <Breadcrumb items={breadcrumbItems} className="mb-8" />
        
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">What we do</span>
          <h1 className="mt-3 text-navy">Solutions we implement &amp; support</h1>
          <p className="mt-4 text-lg text-slate-600">
            The core systems we deploy for retail and hospitality operators. Filter by
            category or search to find what fits your operation.
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-8 max-w-md">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Category filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-navy text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
                : "No solutions found in this category."
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
            Showing {filteredProducts.length} of {allProducts.length} solutions
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
