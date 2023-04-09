import React from "react";
import Product from "./Product";
import ContainerLayout from "./ContainerLayout";
import Heading from "./Heading";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Newarrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <ContainerLayout className="pt-32">
      <Heading title="New Arrivals" />
      <Slider {...settings}>
        <div className="px-3">
          <Product src="assets/images/product1.png" badge={true} />
        </div>
        <div className="px-3">
          <Product src="assets/images/product2.png" badge={false} />
        </div>
        <div className="px-3">
          <Product src="assets/images/product1.png" badge={true} />
        </div>
        <div className="px-3">
          <Product src="assets/images/product2.png" badge={false} />
        </div>
      </Slider>
    </ContainerLayout>
  );
};

export default Newarrival;
