"use client";
import React, { useState, useEffect } from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";

const Reason = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/assests/galata.jpg",
    "/assests/cap2.jpg",
    "/assests/pamu.jpg",
    "/assests/mosque.jpg",
    "/assests/antalya.jpg",
  ];

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="reason">
      <section className="text-[#0f4c5c] body-font bg-[#cad2c5]">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            {/* Information and Icons */}
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {[
                {
                  title: "Istanbul - Where East Meets West",
                  description:
                    "Stroll through Istanbul's mesmerizing bazaars, marvel at the Blue Mosque's architecture, and soak in panoramic views from Galata Tower. This city is a blend of Europe and Asia, offering endless culture and history.",
                },
                {
                  title: "Cappadocia - The Land of Fairy Chimneys",
                  description:
                    "Experience Cappadocia's surreal landscapes from above in a hot air balloon, gliding over the iconic “fairy chimneys” and ancient cave dwellings. It's a dreamlike landscape unlike anywhere else in the world.",
                },
                {
                  title: "Pamukkale - The Cotton Castle",
                  description:
                    "Known for its striking white terraces, Pamukkale is a natural wonder where you can soak in warm mineral-rich pools cascading down the hillside. This surreal, snow-like landscape is a must-see for relaxation and beauty.",
                },
              ].map((item, index) => (
                <div className="flex relative pb-12" key={index}>
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-[#0f4c5c] pointer-events-none" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0f4c5c] inline-flex items-center justify-center text-white relative z-10">
                    <VscDebugBreakpointLog color="#cad2c5" />
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm mb-1 tracking-wider">
                      {item.title}
                    </h2>
                    <p className="leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image Display */}
            <div className="lg:w-3/5 md:w-1/2 w-full mt-12 md:mt-0">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-1000 ease-in-out transform scale-95 hover:scale-100">
                <img
                  className="object-cover object-center rounded-lg transition-transform duration-1000 ease-in-out transform hover:scale-105 w-[90%] h-[500px] md:h-[600px] shadow-lg hover:shadow-2xl"
                  alt="travel destination"
                  src={images[currentImageIndex]}
                  key={currentImageIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reason;
