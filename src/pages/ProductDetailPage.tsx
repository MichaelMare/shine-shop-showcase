
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Product, getProductById } from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate("/not-found");
      }
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Product not found.</p>
        <Link to="/products" className="text-navy hover:underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb navigation */}
        <nav className="mb-8">
          <ol className="flex flex-wrap text-sm text-gray-600">
            <li className="after:content-['/'] after:mx-2">
              <Link to="/" className="hover:text-navy">Home</Link>
            </li>
            <li className="after:content-['/'] after:mx-2">
              <Link to="/products" className="hover:text-navy">Products</Link>
            </li>
            <li className="text-gray-900 font-medium truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product image */}
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product details */}
          <div>
            <h1 className="text-navy mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6 text-lg">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Product Features:</h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-2">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {(product.importable || product.repairable) && (
              <div className="mb-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Services Available:</h3>
                <ul className="space-y-1">
                  {product.importable && (
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Available for import</span>
                    </li>
                  )}
                  {product.repairable && (
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Repair services available</span>
                    </li>
                  )}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Contact Us About This Product
              </button>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-sm text-gray-600">
                Category: <span className="font-medium">{product.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
