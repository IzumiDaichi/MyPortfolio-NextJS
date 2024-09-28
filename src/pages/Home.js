import React from "react";
import Banner from "../components/homeComponents/Banner";
import Profile from "../components/homeComponents/Profile";
import ArtPortfolios from "../components/homeComponents/ArtPortfolios";
import UIUXPortfolios from "../components/homeComponents/UIUXPortfolios";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <div className="container h-dvh bg-white overflow-hidden rounded-lg shadow-lg">
      <div>
        <Banner />
        <Profile />
        <hr className="solid my-11 mx-32" />
        <h1 className="text-black font-bold text-3xl md:text-5xl justify-center flex flex-row">
          Portfolios
        </h1>
        <ArtPortfolios />
        <UIUXPortfolios />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
