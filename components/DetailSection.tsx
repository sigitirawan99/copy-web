import Image from "next/image";
import { LuCircleCheckBig } from "react-icons/lu";

const DetailSection = () => {
  return (
    <div className="h-dvh w-full">
      <div className="border border-gray-300 w-320 bg-[#f9f9f9] mx-auto mt-25 rounded-4xl">
        <div className="flex items-center justify-between h-full px-20 py-15">
          <div className="w-[50%]">
            <h1 className="text-4xl text-blue-950 font-extrabold mb-5">
              Beli Hosting dan Dapatkan Premium Addons Gratis!
            </h1>
            <p className="text-green-950">
              Setiap pembelian hosting di Dewaweb, Anda juga bisa <br />{" "}
              menikmati bonus premium addons yang siap bantu <br /> website kamu
              lebih cepat, aman, dan optimal.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
              <div className="border border-gray-200 w-27 h-11 rounded-sm bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-300 w-320 bg-gray-900 mx-auto mt-10 rounded-4xl">
        <div className="flex items-center justify-between h-full px-20 py-15">
          <div className="w-[50%]">
            <h1 className="text-white text-4xl font-extrabold mb-5">
              100% Customer Satisfaction, Guaranteed!
            </h1>
            <Image src="/detail.png" alt="detail" width={200} height={200} />
          </div>
          <div className="w-[50%] ml-4">
            <p className="text-white text-lg mb-8 ">
              Dewaweb berkomitmen memberikan layanan terbaik demi menciptakan
              pengalaman positif bagi pelanggan dan mendapatkan solusi yang
              cepat serta tepat, dari team profesional.
            </p>
            <span className="text-white text-lg">
              Layanan terbaik yang akan Anda dapatkan:
            </span>
            <ul className="text-white text-lg mt-4">
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="text-green-600 size-5" /> Ninja
                Support 24/7
              </li>
              <li className="flex items-center gap-2 my-3">
                <LuCircleCheckBig className="text-green-600 size-5" /> 100%
                Uptime SLA
              </li>
              <li className="flex items-center gap-2">
                <LuCircleCheckBig className="text-green-600 size-5" />{" "}
                <span className="underline">Garansi 90 Hari Uang Kembali</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
