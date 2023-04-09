import React from "react";
import Banner from "../Layouts/Banner";
import BannerBottom from "../Layouts/BannerBottom";
import Ads from "../Layouts/Ads";
import Newarrival from "../Layouts/Newarrival";
import Bestsellers from "../Layouts/Bestsellers";
import SingleAd from "../Layouts/SingleAd";
import Offers from "../Layouts/Offers";

const Home = () => {
  return (
    <>
      <Banner />
      <BannerBottom />
      <Ads />
      <Newarrival />
      <Bestsellers />
      <SingleAd src="assets/images/middlead.png" />
      <Offers />
    </>
  );
};

export default Home;
