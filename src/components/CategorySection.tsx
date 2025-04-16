
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MenuItemCard } from "@/components/MenuItemCard";
import { categories, menuItems } from "@/lib/data";

export function CategorySection() {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
      
      <Tabs defaultValue={categories[0].id} onValueChange={setActiveCategory}>
        <div className="mx-auto max-w-2xl mb-6">
          <TabsList className="w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category.id 
                    ? "bg-primary text-white" 
                    : "bg-secondary/10 hover:bg-secondary/20"
                }`}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-0">
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-xl mx-auto">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter(item => item.category === category.id)
                .map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
