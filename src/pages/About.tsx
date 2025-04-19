import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our Canteen</h1>
              <p className="text-lg mb-6">
                We're dedicated to providing fresh, delicious food to the campus community. 
                Learn more about our mission and services.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-background">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Order Up! Campus Canteen was established in 2010 with a mission to provide 
                high-quality, nutritious meals to students and faculty at affordable prices.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small café with limited options has grown into a full-service 
                canteen offering a diverse menu that caters to various dietary preferences and requirements.
              </p>
              <p className="text-gray-600 mb-6">
                We pride ourselves on using fresh, locally sourced ingredients whenever possible 
                and preparing our food with care to ensure the best quality and taste.
              </p>
              <Button asChild>
                <Link to="/" className="inline-flex items-center">
                  View Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=600&h=400&fit=crop" 
                alt="Our canteen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.5458C20.4771 15.5458 19.9542 15.6972 19.5 16C18.5917 16.6056 17.4083 16.6056 16.5 16C15.5917 15.3944 14.4083 15.3944 13.5 16C12.5917 16.6056 11.4083 16.6056 10.5 16C9.59167 15.3944 8.40833 15.3944 7.5 16C6.59167 16.6056 5.40833 16.6056 4.5 16C4.04584 15.6972 3.52292 15.5458 3 15.5458M3 15.5458V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15.5458M3 19.5458C3.52292 19.5458 4.04584 19.3944 4.5 19C5.40833 18.3944 6.59167 18.3944 7.5 19C8.40833 19.6056 9.59167 19.6056 10.5 19C11.4083 18.3944 12.5917 18.3944 13.5 19C14.4083 19.6056 15.5917 19.6056 16.5 19C17.4083 18.3944 18.5917 18.3944 19.5 19C19.9542 19.3028 20.4771 19.4542 21 19.4542V19.5458" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our ingredients or preparation methods, 
                  ensuring every meal is fresh and delicious.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Affordability</h3>
                <p className="text-gray-600">
                  We believe good food shouldn't break the bank. Our menu is designed 
                  to offer excellent value without sacrificing quality.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 22h18M19 10l-6-6m0 0L7 10m6-6v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to reducing our environmental footprint by using 
                  eco-friendly packaging and locally sourced ingredients.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start mb-6">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-gray-600">RGUKT RKV KADAPA</p>
                    <p className="text-gray-600">Academic Block</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Hours of Operation</h3>
                    <p className="text-gray-600">Monday - Friday: 7:30 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-gray-600">+91 9001234323</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-gray-600">order@campuscanteen.edu</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Remove the map placeholder */}
            <div className="hidden md:block"></div>
          </div>
        </section>

        <footer className="bg-secondary text-white py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Order Up! Campus Canteen</h3>
              <p>© {new Date().getFullYear()} Order Up! Campus Canteen. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default About;
