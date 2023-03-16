import React from "react";
import { HiMenu } from "react-icons/hi";
import { useEffect, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";
import Flex from "./Flex";
import Image from "./Image";

const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 767) {
      setShow(true);
    } else {
      setShow(false);
    }
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 767) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <Flex className="relative items-center py-4 px-5 md:py-8 md:px-0">
      <div className="">
        <Image src="Logo.png" />
      </div>
      <Flex className="w-full justify-end md:justify-center">
        <HiMenu
          className="block h-7 w-7 cursor-pointer md:hidden"
          onClick={() => setShow(!show)}
        />
        {show && (
          <List className="absolute top-16 left-0 w-full items-center justify-center gap-5 bg-[#F5F5F3] font-dm text-sm text-[#767676] md:static md:flex md:bg-white">
            <ListItem className="cursor-pointer border-b py-3 px-5 font-bold text-black hover:bg-white md:border-0 md:px-0">
              Home
            </ListItem>
            <ListItem className="cursor-pointer border-b py-3 px-5 hover:bg-white hover:font-bold hover:text-black md:border-0 md:px-0">
              Shop
            </ListItem>
            <ListItem className="cursor-pointer border-b py-3 px-5 hover:bg-white hover:font-bold hover:text-black  md:border-0 md:px-0">
              About
            </ListItem>
            <ListItem className="cursor-pointer border-b py-3 px-5 hover:bg-white hover:font-bold hover:text-black  md:border-0 md:px-0">
              Contacts
            </ListItem>
            <ListItem className="cursor-pointer border-b py-3 px-5 hover:bg-white hover:font-bold hover:text-black  md:border-0 md:px-0">
              Journal
            </ListItem>
          </List>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
