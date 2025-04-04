
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  details: string[];
};

// Sample product data
export const products: Product[] = [
  {
    id: "pixelpoint-pos",
    name: "PixelPoint POS",
    description: "A comprehensive point-of-sale solution designed for restaurants and retail businesses. PixelPoint POS combines powerful functionality with an intuitive interface for seamless operations.",
    price: 1999.99,
    category: "Point of Sale",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    details: [
      "User-friendly touchscreen interface",
      "Integrated payment processing",
      "Inventory management and reporting",
      "Employee scheduling and management",
      "Customer loyalty program integration",
      "Cloud-based data storage and backup"
    ]
  },
  {
    id: "marketman",
    name: "MarketMan",
    description: "MarketMan is an inventory management and procurement platform that helps restaurants and food service businesses optimize their supply chain, reduce costs, and minimize waste.",
    price: 1499.99,
    category: "Inventory Management",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
    details: [
      "Real-time inventory tracking",
      "Automated purchase orders",
      "Vendor management and price comparison",
      "Recipe costing and menu engineering",
      "Waste tracking and analytics",
      "Mobile app for inventory counts"
    ]
  },
  {
    id: "procurant",
    name: "Procurant",
    description: "Procurant provides cloud-based solutions for the global food supply chain, connecting buyers, suppliers, and transportation providers to streamline ordering, fulfillment, and payment processes.",
    price: 2499.99,
    category: "Supply Chain Management",
    image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?auto=format&fit=crop&w=800&q=80",
    details: [
      "End-to-end supply chain visibility",
      "Quality compliance management",
      "Advanced order management",
      "Real-time transportation tracking",
      "Supplier performance analytics",
      "Mobile accessibility for on-the-go management"
    ]
  }
];

// Helper function to get products for featured section
export const getFeaturedProducts = (): Product[] => {
  return products;
};

// Helper function to get a product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
