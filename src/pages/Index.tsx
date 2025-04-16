
import { Navbar } from "@/components/Navbar";
import { FeaturedItems } from "@/components/FeaturedItems";
import { CategorySection } from "@/components/CategorySection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Order Up! Campus Canteen
              </h1>
              <p className="text-lg mb-6">
                Fresh, delicious meals delivered quickly to your location on campus. 
                Browse our menu and place your order today!
              </p>
              <a 
                href="#menu" 
                className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                View Menu
              </a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-background">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        <section id="featured" className="py-8">
          <FeaturedItems />
        </section>

        <section id="menu" className="container mx-auto px-4 py-8">
          <CategorySection />
        </section>

        <footer className="bg-secondary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Order Up! Canteen</h3>
                <p>Fresh, delicious food delivered quickly on campus.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Hours</h3>
                <p>Monday - Friday: 7:30 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 6:00 PM</p>
                <p>Sunday: 9:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p>Phone: (555) 123-4567</p>
                <p>Email: order@campuscanteen.edu</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/30 text-center">
              <p>© {new Date().getFullYear()} Order Up! Campus Canteen. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
