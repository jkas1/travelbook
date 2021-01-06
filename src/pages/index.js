import React, { useState } from "react";
import Footer from "../components/Footer";
import GallerySection from "../components/GallerySection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";
import Transition from "../components/Transition";
import {
  trObjOne,
  trObjTwo,
  trObjThree,
  trObjFour,
} from "../components/Transition/Data";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Transition {...trObjOne} />
      <InfoSection {...homeObjTwo} />
      <Transition {...trObjTwo} />
      <Services />
      <Transition {...trObjThree} />
      <GallerySection />
      <Transition {...trObjFour} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
