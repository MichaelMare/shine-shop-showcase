
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

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
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-navy">{product.name}</h3>
          {(product.importable || product.repairable) && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="p-1">
                  <Info size={18} className="text-gold" />
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Product Services</h4>
                  <ul className="text-sm space-y-1">
                    {product.importable && <li>✓ Available for import</li>}
                    {product.repairable && <li>✓ Repair services available</li>}
                  </ul>
                </div>
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
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
