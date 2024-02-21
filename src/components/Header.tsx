import { MdOutlineWindow } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { HEADER_MENU_ITEM, HeaderMenuItem } from "../constant/header-menu-item";
import { RxHamburgerMenu } from "react-icons/rx";
import HEADER from "../constant/header.json";
import { HeaderTitle } from "../types/globalType";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="w-full h-[70px] flex items-center gap-[125px] bg-[#10899E] pt-[10px]  pr-[30px], pb-[10px]  pl-[30px]">
        <div className="flex items-center gap-8">
          <p className="text-4xl text-white">LOGO</p>
          <div className="flex items-center gap-1 mt-1">
            <MdOutlineWindow color="white" size={20} />
            <p className="text-white text-base cursor-pointer">
              Help and Support
            </p>
            <IoIosArrowDown color="white" className="cursor-pointer mt-1" />
          </div>
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="w-[542px] h-[44px] rounded-3xl bg-slate-100 outline-none px-3"
          />
          <div className="absolute right-4 bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center">
            <FaSearch className=" cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center gap-[24px]">
          {HEADER_MENU_ITEM.map((menu: HeaderMenuItem) => (
            <button
              key={menu.id}
              onClick={() => setNav(!nav)}
              className="flex flex-col items-center cursor-pointer"
            >
              {menu.icons}
              <p className="text-white">{menu.title}</p>
            </button>
          ))}
        </div>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}
        <div
          className={
            nav
              ? "fixed top-0 right-0 w-[400px] h-screen bg-white z-10 duration-300"
              : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
          }
        >
          <AiOutlineClose
            color="black"
            size={20}
            className="absolute right-6 top-4 cursor-pointer"
            onClick={() => setNav(!nav)}
          />
          <div className="p-3">
            <h1 className="text-center text-2xl">Sign InTo Your Account</h1>
            <span className="flex items-center justify-center text-xs">
              Do you already have an account with us?
            </span>
            <div className="flex items-center justify-around mt-4">
              <button className="w-24 h-10 rounded-xl bg-[#10899E] text-white">
                Sign In
              </button>
              <button className="w-24 h-10 rounded-xl bg-[#0A6B80] text-white">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[30px] flex items-center gap-[85px] bg-[#0A6B80] px-8 py-1">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-white text-[14px]">All Categories</span>
          <RxHamburgerMenu color="white" size={14} />
        </div>
        <div className="flex items-center gap-[85px] cursor-pointer">
          {HEADER.map((title: HeaderTitle) => (
            <span className="text-white text-[14px]" key={title.id}>
              {title.title}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
