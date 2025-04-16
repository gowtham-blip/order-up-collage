
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { menuItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export function FeaturedItems() {
  const popularItems = menuItems.filter(item => item.popular);
  
  return (
    <div className="py-8 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Today's Specials</h2>
        <p className="text-center text-gray-600 mb-8">Our most popular items that customers love</p>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="pb-10"
        >
          {popularItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <Link to={`/item/${item.id}`}>
                    <Button className="w-full">Order Now</Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
