import React from "react";
import Header from "./Header";
import heroImage from '../assets/hero.jpg';
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] flex items-center justify-center" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <Header />
      <SearchBar />
    </div>
  );
};

export default Hero;
