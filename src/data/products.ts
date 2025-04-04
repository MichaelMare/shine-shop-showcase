
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
  },
  {
    id: "hikvision-cctv",
    name: "Hikvision CCTV Surveillance Systems",
    description: "High-quality CCTV surveillance systems from Hikvision, providing advanced security solutions for businesses of all sizes with crystal-clear imaging and smart detection features.",
    price: 1299.99,
    category: "Security Systems",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    details: [
      "HD and 4K resolution cameras",
      "Infrared night vision capability",
      "Smart motion detection",
      "Remote viewing via mobile app",
      "Cloud storage options",
      "Easy-to-use interface with advanced settings"
    ]
  },
  {
    id: "dahua-cctv",
    name: "Dahua Security Solutions",
    description: "Comprehensive security solutions from Dahua Technology, offering advanced video surveillance systems that integrate AI technology for enhanced monitoring and protection.",
    price: 1499.99,
    category: "Security Systems",
    image: "https://images.unsplash.com/photo-1545975456-a4dbe0e4586e?auto=format&fit=crop&w=800&q=80",
    details: [
      "AI-powered security cameras",
      "Ultra HD imaging quality",
      "Thermal imaging capabilities",
      "Facial recognition technology",
      "Intelligent video analytics",
      "Centralized management system"
    ]
  },
  {
    id: "access-control",
    name: "Biometric Access Control Systems",
    description: "Advanced biometric access control systems that provide secure entry management for businesses with multiple authentication methods including fingerprint, facial recognition, and card access.",
    price: 1799.99,
    category: "Access Control",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80",
    details: [
      "Multiple authentication methods",
      "Time attendance tracking",
      "User permission management",
      "Real-time monitoring",
      "Integration with other security systems",
      "Mobile access capabilities"
    ]
  },
  {
    id: "intercom-systems",
    name: "IP Intercom Systems",
    description: "Modern IP intercom systems for efficient communication within your business premises, featuring high-definition video, seamless integration with access control, and mobile connectivity.",
    price: 899.99,
    category: "Communication Systems",
    image: "https://images.unsplash.com/photo-1585731601359-faba3d8a7450?auto=format&fit=crop&w=800&q=80",
    details: [
      "HD video and audio quality",
      "Remote door release functionality",
      "Mobile app connectivity",
      "Multi-location support",
      "Integration with security systems",
      "Weather-resistant outdoor stations"
    ]
  },
  {
    id: "fire-detection",
    name: "Advanced Fire Detection Systems",
    description: "Cutting-edge fire detection and alarm systems that provide early warning and comprehensive protection for your business premises, with smart sensors and automated emergency response.",
    price: 2299.99,
    category: "Safety Systems",
    image: "https://images.unsplash.com/photo-1610935591850-9a3bf358c4a2?auto=format&fit=crop&w=800&q=80",
    details: [
      "Early smoke and heat detection",
      "Addressable fire alarm panels",
      "Automated emergency notifications",
      "Remote monitoring capabilities",
      "Voice evacuation systems",
      "Compliant with safety regulations"
    ]
  }
];

// Helper function to get products for featured section
export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 6); // Return first 6 products for featured section
};

// Helper function to get a product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
