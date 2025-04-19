import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuItem } from "@/lib/data";
import { IndianRupee } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg line-clamp-1">{item.name}</h3>
          <span className="font-bold text-primary flex items-center">
            <IndianRupee className="h-4 w-4 mr-1" />
            {Math.round(item.price)}
          </span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 h-10">{item.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/item/${item.id}`} className="w-full">
          <Button variant="default" className="w-full">View Item</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
