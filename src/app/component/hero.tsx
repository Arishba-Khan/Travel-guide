"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assests/cap.jpg",
    "/assests/masjid.jpg",
    "/assests/bosph2.jpg",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-[#cad2c5] body-font bg-[#0f4c5c]">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-md lg:w-full md:w-1/2 w-4/5 mb-10 md:mb-0 relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="object-cover object-center rounded-lg transition-all duration-1000 ease-in-out transform scale-95 hover:scale-100 shadow-2xl w-full h-auto max-h-[400px] md:max-h-[500px]"
              alt="hero"
              src={images[currentImageIndex]}
              key={currentImageIndex}
            />
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font font-extrabold font-title sm:text-5xl text-3xl mb-4 font-medium text-[#cad2c5] ">
            Explore
            <br className="hidden lg:inline-block" />
            Beauty Of Turkey
          </h1>
          <p className="mb-8 leading-relaxed">
            Turkey is where ancient wonders meet a fresh, modern vibe. Wander
            through Istanbul's iconic skyline, explore the dreamlike valleys of
            Cappadocia, and experience a culture that's rich, warm, and
            effortlessly cool. It's a destination where every moment feels like
            magic.
          </p>
        </div>
      </div>
    </section>
  );
}
