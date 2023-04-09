import React from "react";
import Image from "./Image";
import ContainerLayout from "./ContainerLayout";

const SingleAd = ({ src, alt, className }) => {
  return (
    <ContainerLayout className="py-32">
      <Image src={src} alt={alt} className={className} />
    </ContainerLayout>
  );
};

export default SingleAd;
