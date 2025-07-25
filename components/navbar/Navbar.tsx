import Image from "next/image";
import Navlink from "./Navlink";
import { IoCartOutline, IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between px-22 items-center p-3 border-b border-gray-50 fixed w-full top-0 z-10 shadow-b shadow-md bg-white">
      <div className="flex items-center gap-10">
        <Image src="/navbar.png" alt="logo" width={130} height={75} />
        <Navlink />
      </div>
      <div className="flex gap-2 text-2xl items-center">
        <IoCartOutline className="hover:bg-white p-2 rounded-lg size-11 cursor-pointer" />
        <div className="flex gap-2 p-2 rounded-lg cursor-pointer hover:bg-white">
          <IoPersonCircleSharp />
          <p className="text-base">Account</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
