import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../data/products";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Info,
  Headphones,
  Monitor,
  Boxes,
  ClipboardList,
  Car,
  Droplet,
  Zap,
  Package,
} from "lucide-react";

interface ProductCardProps {
  product: Product;
}

// Map full category to a short badge label
const getBadgeLabel = (category: string): string => {
  const map: Record<string, string> = {
    "IT Services": "Service",
    "Point of Sale": "POS",
    "Inventory Management": "Inventory",
    "Supply Chain Management": "Supply Chain",
    "Drive-Thru Systems": "Drive-Thru",
    "Utility Meters": "Meter",
  };
  return map[category] ?? category;
};

// Choose an icon based on product category / id
const getCategoryIcon = (product: Product) => {
  const props = { className: "w-20 h-20 text-white/90", strokeWidth: 1.25 };
  switch (product.category) {
    case "IT Services":
      return <Headphones {...props} />;
    case "Point of Sale":
      return <Monitor {...props} />;
    case "Inventory Management":
      return <Boxes {...props} />;
    case "Supply Chain Management":
      return <ClipboardList {...props} />;
    case "Drive-Thru Systems":
      return <Car {...props} />;
    case "Utility Meters":
      return product.id.includes("water") ? <Droplet {...props} /> : <Zap {...props} />;
    default:
      return <Package {...props} />;
  }
};

const ProductCard = ({ product }: ProductCardProps) => {
  // Treat /src/* paths as broken — Vite doesn't serve them at runtime
  const initiallyBroken = !product.image || product.image.startsWith("/src/");
  const [imgBroken, setImgBroken] = useState(initiallyBroken);

  return (
    <div className="product-card">
      <div className="overflow-hidden relative">
        {imgBroken ? (
          <div
            className="w-full h-64 flex items-center justify-center relative"
            style={{ backgroundColor: "#0f3460" }}
            role="img"
            aria-label={`${product.name} icon`}
          >
            {/* subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">{getCategoryIcon(product)}</div>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
            onError={() => setImgBroken(true)}
            loading="lazy"
          />
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2 gap-2">
          <div className="flex-1">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-orange bg-orange/10 px-2 py-1 rounded mb-2">
              {getBadgeLabel(product.category)}
            </span>
            <h3 className="text-lg font-semibold text-navy">{product.name}</h3>
          </div>
          {(product.importable || product.repairable) && (
            <HoverCard>
              <HoverCardTrigger asChild>
                <button className="p-1" aria-label="Product services">
                  <Info size={18} className="text-orange" />
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
        <div className="flex justify-end items-center">
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
