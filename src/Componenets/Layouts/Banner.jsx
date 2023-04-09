import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ContainerLayout from "./ContainerLayout";
import { Link } from "react-router-dom";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          appendDots: (dots) => (
            <div
              style={{
                padding: "2px",
              }}
            >
              <ul style={{ marginBottom: "-20px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === currentSlide
                  ? {
                      width: "15px",
                      height: "15px",
                      borderRadius: "100%",
                      backgroundColor: "white",
                      border: "3px #262626 solid",
                    }
                  : {
                      width: "15px",
                      height: "15px",
                      borderRadius: "100%",
                      backgroundColor: "#262626",
                      border: "3px #262626 solid",
                    }
              }
            ></div>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                width: "auto",
                position: "absolute",
                top: "50%",
                right: "8%",
                bottom: "inherit",
                transform: "translateY(-50%)",
              }}
            >
              <div
                style={{
                  margin: "0px",
                }}
              >
                {dots.map((item, index) => {
                  return <div key={index}>{item.props.children}</div>;
                })}
              </div>
            </div>
          ),
          customPaging: (i) => (
            <p
              style={
                i === currentSlide
                  ? {
                      width: "30px",
                      color: "#262626",
                      padding: "10px 0",
                      borderRight: "2px #262626 solid",
                      cursor: "pointer",
                    }
                  : {
                      width: "30px",
                      padding: "10px 0",
                      color: "#262626",
                      borderRight: "2px white solid",
                      cursor: "pointer",
                    }
              }
            >
              {i === currentSlide ? `0${i + 1}` : ""}
            </p>
          ),
        },
      },
    ],
    afterChange: handleAfterChange,
    appendDots: (dots) => (
      <div
        style={{
          width: "auto",
          position: "absolute",
          top: "50%",
          left: "8%",
          bottom: "inherit",
          transform: "translateY(-50%)",
        }}
      >
        <div
          style={{
            margin: "0px",
          }}
        >
          {dots.map((item, index) => {
            return <div key={index}>{item.props.children}</div>;
          })}
        </div>
      </div>
    ),
    customPaging: (i) => (
      <p
        style={
          i === currentSlide
            ? {
                width: "30px",
                color: "#262626",
                padding: "10px 0",
                borderRight: "2px #262626 solid",
                cursor: "pointer",
              }
            : {
                width: "30px",
                padding: "10px 0",
                color: "#262626",
                borderRight: "2px white solid",
                cursor: "pointer",
              }
        }
      >
        {i === currentSlide ? `0${i + 1}` : ""}
      </p>
    ),
  };
  return (
    <Slider {...settings}>
      <Link
        className={`bg-[url('assets/images/banner.png')] bg-cover bg-no-repeat py-14 md:py-44 `}
      >
        <ContainerLayout className={`pl-5 md:pl-32`}>
          <h2 className="font-dm text-xl font-bold text-[#262626] md:text-5xl">
            Final Offer
          </h2>
          <p className="tex-[#6D6D6D] pt-3 pb-5 font-dm text-xs md:pt-8 md:pb-11 md:text-base">
            Up to{" "}
            <span className="px-3 font-dm text-lg font-bold text-[#262626] md:text-4xl">
              50%
            </span>{" "}
            sale for all furniture items!
          </p>
          <button className="bg-[#262626] py-2 px-5 font-dm text-sm text-white md:py-4 md:px-14">
            Shop Now
          </button>
        </ContainerLayout>
      </Link>
      <Link
        className={`bg-[url('assets/images/banner.png')] bg-cover bg-no-repeat py-14 md:py-44 `}
      >
        <ContainerLayout className={`pl-5 md:pl-32`}>
          <h2 className="font-dm text-xl font-bold text-[#262626] md:text-5xl">
            Final Offer
          </h2>
          <p className="tex-[#6D6D6D] pt-3 pb-5 font-dm text-xs md:pt-8 md:pb-11 md:text-base">
            Up to{" "}
            <span className="px-3 font-dm text-lg font-bold text-[#262626] md:text-4xl">
              50%
            </span>{" "}
            sale for all furniture items!
          </p>
          <button className="bg-[#262626] py-2 px-5 font-dm text-sm text-white md:py-4 md:px-14">
            Shop Now
          </button>
        </ContainerLayout>
      </Link>
      <Link
        className={`bg-[url('assets/images/banner.png')] bg-cover bg-no-repeat py-14 md:py-44 `}
      >
        <ContainerLayout className={`pl-5 md:pl-32`}>
          <h2 className="font-dm text-xl font-bold text-[#262626] md:text-5xl">
            Final Offer
          </h2>
          <p className="tex-[#6D6D6D] pt-3 pb-5 font-dm text-xs md:pt-8 md:pb-11 md:text-base">
            Up to{" "}
            <span className="px-3 font-dm text-lg font-bold text-[#262626] md:text-4xl">
              50%
            </span>{" "}
            sale for all furniture items!
          </p>
          <button className="bg-[#262626] py-2 px-5 font-dm text-sm text-white md:py-4 md:px-14">
            Shop Now
          </button>
        </ContainerLayout>
      </Link>
    </Slider>
  );
};

export default Banner;
