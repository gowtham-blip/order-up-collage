import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CartItemComponent } from "@/components/CartItem";
import { Navbar } from "@/components/Navbar";
import { useCart } from "@/lib/cartContext";
import { useToast } from "@/hooks/use-toast";
import { IndianRupee } from 'lucide-react';

const Cart = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Simulating checkout process
    setTimeout(() => {
      clearCart();
      toast({
        title: "Order placed successfully!",
        description: "Your order has been placed and will be ready soon.",
      });
      navigate("/order-confirmation");
      setIsProcessing(false);
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to menu
            </Link>
            
            <div className="text-center py-16">
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
              <p className="text-gray-500 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Button asChild>
                <Link to="/">Browse Menu</Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:underline mb-6">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to menu
          </Link>
          
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Your Order</h1>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-destructive"
              onClick={() => {
                if (confirm("Are you sure you want to clear your cart?")) {
                  clearCart();
                  toast({
                    title: "Cart cleared",
                    description: "All items have been removed from your cart.",
                  });
                }
              }}
            >
              <Trash2 className="mr-1 h-4 w-4" />
              Clear Cart
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              {cart.map((item, index) => (
                <CartItemComponent key={index} item={item} index={index} />
              ))}
            </div>
            
            <Separator />
            
            <div className="p-6">
              <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span className="flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          {cartTotal.toFixed(2)}
        </span>
      </div>
      
      <div className="flex justify-between mb-2">
        <span>Service Fee</span>
        <span className="flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          {(cartTotal * 0.05).toFixed(2)}
        </span>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between font-bold text-lg mb-6">
        <span>Total</span>
        <span className="flex items-center">
          <IndianRupee className="h-4 w-4 mr-1" />
          {(cartTotal * 1.05).toFixed(2)}
        </span>
      </div>
              
              <Button 
                className="w-full"
                size="lg"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                By placing your order, you agree to our Terms of Service and Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
