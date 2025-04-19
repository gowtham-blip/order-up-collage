import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/lib/cartContext";
import { menuItems, MenuItem } from "@/lib/data";
import { IndianRupee } from 'lucide-react';

interface SelectedOptions {
  [key: string]: {
    id: string;
    name: string;
    price: number;
  };
}

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({});
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const { toast } = useToast();
  const { addToCart } = useCart();

  useEffect(() => {
    const foundItem = menuItems.find(item => item.id === id);
    if (foundItem) {
      setItem(foundItem);
      
      // Initialize selected options with default values
      const initialOptions: SelectedOptions = {};
      if (foundItem.options) {
        foundItem.options.forEach(option => {
          if (option.choices.length > 0) {
            initialOptions[option.name] = option.choices[0];
          }
        });
      }
      setSelectedOptions(initialOptions);
      
      // Calculate initial price
      calculateTotalPrice(foundItem, 1, initialOptions);
    }
  }, [id]);

  const calculateTotalPrice = (
    menuItem: MenuItem | null, 
    qty: number, 
    options: SelectedOptions
  ) => {
    if (!menuItem) return;
    
    let total = menuItem.price;
    
    // Add option prices
    Object.values(options).forEach(option => {
      total += option.price;
    });
    
    // Multiply by quantity
    total *= qty;
    
    setTotalPrice(total);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      calculateTotalPrice(item, newQuantity, selectedOptions);
    }
  };

  const handleOptionChange = (category: string, choice: { id: string; name: string; price: number }) => {
    const newOptions = {
      ...selectedOptions,
      [category]: choice
    };
    setSelectedOptions(newOptions);
    calculateTotalPrice(item, quantity, newOptions);
  };

  const handleAddToCart = () => {
    if (!item) return;
    
    addToCart({
      menuItem: item,
      quantity,
      selectedOptions,
      specialInstructions: specialInstructions.trim() || undefined,
      totalPrice
    });
    
    toast({
      title: "Added to cart",
      description: `${quantity} × ${item.name} added to your order`,
    });
  };

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <p>Item not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to menu
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{item.name}</h1>
            <p className="text-xl font-bold text-primary mb-4 flex items-center">
              <IndianRupee className="h-5 w-5 mr-1" />
              {Math.round(item.price)}
            </p>
            <p className="text-gray-600 mb-6">{item.description}</p>

            {item.options && item.options.map((option) => (
              <div key={option.name} className="mb-6">
                <h3 className="font-medium mb-2">{option.name}</h3>
                <RadioGroup 
                  value={selectedOptions[option.name]?.id} 
                  onValueChange={(value) => {
                    const selectedChoice = option.choices.find(choice => choice.id === value);
                    if (selectedChoice) {
                      handleOptionChange(option.name, selectedChoice);
                    }
                  }}
                >
                  {option.choices.map((choice) => (
                    <div key={choice.id} className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value={choice.id} id={`${option.name}-${choice.id}`} />
                      <Label htmlFor={`${option.name}-${choice.id}`} className="flex justify-between w-full">
                        <span>{choice.name}</span>
                        {choice.price > 0 && (
                          <span className="flex items-center">
                            <IndianRupee className="h-4 w-4 mr-1" />
                            {Math.round(choice.price)}
                          </span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <div className="mb-6">
              <h3 className="font-medium mb-2">Special Instructions</h3>
              <Textarea 
                placeholder="Any special requests or allergen concerns?"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="resize-none"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 rounded-none"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  className="flex-1 h-10"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart - <IndianRupee className="mx-1 h-4 w-4" />{Math.round(totalPrice)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ItemDetail;
