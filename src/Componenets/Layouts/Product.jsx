import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineSync } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import Flex from "./Flex";

const Product = ({ src, badge }) => {
  return (
    <div>
      <div className="group relative overflow-hidden">
        {badge && <Badge title="New" />}
        <div>
          <Image src={src} className="w-full" />
        </div>
        <div className="absolute -bottom-1/2 left-0 h-1/2 w-full bg-white py-6 pr-8 duration-500 group-hover:bottom-0">
          <Link
            to="#"
            className="flex items-center justify-end gap-2 pb-5 text-[#767676] hover:font-semibold hover:text-[#262626]"
          >
            Add to Wish List
            <AiFillHeart />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-end gap-2 pb-5 text-[#767676] hover:font-semibold hover:text-[#262626]"
          >
            Compare
            <AiOutlineSync />
          </Link>
          <Link
            to="#"
            className="flex items-center justify-end gap-2 pb-5 text-[#767676] hover:font-semibold hover:text-[#262626]"
          >
            Add to Cart
            <BsFillCartFill />
          </Link>
        </div>
      </div>
      <div>
        <Flex className="items-center justify-between">
          <h3 className="py-4 font-dm text-xl font-bold text-[#262626]">
            Basic Crew Neck Tee
          </h3>
          <p className="font-dm text-base text-[#767676]">$44.00</p>
        </Flex>
        <p className="font-dm text-base text-[#767676]">Black</p>
      </div>
    </div>
  );
};

export default Product;
