import React, { useState } from "react";
import ContainerLayout from "../Layouts/ContainerLayout";
import Breadcrumb from "../Layouts/Breadcrumb";
import Flex from "../Layouts/Flex";
import Paginate from "../Layouts/Paginate";
import LeftSidebar from "../Layouts/LeftSidebar";

const Shop = () => {
  const [perPage, setPerPage] = useState(12);
  const perPageHandler = (e) => {
    setPerPage(+e.target.value);
  };
  return (
    <ContainerLayout>
      <Breadcrumb title="Product" page="Product" />
      <Flex className="gap-3">
        <div className="w-1/3">
          <LeftSidebar />
        </div>
        <div className="w-2/3">
          <Flex className="items-center justify-between pb-14">
            <div></div>
            <Flex className="items-center gap-5">
              <Flex className="items-center gap-2">
                <span className="font-dm text-base">Sort by:</span>
                <select className="w-[240px] border border-[#F0F0F0] bg-white py-2 font-dm text-base text-[#767676] focus:outline-none active:outline-none">
                  <option className="py-2 font-dm text-base text-[#767676] hover:bg-white">
                    Featured
                  </option>
                </select>
              </Flex>
              <Flex className="items-center gap-2">
                <span className="font-dm text-base">Show:</span>
                <select
                  onChange={perPageHandler}
                  className="w-[240px] border border-[#F0F0F0] bg-white py-2 font-dm text-base text-[#767676] focus:outline-none active:outline-none"
                >
                  <option
                    className="py-2 font-dm text-base text-[#767676] hover:bg-white"
                    value="12"
                  >
                    12
                  </option>
                  <option
                    className="py-2 font-dm text-base text-[#767676] hover:bg-white"
                    value="24"
                  >
                    24
                  </option>
                  <option
                    className="py-2 font-dm text-base text-[#767676] hover:bg-white"
                    value="36"
                  >
                    36
                  </option>
                </select>
              </Flex>
            </Flex>
          </Flex>
          <Paginate itemsPerPage={perPage} />
        </div>
      </Flex>
    </ContainerLayout>
  );
};

export default Shop;
