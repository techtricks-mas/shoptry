import React from "react";
import Flex from "./Flex";
import ContainerLayout from "./ContainerLayout";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";

const BannerBottom = () => {
  return (
    <ContainerLayout>
      <Flex className="items-center justify-between py-8 text-white">
        <Flex className="items-center gap-2 font-dm text-xl text-[#262626]">
          2 <span className="text-base text-[#6D6D6D]">Two years warranty</span>
        </Flex>
        <Flex className="items-center gap-2 font-dm text-xl text-[#262626]">
          <MdLocalShipping />
          <span className="text-base text-[#6D6D6D]">Two years warranty</span>
        </Flex>
        <Flex className="items-center gap-2 font-dm text-xl text-[#262626]">
          <AiOutlineReload className="-scale-x-100" />
          <span className="text-base text-[#6D6D6D]">Two years warranty</span>
        </Flex>
      </Flex>
    </ContainerLayout>
  );
};

export default BannerBottom;
