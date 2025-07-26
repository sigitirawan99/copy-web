import { LuCircleCheckBig } from "react-icons/lu";

const InformationProduct = () => {
  return (
    <div className="">
      <div className="w-100 h-65 rounded-3xl bg-blue-400 sticky -mb-10 z-0"></div>
      <div className="w-100 h-90 rounded-3xl bg-white border border-gray-200">
        <div className="mt-16 w-85 mx-auto">
          <h2 className="text-2xl font-bold text-blue-950">
            Powered by AMD Genoa
          </h2>
          <ul className="text-md mt-4 mb-6">
            <li className="flex items-center gap-2">
              <LuCircleCheckBig className="text-green-600" />
              <span className="flex-1">Meningkatkan loading web page</span>
            </li>
            <li className="flex items-center gap-2 my-3">
              <LuCircleCheckBig className="text-green-600" />{" "}
              <span className="flex-1">
                {" "}
                Performa lebih tinggi saat peak traffic
              </span>
            </li>
            <li className="flex items-center gap-2">
              <LuCircleCheckBig className="text-green-600" />{" "}
              <span className="flex-1">Dilengkapi AMD Infinity Guard</span>
            </li>
            <li className="flex items-center gap-2 my-3">
              <LuCircleCheckBig className="text-green-600" />{" "}
              <span className="flex-1">
                Cocok untuk aplikasi yang membutuhkan CPU powerful
              </span>
            </li>
            <li className="flex items-center gap-2">
              <LuCircleCheckBig className="text-green-600" />{" "}
              <span className="flex-1">
                96 core, 192 Threads, 384 MB L3 Cache per CPU Socket, DDR5 4800
                MHz RAM
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
