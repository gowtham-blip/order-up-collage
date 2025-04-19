import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart, CartItem } from "@/lib/cartContext";
import { IndianRupee } from 'lucide-react';

interface CartItemProps {
  item: CartItem;
  index: number;
}

export function CartItemComponent({ item, index }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      updateQuantity(index, newQuantity);
    }
  };

  const calculateItemTotal = () => {
    return Math.round(item.totalPrice * item.quantity);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b gap-4">
      <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
        <img 
          src={item.menuItem.image} 
          alt={item.menuItem.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-lg">{item.menuItem.name}</h3>
        
        {item.selectedOptions && Object.keys(item.selectedOptions).length > 0 && (
          <div className="text-sm text-gray-500 mt-1">
            {Object.entries(item.selectedOptions).map(([category, option]) => (
              <div key={category}>
                {category}: {option.name} {option.price > 0 ? `(+₹${Math.round(option.price)})` : ''}
              </div>
            ))}
          </div>
        )}
        
        {item.specialInstructions && (
          <div className="text-sm text-gray-500 mt-1">
            <span className="font-medium">Special instructions:</span> {item.specialInstructions}
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-2 items-end">
        <div className="text-primary font-bold flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />{calculateItemTotal()}
        </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-destructive"
            onClick={() => removeFromCart(index)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
