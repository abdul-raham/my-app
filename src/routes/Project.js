import React from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Heroimage2 from "../Components/HeroImage2";
import PricingCard from "../Components/PricingCard";
import Work from "../Components/Work";
const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="PROJECT." text="some of my most recent works "/>
      <Work />
      <PricingCard/>
      <Footer/>
    </div>
  );
};

export default Project
