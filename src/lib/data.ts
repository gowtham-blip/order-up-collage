// Mock data for the canteen ordering system
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular: boolean;
  options?: {
    name: string;
    choices: { id: string; name: string; price: number }[];
  }[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "main-dishes",
    name: "Main Dishes",
    description: "Hearty meals to keep you going throughout the day"
  },
  {
    id: "sides",
    name: "Sides",
    description: "Perfect complements to your main course"
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Refreshing beverages to quench your thirst"
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet treats to finish your meal"
  }
];

// Conversion rate (approximate): 1 USD = 83 INR (as of 2024)
const USD_TO_INR_RATE = 83;

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Masala Dosa",
    description: "Crispy rice and lentil crepe served with potato masala, coconut chutney, and sambar",
    price: 80,
    image: "https://images.unsplash.com/photo-1630407355601-e1e339167f14?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true,
    options: [
      {
        name: "Add-ons",
        choices: [
          { id: "ghee", name: "Extra Ghee", price: 15 },
          { id: "chutney", name: "Extra Chutney", price: 20 },
          { id: "sambar", name: "Extra Sambar", price: 25 }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in rich, creamy tomato gravy with aromatic spices",
    price: 160,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true,
    options: [
      {
        name: "Spice Level",
        choices: [
          { id: "mild", name: "Mild", price: 0 },
          { id: "medium", name: "Medium", price: 0 },
          { id: "spicy", name: "Spicy", price: 0 }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices",
    price: 180,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true
  },
  {
    id: "4",
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 30,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&h=400&fit=crop",
    category: "sides",
    popular: true,
    options: [
      {
        name: "Quantity",
        choices: [
          { id: "two", name: "2 pieces", price: 0 },
          { id: "four", name: "4 pieces", price: 30 }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Vada Pav",
    description: "Spiced potato fritter in a bun with chutneys",
    price: 40,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true,
    options: [
      {
        name: "Add-ons",
        choices: [
          { id: "extra-chutney", name: "Extra Chutney", price: 10 },
          { id: "cheese", name: "Cheese Slice", price: 15 }
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Chole Bhature",
    description: "Spiced chickpea curry served with deep-fried bread",
    price: 120,
    image: "https://images.unsplash.com/photo-1626678976950-3e9a481ec193?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: false
  },
  {
    id: "7",
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with milk",
    price: 30,
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=500&h=400&fit=crop",
    category: "drinks",
    popular: true,
    options: [
      {
        name: "Size",
        choices: [
          { id: "small", name: "Small", price: 0 },
          { id: "large", name: "Large", price: 15 }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "Lassi",
    description: "Sweet yogurt-based drink with cardamom",
    price: 60,
    image: "https://images.unsplash.com/photo-1626082922482-ac8b9b595e2c?w=500&h=400&fit=crop",
    category: "drinks",
    popular: false
  },
  {
    id: "9",
    name: "Filter Coffee",
    description: "South Indian style coffee with chicory",
    price: 40,
    image: "https://images.unsplash.com/photo-1598811465492-4138d1f4fbee?w=500&h=400&fit=crop",
    category: "drinks",
    popular: true
  },
  {
    id: "10",
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup",
    price: 60,
    image: "https://images.unsplash.com/photo-1605196560547-b2f7281b7097?w=500&h=400&fit=crop",
    category: "desserts",
    popular: true
  },
  {
    id: "11",
    name: "Rasmalai",
    description: "Soft cottage cheese dumplings in saffron milk",
    price: 80,
    image: "https://images.unsplash.com/photo-1634481570432-0753336a4641?w=500&h=400&fit=crop",
    category: "desserts",
    popular: false
  },
  {
    id: "12",
    name: "Jalebi",
    description: "Crispy, syrup-soaked spiral sweets",
    price: 50,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=400&fit=crop",
    category: "desserts",
    popular: true
  }
];
