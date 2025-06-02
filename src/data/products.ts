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
  },
  {
    id: "pixelpoint-pos",
    name: "PixelPoint POS",
    description: "PAR PixelPoint® POS offers a full, out-of-the-box restaurant management solution that is feature rich, secure, flexible, and scalable. From Table Service and Fine Dining to Quick Service, PAR PixelPoint® empowers aspiring and entrepreneurial restaurant operators to meet hospitality business needs.",
    price: 1999.99,
    category: "Point of Sale",
    image: "/lovable-uploads/fd391741-9433-444f-b91d-4edf4aa5db87.png",
    details: [
      "130+ comprehensive restaurant features for any size operation",
      "Hybrid cloud format with on-premise POS server for reliability",
      "Advanced Menu Management and standardization capabilities",
      "Advanced KVS (Kitchen Video System) functionality",
      "Labor and Inventory reporting with real-time analytics",
      "Member/Customer database management",
      "Store operations dashboards and scheduled reports",
      "Integration network with 50+ partners across all regions",
      "Comprehensive Loss Prevention features to prevent theft and waste",
      "Above Store Cloud Capabilities for multi-unit management",
      "Online ordering APIs for seamless digital integration",
      "Operates offline while preserving sales records",
      "Backed up data at every stage with enterprise security"
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
    name: "PAR Drive-thru Solutions",
    description: "Improve service velocity and accuracy in your drive-thru. Supercharge your most profitable service channel with our guest-friendly drive-thru solution. PAR Drive-Thru is a complete solution that helps your crew and your brand deliver fast, accurate service and the convenience that guests demand.",
    price: 1899.99,
    category: "Drive-Thru Systems",
    image: "/lovable-uploads/03223f74-d68a-428b-a29b-5e126c772a26.png",
    details: [
      "Maximize throughput with the intuitive PAR Drive-Thru Timer",
      "Gamify speed-of-service improvements with crew-facing dashboard that promotes competition among stores",
      "Improve order accuracy with crystal-clear headset communications",
      "Complete drive-thru solution for fast, accurate service",
      "Guest-friendly interface that enhances customer experience",
      "Crew management tools to optimize workflow efficiency",
      "Real-time performance monitoring and analytics",
      "Integration capabilities with existing POS systems"
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
