import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Dropdown from "./Dropdown";
import ContainerLayout from "./ContainerLayout";
import List from "./List";
import ListItem from "./ListItem";
import Input from "./Input";

const Header = () => {
  const ref = useRef();
  const userRef = useRef();
  const cartRef = useRef();
  const [show, setShow] = useState(false);
  const [userShow, setUserShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!ref.current.contains(e.target)) {
        setShow(false);
      }
      if (!userRef.current.contains(e.target)) {
        setUserShow(false);
      }
      if (!cartRef.current.contains(e.target)) {
        setCartShow(false);
      }
    });
  }, []);
  return (
    <div className=" bg-[#F5F5F3]">
      <ContainerLayout>
        <Flex className="items-center justify-between px-5 font-dm">
          {search ? (
            <>
              <div className="relative w-4/5 py-2">
                <Input
                  type="text"
                  className="w-full py-2 pl-5 pr-8 font-dm text-sm focus:outline-none"
                  placeholder="Search Products"
                />
                <BiSearchAlt className="absolute top-1/2 right-3 -translate-y-1/2" />
              </div>
              <RiCloseFill
                className="h-7 w-7 cursor-pointer"
                onClick={() => setSearch(!search)}
              />
            </>
          ) : (
            <>
              <Dropdown
                className="relative cursor-pointer text-sm"
                dropref={ref}
                onClick={() => setShow(!show)}
              >
                <Flex className="items-center gap-x-4">
                  <HiMenuAlt2 className="h-5 w-5" />{" "}
                  <span className="hidden md:inline-block">
                    Shop by Category
                  </span>
                </Flex>
                {show && (
                  <List className="absolute top-8 left-0 w-[263px] rounded bg-[#262626] text-[#FFFFFFB2] md:top-[60px]">
                    <ListItem className="flex items-center justify-between border-b border-[#2D2D2D] px-5 py-4 transition-all duration-300 hover:pl-6 hover:font-bold hover:text-white">
                      Accesories <BsFillCaretRightFill />
                    </ListItem>
                    <ListItem className="flex items-center justify-between border-b border-[#2D2D2D] px-5 py-4 transition-all duration-300 hover:pl-6 hover:font-bold hover:text-white">
                      Furniture <BsFillCaretRightFill />
                    </ListItem>
                    <ListItem className="flex items-center justify-between border-b border-[#2D2D2D] px-5 py-4 transition-all duration-300 hover:pl-6 hover:font-bold hover:text-white">
                      Electronics <BsFillCaretRightFill />
                    </ListItem>
                    <ListItem className="flex items-center justify-between rounded border-b border-[#2D2D2D] px-5 py-4 transition-all duration-300 hover:pl-6 hover:font-bold hover:text-white">
                      Clothes <BsFillCaretRightFill />
                    </ListItem>
                  </List>
                )}
              </Dropdown>
              <div className="py-5">
                <div className="hidden md:block">
                  <div className="relative">
                    <Input
                      type="text"
                      className="w-full py-4 pl-5 pr-8 font-dm text-sm focus:outline-none md:w-[600px]"
                      placeholder="Search Products"
                    />
                    <BiSearchAlt className="absolute top-1/2 right-3 -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div>
                <Flex className="items-center justify-end gap-x-5">
                  <div className="inline-block md:hidden">
                    <BiSearchAlt
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => setSearch(!search)}
                    />
                  </div>
                  <Dropdown
                    className="relative cursor-pointer text-sm"
                    dropref={userRef}
                    onClick={() => setUserShow(!userShow)}
                  >
                    <Flex className="items-end gap-2">
                      <FaUserAlt />
                      <BsFillCaretDownFill className="h-3 w-3" />
                    </Flex>
                    {userShow && (
                      <List className="absolute top-7 right-0 w-[200px] rounded border border-[#F0F0F0] bg-white text-center text-[#262626] md:top-[60px]">
                        <ListItem className="px-5 py-4 transition-all duration-300 hover:bg-[#262626] hover:pl-6 hover:font-bold hover:text-white">
                          My Account
                        </ListItem>
                        <ListItem className="px-5 py-4 transition-all duration-300 hover:bg-[#262626] hover:pl-6 hover:font-bold hover:text-white">
                          Log Out
                        </ListItem>
                      </List>
                    )}
                  </Dropdown>
                  <Dropdown
                    className="relative cursor-pointer text-sm"
                    dropref={cartRef}
                    onClick={() => setCartShow(!cartShow)}
                  >
                    <FaShoppingCart />
                    {cartShow && (
                      <List className="absolute top-7 right-0 w-[280px] rounded border border-[#F0F0F0] bg-white text-[#262626] md:top-[60px] md:w-[360px]">
                        <ListItem className="flex items-center justify-center gap-x-5 bg-[#F5F5F3] p-5">
                          <div className="h-14 w-14 bg-slate-300"></div>
                          <div className="w-[130px]">
                            <p className="pb-3 font-dm text-xs font-bold">
                              Black Smart Watch
                            </p>
                            <p className="font-dm text-xs font-bold">$44.00</p>
                          </div>
                          <RiCloseFill className="h-7 w-7" />
                        </ListItem>
                        <ListItem className="p-5">
                          <p className="pb-3 font-dm text-sm text-[#767676]">
                            Subtotal:{" "}
                            <span className="font-bold text-[#262626]">
                              $44.00
                            </span>
                          </p>
                          <Flex className="items-center justify-center gap-x-5">
                            <button className="border border-[#262626] py-3 px-5 font-dm text-sm font-bold transition-all duration-300 hover:bg-[#262626] hover:text-white md:py-4 md:px-10">
                              View Cart
                            </button>
                            <button className="border border-[#262626] bg-[#262626] py-3 px-5 font-dm text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#262626]  md:py-4 md:px-10">
                              Checkout
                            </button>
                          </Flex>
                        </ListItem>
                      </List>
                    )}
                  </Dropdown>
                </Flex>
              </div>
            </>
          )}
        </Flex>
      </ContainerLayout>
    </div>
  );
};

export default Header;
