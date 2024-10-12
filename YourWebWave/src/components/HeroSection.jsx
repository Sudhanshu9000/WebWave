import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const images = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHdlYnNpdGUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D',
    // Add more image paths as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // Change image every 8 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <h1 className="mt-20 ml-8 md:ml-20 max-w-[22ch] md:max-w-[30ch] text-4xl font-bold text-center md:text-left">
        Welcome to the Hero Section! Welcome to the Hero Section! Welcome to the Hero Section!
      </h1>
      
      <img
        src={images[currentImageIndex]}
        alt="Rotating Hero"
        className="border-8 w-full sm:w-[25rem] h-[15rem] object-cover ml-auto mr-10 mt-32"
      />
    </div>
  );
};

export default HeroSection;
