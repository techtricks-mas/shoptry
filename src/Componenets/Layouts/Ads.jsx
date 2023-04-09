import React from "react";
import Flex from "./Flex";
import Image from "./Image";
import ContainerLayout from "./ContainerLayout";

const Ads = () => {
  return (
    <ContainerLayout>
      <Flex className="justify-center gap-3">
        <div>
          <Image src="assets/images/Ad_1.png" />
        </div>
        <div>
          <div className="pb-3">
            <Image src="assets/images/Ad_2.png" className="w-full" />
          </div>
          <div className="pt-3">
            <Image src="assets/images/Ad_3.png" className="w-full" />
          </div>
        </div>
      </Flex>
    </ContainerLayout>
  );
};

export default Ads;
