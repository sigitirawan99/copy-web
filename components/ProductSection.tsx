"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { IoBriefcase, IoPerson } from "react-icons/io5";
import ProductDetail from "./ProductDetail";

const ProductSection = () => {
  const [activeButton, setActiveButton] = useState("personal");

  return (
    <div className="text-center w-250 mx-auto text-blue-950 h-full">
      <span className="font-semibold bg-gray-100 p-2 rounded-md text-sm w-70">
        🌟 Paket hosting sesuai kebutuhan Anda!
      </span>
      <h1 className="font-extrabold text-5xl mt-10 mb-10">
        Paket Hosting Terbaik, Harga Terjangkau, Garansi 90 Hari Uang Kembali.
      </h1>
      <p>
        Dewaweb menyediakan berbagai paket Cloud Hosting dengan harga
        terjangkau, Silahkan pilih <br />
        sesuai kebutuhan kapasitas website dan email Anda. Paket bisa
        di-upgrade/downgrade dengan mudah kapanpun.
      </p>

      <div className="flex p-10 gap-1 justify-center">
        <div className="border-2 flex gap-1 p-1 rounded-xl">
          <Button
            onClick={() => setActiveButton("personal")}
            className={`p-6 font-black rounded-xl flex items-center gap-2 ${
              activeButton === "personal"
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-500 "
                : "bg-gray-50 text-black cursor-pointer hover:bg-gray-50 shadow-none"
            }`}
          >
            <IoPerson className="size-5" />
            Personal & SMB
          </Button>

          <Button
            onClick={() => setActiveButton("corporate")}
            className={`p-6 font-black rounded-xl flex items-center gap-2 ${
              activeButton === "corporate"
                ? "bg-blue-500 text-white cursor-pointer hover:bg-blue-500"
                : "bg-gray-50 text-black cursor-pointer hover:bg-gray-50 shadow-none"
            }`}
          >
            <IoBriefcase className="size-5" />
            Corporates
          </Button>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <ProductDetail title="Scout" />
        <ProductDetail title="Hunter" />
        <ProductDetail title="Warrior" />
        <ProductDetail title="Guardian" />
      </div>
    </div>
  );
};

export default ProductSection;
