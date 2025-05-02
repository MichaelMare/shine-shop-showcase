export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  details: string[];
  importable?: boolean;
  repairable?: boolean;
};

// Sample product data
export const products: Product[] = [
  {
    id: "pixelpoint-pos",
    name: "PixelPoint POS",
    description: "A comprehensive point-of-sale solution designed for restaurants and retail businesses. PixelPoint POS combines powerful functionality with an intuitive interface for seamless operations.",
    price: 1999.99,
    category: "Point of Sale",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
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
    name: "Procurant Task & Sensors",
    description: "Procurant Task and Sensors provides advanced monitoring solutions and task management for the global food supply chain, ensuring food safety, quality compliance, and operational efficiency.",
    price: 2499.99,
    category: "Supply Chain Management",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    details: [
      "Monnit temperature and humidity monitoring sensors",
      "Real-time temperature monitoring technology",
      "Automated task scheduling and verification",
      "Food safety compliance tracking",
      "Quality assurance checklists",
      "Mobile task management application",
      "Customizable alerts and notifications"
    ]
  },
  {
    id: "par-3m",
    name: "PAR 3M Solutions",
    description: "Advanced PAR 3M technology solutions for modern businesses, offering streamlined operations, enhanced efficiency, and robust security features.",
    price: 1899.99,
    category: "Business Solutions",
    image: "https://images.unsplash.com/photo-1556742031-ebd9a1ce3ff8?auto=format&fit=crop&w=800&q=80",
    details: [
      "3M Drive-thru communication systems",
      "Digital drive-thru menu boards",
      "Comprehensive business management tools",
      "Integrated payment processing",
      "Advanced security protocols",
      "Customizable business workflows",
      "Real-time analytics and reporting"
    ],
    importable: true,
    repairable: true
  },
  {
    id: "water-meters",
    name: "Water Meters",
    description: "High-precision water meters for residential and commercial applications, providing accurate measurement and monitoring of water consumption.",
    price: 299.99,
    category: "Utility Meters",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    details: [
      "Digital water meter displays",
      "Precision measurement technology",
      "Durable and weather-resistant design",
      "Easy installation and maintenance",
      "Compatible with smart monitoring systems",
      "Low-flow detection capability",
      "Long service life with minimal maintenance"
    ],
    importable: true,
    repairable: true
  },
  {
    id: "electrical-meters",
    name: "Electrical Meters",
    description: "Advanced electrical meters for monitoring and measuring electricity consumption in residential, commercial, and industrial settings.",
    price: 349.99,
    category: "Utility Meters",
    image: "https://images.unsplash.com/photo-1565138146061-e29b079736c0?auto=format&fit=crop&w=800&q=80",
    details: [
      "Digital electrical meter displays",
      "Accurate electricity consumption measurement",
      "Smart grid compatibility",
      "Remote monitoring capabilities",
      "Tamper-proof design",
      "Digital display for easy reading",
      "Power quality monitoring features"
    ],
    importable: true,
    repairable: true
  },
  {
    id: "it-support-networking",
    name: "IT Support & Networking",
    description: "Comprehensive IT support and networking solutions for businesses of all sizes. Our expert services include hardware troubleshooting, software installation, and network optimization to keep your business running smoothly.",
    price: 1299.99,
    category: "IT Services",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    details: [
      "24/7 IT support and troubleshooting",
      "Network setup and optimization",
      "Hardware procurement and installation",
      "Software licensing and management",
      "Security implementation and monitoring",
      "Business continuity planning",
      "Cloud integration services",
      "Employee training and support"
    ],
    importable: true,
    repairable: true
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
