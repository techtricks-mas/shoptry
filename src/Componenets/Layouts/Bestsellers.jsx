import React from "react";
import ContainerLayout from "./ContainerLayout";
import Heading from "./Heading";
import Flex from "./Flex";
import Product from "./Product";

const Bestsellers = () => {
  return (
    <ContainerLayout className="pt-32">
      <Heading title="Our Bestsellers" />
      <Flex className="items-center justify-center gap-5 ">
        <div className="w-1/4">
          <Product src="assets/images/product1.png" badge={true} />
        </div>
        <div className="w-1/4">
          <Product src="assets/images/product2.png" badge={false} />
        </div>
        <div className="w-1/4">
          <Product src="assets/images/product1.png" badge={true} />
        </div>
        <div className="w-1/4">
          <Product src="assets/images/product2.png" badge={false} />
        </div>
      </Flex>
    </ContainerLayout>
  );
};

export default Bestsellers;
