import Image from "next/image";
import { LuCircleCheckBig } from "react-icons/lu";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="h-dvh w-full">
      <div className="flex justify-around items-center h-full">
        <div className="">
          <p className="font-semibold bg-gray-100 p-2 rounded-md text-sm w-70">
            🔥 Pilih Layanan Cloud Hosting Terbaik
          </p>
          <h1 className="font-black text-5xl mt-10 mb-2 text-blue-950">
            Performa Website
          </h1>
          <h1 className="font-black text-5xl text-blue-500 mb-15">
            Lebih Aman, Cepat & Stabil
          </h1>
          <div className="flex gap-10">
            <ul>
              <li className="flex items-center gap-2 text-lg">
                <LuCircleCheckBig className="text-green-600 size-6" /> 100% Full
                Teknologi Cloud
              </li>
              <li className="flex items-center gap-2 text-lg my-3">
                <LuCircleCheckBig className="text-green-600 size-6" /> ISO 27001
                Certified
              </li>
              <li className="flex items-center gap-2 text-lg">
                <LuCircleCheckBig className="text-green-600 size-6" />{" "}
                1Anti-DDoS Protection
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2 text-lg">
                <LuCircleCheckBig className="text-green-600 size-6" /> Chipset
                AMD EPYC Genoa
              </li>
              <li className="flex items-center gap-2 text-lg my-3">
                <LuCircleCheckBig className="text-green-600 size-6" /> Free
                Daily & Weekly Backups
              </li>
              <li className="flex items-center gap-2 text-lg">
                <LuCircleCheckBig className="text-green-600 size-6" /> 100%
                Uptime SLA
              </li>
            </ul>
          </div>
          <div className="mt-20 ml-1 flex gap-9 items-center">
            <Button className="px-7 py-7 rounded-3xl text-md bg-green-700 cursor-pointer hover:bg-green-700 text-white">
              Beli Cloud Web Hosting
            </Button>
            <div className="font-medium">
              <h3 className="flex gap-1 items-end">
                <span className="underline">Sahabat Online!</span> Diskon{" "}
                <span className="text-2xl font-black text-blue-500">25%</span> ,
              </h3>
              <h3>
                Gunakan kode:{" "}
                <span className="text-2xl font-black text-blue-500 underline">
                  WEBSITEAMAN
                </span>
              </h3>
            </div>
          </div>
        </div>
        <Image src="/hero.png" alt="hero" width={500} height={500} />
      </div>
    </div>
  );
};

export default HeroSection;
