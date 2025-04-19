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
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true,
    options: [
      {
        name: "Add-ons",
        choices: [
          { id: "cheese", name: "Cheese", price: 1.00 },
          { id: "bacon", name: "Bacon", price: 1.50 },
          { id: "avocado", name: "Avocado", price: 2.00 }
        ]
      },
      {
        name: "Size",
        choices: [
          { id: "regular", name: "Regular", price: 0 },
          { id: "double", name: "Double", price: 3.50 }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Vegetarian Wrap",
    description: "Fresh vegetables and hummus wrapped in a whole wheat tortilla",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: false,
    options: [
      {
        name: "Dressing",
        choices: [
          { id: "tahini", name: "Tahini", price: 0 },
          { id: "yogurt", name: "Yogurt Dressing", price: 0 }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Chicken Caesar Salad",
    description: "Crisp romaine lettuce, grilled chicken, parmesan, and croutons",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true
  },
  {
    id: "4",
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, and basil on a thin crust",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500&h=400&fit=crop",
    category: "main-dishes",
    popular: true,
    options: [
      {
        name: "Crust",
        choices: [
          { id: "thin", name: "Thin", price: 0 },
          { id: "thick", name: "Thick", price: 1.00 }
        ]
      }
    ]
  },
  {
    id: "5",
    name: "French Fries",
    description: "Crispy, golden fries served with ketchup",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&h=400&fit=crop",
    category: "sides",
    popular: true,
    options: [
      {
        name: "Size",
        choices: [
          { id: "small", name: "Small", price: 0 },
          { id: "large", name: "Large", price: 1.50 }
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Garden Salad",
    description: "Mixed greens, tomatoes, cucumbers, and balsamic vinaigrette",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&h=400&fit=crop",
    category: "sides",
    popular: false
  },
  {
    id: "7",
    name: "Soft Drink",
    description: "Choose from a variety of refreshing sodas",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1603394630850-69b3ca8025c8?w=500&h=400&fit=crop",
    category: "drinks",
    popular: true,
    options: [
      {
        name: "Size",
        choices: [
          { id: "small", name: "Small", price: 0 },
          { id: "medium", name: "Medium", price: 0.50 },
          { id: "large", name: "Large", price: 1.00 }
        ]
      }
    ]
  },
  {
    id: "8",
    name: "Iced Tea",
    description: "Freshly brewed and sweetened to perfection",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1556679343-c1917e0cbcc9?w=500&h=400&fit=crop",
    category: "drinks",
    popular: false
  },
  {
    id: "9",
    name: "Coffee",
    description: "Hot, aromatic coffee to keep you energized",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&h=400&fit=crop",
    category: "drinks",
    popular: true
  },
  {
    id: "10",
    name: "Chocolate Brownie",
    description: "Rich, fudgy brownie with a scoop of vanilla ice cream",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=400&fit=crop",
    category: "desserts",
    popular: true
  },
  {
    id: "11",
    name: "Fruit Parfait",
    description: "Layers of fresh fruit, yogurt, and granola",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=400&fit=crop",
    category: "desserts",
    popular: false
  },
  {
    id: "12",
    name: "Cheesecake",
    description: "Creamy New York style cheesecake with berry compote",
    price: 6.49,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&h=400&fit=crop",
    category: "desserts",
    popular: true
  }
];

