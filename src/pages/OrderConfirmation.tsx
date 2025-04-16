
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useCart } from "@/lib/cartContext";

const OrderConfirmation = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  
  useEffect(() => {
    // Generate random order number
    setOrderNumber(`ORD-${Math.floor(Math.random() * 10000)}`);
    
    // Set random wait time between 15-30 minutes
    const waitTime = Math.floor(Math.random() * 16) + 15;
    setEstimatedTime(`${waitTime} minutes`);
    
    // Redirect if they go to this page directly without placing an order
    if (cart.length !== 0) {
      navigate("/");
    }
  }, [cart.length, navigate]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-primary/10 inline-block p-3 rounded-full mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Thank You For Your Order!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been received and is being prepared. 
            You will receive a notification when it's ready for pickup.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex justify-between mb-4 pb-4 border-b">
              <span className="text-gray-500">Order Number</span>
              <span className="font-medium">{orderNumber}</span>
            </div>
            
            <div className="flex justify-between mb-4 pb-4 border-b">
              <span className="text-gray-500">Estimated Pickup Time</span>
              <span className="font-medium">{estimatedTime}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500">Pickup Location</span>
              <span className="font-medium">Main Campus Canteen</span>
            </div>
          </div>
          
          <Button asChild className="w-full">
            <Link to="/" className="inline-flex items-center justify-center">
              Return to Menu
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default OrderConfirmation;
