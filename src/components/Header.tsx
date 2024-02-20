import { MdOutlineWindow } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { FaOpencart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import HEADER from "../constant/header.json";

export const Header = () => {
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
          <FaSearch className="absolute right-4 cursor-pointer" />
        </div>
        <div className="flex items-center gap-[24px]">
          <div className="flex flex-col items-center cursor-pointer">
            <GoPeople color="white" size={18} />
            <p className="text-white">Sign In</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <GiSelfLove color="white" size={18} />
            <p className="text-white">Favorites</p>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <FaOpencart color="white" size={18} />
            <p className="text-white">$ 0.00</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[30px] flex items-center gap-[85px] bg-[#0A6B80] px-8 py-1">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-white text-[14px]">All Categories</span>
          <RxHamburgerMenu color="white" size={14} />
        </div>
        <div className="flex items-center gap-[85px] cursor-pointer">
          {HEADER.map((title) => (
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
