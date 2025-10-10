import React from "react";

function Shop() {
  console.log("Shop component loaded");

  return (
    <div className="text-white px-8 py-12 bg-black min-h-screen flex flex-col items-center">
      {/* Page Heading */}
      <h1 className="text-4xl lg:text-5xl font-extrabold text-center text-red-600 mb-10 tracking-wide">
        Find Your Dealer
      </h1>

      {/* Wrapper for Map + Info side by side */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 w-full max-w-6xl">
        
        {/* Map Section */}
        <div className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Location Map"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.765472111984!2d76.95366071480068!3d11.01684499215933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8598f4b3f58b7%3A0x1234567890abcdef!2sCoimbatore!5e0!3m2!1sen!2sin!4v1696600000000!5m2!1sen!2sin"
          ></iframe>
        </div>

        {/* Contact Info Section */}
        <div className="w-full lg:w-1/2 bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-red-600 inline-block">
            Visit Us
          </h2>
          <p className="text-lg mb-2">123 Porsche Street, Stuttgart, Germany</p>
          <p className="text-lg mb-2">Phone: +49 711 911-0</p>
          <p className="text-lg">Email: info@porsche.com</p>
        </div>
      </div>
    </div>
  );
}

export default Shop;
