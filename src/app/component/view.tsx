import React from 'react';

const View = () => {
  const image = "/assests/cap3.jpg"; // Define image path

  return (
    <div id='view' className="bg-[#0f4c5c] text-[#cad2c5] py-24">
      <section className="container mx-auto flex flex-wrap px-5 lg:px-0">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-[500px] w-[300px] mx-auto rounded-md"
            src={image} // Use image variable here
          />
        </div>
        <div className="flex flex-col lg:w-1/2 lg:pl-12 text-center lg:text-left">
          {/* Galata Tower */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Galata Tower, Istanbul</h2>
            <p className="mb-1">Highlights: Panoramic views of Istanbul, Bosphorus, and historic sites.</p>
            <p className="text-[#cad2c5] font-semibold">
              Best Time: <span className="text-[#ffb703]">Sunset, for city lights and skyline views.</span>
            </p>
          </div>
          {/* Göreme Valley */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Göreme Valley, Cappadocia</h2>
            <p className="mb-1">Highlights: Fairy chimneys, cave dwellings, and hot air balloons.</p>
            <p className="text-[#cad2c5] font-semibold">
              Best Time: <span className="text-[#ffb703]">Sunrise, with balloons filling the sky.</span>
            </p>
          </div>
          {/* Mount Tahtalı */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Mount Tahtalı, Antalya</h2>
            <p className="mb-1">Highlights: Stunning Mediterranean coast and Taurus Mountain views.</p>
            <p className="text-[#cad2c5] font-semibold">
              Best Time: <span className="text-[#ffb703]">Sunrise or sunset, for expansive, scenic vistas.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default View;
