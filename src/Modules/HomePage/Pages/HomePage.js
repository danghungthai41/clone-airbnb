import React from "react";
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import Banner from "../Components/Banner";
import Categories from "../Components/Categories";
import FlipBanner from "../Components/FlipBanner";
import MostVisitedPlace from "../Components/MostVisitedPlace";
import PopularCities from "../Components/PopularCities";

export default function HomePage() {
  return (
    <div id="wrapper">
      <Header />
      <Banner />
      <Categories />
      <MostVisitedPlace />
      <PopularCities />
      <FlipBanner/>
      <Footer />
      <div id="backtotop">
        <a href="#" />
      </div>
    </div>
  );
}
