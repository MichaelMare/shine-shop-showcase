
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-navy mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {product.description.length > 100 
            ? `${product.description.substring(0, 100)}...` 
            : product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-navy">${product.price.toFixed(2)}</span>
          <Link 
            to={`/products/${product.id}`}
            className="px-4 py-2 bg-navy text-white rounded hover:bg-navy-light transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
