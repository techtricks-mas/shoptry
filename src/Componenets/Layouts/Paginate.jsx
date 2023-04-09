import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import Flex from "./Flex";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14,
];
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div className="w-[32%]" key={index}>
            <Product src="assets/images/product1.png" badge={true} />
          </div>
        ))}
    </>
  );
}

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Flex className="flex-wrap justify-between gap-4 gap-y-14">
        <Items currentItems={currentItems} />
      </Flex>
      <Flex className="items-center justify-between">
        <ReactPaginate
          previousLabel=""
          className="mt-12 flex items-center gap-4"
          pageLinkClassName="px-3 py-2 bg-[#F0F0F0] text-black"
          activeLinkClassName="!bg-black text-white"
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
        <p className="font-dm text-sm">
          Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
          {items.length}
        </p>
      </Flex>
    </>
  );
};

export default Paginate;
