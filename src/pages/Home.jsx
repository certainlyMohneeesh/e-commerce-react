import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
  const carouselItems = [
    {
        image: "/slide1.jpg",
        title: "Summer Collection",
        description: "Discover our latest summer arrivals",
        bgColor: "from-orange-400 to-pink-500"
      },
      {
        image: "/slide2.jpg",
        title: "Winter Essentials",
        description: "Stay warm with our winter collection",
        bgColor: "from-blue-400 to-indigo-500"
      },
      {
        image: "/slide3.jpg",
        title: "Special Offers",
        description: "Up to 50% off on selected items",
        bgColor: "from-green-400 to-emerald-500"
      }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="relative group w-full max-w-5xl mx-auto">
            <Carousel className="w-full">
                <CarouselContent>
                {carouselItems.map((item, index) => (
                    <CarouselItem key={index}>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="aspect-video relative overflow-hidden rounded-lg">
                            <img
                            src={item.image}
                            alt={item.title}
                            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                            <div className="text-white">
                                <motion.h3 
                                className="text-3xl font-bold mb-2"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                >
                                {item.title}
                                </motion.h3>
                                <motion.p 
                                className="text-lg"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                >
                                {item.description}
                                </motion.p>
                            </div>
                            </div>
                        </div>
                        </Card>
                    </motion.div>
                    </CarouselItem>
                ))}
                </CarouselContent>

                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                <CarouselPrevious className="bg-pink-600 hover:bg-pink-700 text-white border-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <CarouselNext className="bg-pink-600 hover:bg-pink-700 text-white border-none shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </Carousel>
            </div>

            {/* Update the Featured Categories section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {['Electronics', 'Fashion', 'Home & Living'].map((category) => (
                <motion.div
                key={category}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">
                    {category}
                </h3>
                <Button 
                    variant="outline" 
                    className="w-full border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                >
                    Explore
                </Button>
                </motion.div>
            ))}
            </div>
    </motion.div>
  );
};

export default Home;
