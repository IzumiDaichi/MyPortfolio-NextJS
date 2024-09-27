import React from "react";
import Banner from "../../components/ui/Banner";
import Profile from "../../components/ui/Profile";
import ArtPortfolios from "../../components/ui/ArtPortfolios";
import UIUXPortfolios from "../../components/ui/UIUXPortfolios";
import About from "../about/page";
import Contact from "./../contact/page";

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
