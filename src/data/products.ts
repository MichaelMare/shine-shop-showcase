
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
  details: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Office Chair",
    description: "Ergonomic design with adjustable height and lumbar support for maximum comfort during long work sessions.",
    price: 299.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    featured: true,
    details: [
      "Breathable mesh back",
      "Adjustable armrests",
      "360-degree swivel",
      "Supports up to 300 lbs",
      "5-year warranty"
    ]
  },
  {
    id: "2",
    name: "Modern Coffee Table",
    description: "Sleek minimalist design with durable materials, perfect for any contemporary living space.",
    price: 249.99,
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    featured: true,
    details: [
      "Tempered glass top",
      "Solid wood frame",
      "Easy assembly",
      "Dimensions: 48\" x 24\" x 18\"",
      "Stain-resistant finish"
    ]
  },
  {
    id: "3",
    name: "Wireless Noise-Canceling Headphones",
    description: "Immersive sound experience with advanced noise cancellation technology and long battery life.",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    featured: true,
    details: [
      "40-hour battery life",
      "Active noise cancellation",
      "Bluetooth 5.0",
      "Comfortable over-ear design",
      "Built-in microphone"
    ]
  },
  {
    id: "4",
    name: "Smart LED TV 55\"",
    description: "Ultra HD resolution with smart features for seamless streaming and gaming experiences.",
    price: 699.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
    featured: false,
    details: [
      "4K Ultra HD resolution",
      "Smart TV capabilities",
      "Multiple HDMI ports",
      "Voice control compatible",
      "Wall-mountable design"
    ]
  },
  {
    id: "5",
    name: "Luxury Scented Candle",
    description: "Hand-poured soy wax candle with premium essential oils for a relaxing atmosphere.",
    price: 39.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1603006905393-818cb6d6c452",
    featured: false,
    details: [
      "50-hour burn time",
      "Natural soy wax",
      "Lead-free cotton wick",
      "Premium fragrance oils",
      "Reusable glass container"
    ]
  },
  {
    id: "6",
    name: "Ceramic Plant Pot Set",
    description: "Set of 3 decorative ceramic planters in varying sizes, perfect for indoor plants and herbs.",
    price: 59.99,
    category: "Home Decor",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    featured: false,
    details: [
      "Includes drainage holes",
      "Hand-glazed finish",
      "Frost-resistant",
      "Set of 3 different sizes",
      "Modern geometric design"
    ]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
