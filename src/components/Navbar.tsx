
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, LogIn } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary">OrderUp!</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Menu
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-primary font-medium">
            About
          </Link>
          <Link to="/cart" className="relative">
            <Button variant="outline" className="flex items-center gap-2">
              <ShoppingCart size={20} />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/signin">
            <Button variant="outline" className="flex items-center gap-2">
              <LogIn size={20} />
              <span>Sign In</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md border-t">
            <div className="flex flex-col p-4 space-y-3">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart size={20} />
                <span>Cart {cart.length > 0 ? `(${cart.length})` : ""}</span>
              </Link>
              <Link 
                to="/signin" 
                className="flex items-center space-x-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn size={20} />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
