import React from "react";
import Navbar from "@/components/ui/Navbar";
import Banner from "@/components/homeComponents/Banner";
import Profile from "@/components/homeComponents/Profile";
import ArtPortfolios from "@/components/homeComponents/ArtPortfolios";
import UIUXPortfolios from "@/components/homeComponents/UIUXPortfolios";
import GraphicDesignPortfolios from "@/components/homeComponents/GraphicDesignPortfolios";
import About from "./../About/page";
import Contact from "./../Contact/page";


function Home() {
  return (
    <>
      <Navbar />
      <div id='home' className="container h-dvh bg-white overflow-hidden rounded-lg shadow-lg my-6">
        <div>
          <Banner />
          <Profile />
          <hr className="solid my-11 mx-32" />
          <h1
            id="portfolio"
            className="text-black font-bold text-3xl md:text-5xl justify-center flex flex-row"
          >
            Portfolios
          </h1>
          <ArtPortfolios />
          <UIUXPortfolios />
          <GraphicDesignPortfolios/>
          <About />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
