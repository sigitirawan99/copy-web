import { Button } from "./ui/button";
import { LuCircleCheckBig } from "react-icons/lu";

const ProductDetail = ({ title }: { title: string }) => {
  return (
    <div>
      <div className="w-80 mt-8">
        <div className="border border-blue-400 rounded-3xl bg-blue-400 h-25 -mb-4 relative z-0">
          <h1 className="text-4xl font-bold text-white mt-3">{title}</h1>
          <div className="bg-white w-35 rounded-md mx-auto text-black">
            STORAGE <span className="font-extrabold">3GB</span>
          </div>
        </div>
        <div className="border rounded-3xl border-gray-300">
          <div className="mt-12 mx-auto w-60">
            <div className="text-justify">
              <p className="font-semibold  mb-16 ">
                Cocok untuk Blog dan website yang ringan.
              </p>
              <span className="bg-gray-100 text-gray-400 font-bold p-3 rounded-md">
                Harga Normal
              </span>
              <h1 className="mt-5 text-3xl font-black mb-2">
                Rp35.000<span className="text-lg">/bln</span>
              </h1>
              <span className="text-green-900">Total harga per tahun</span>
              <p className="font-semibold text-green-900 mb-10">Rp420.000</p>
            </div>
            <Button className="px-19 py-7 text-center rounded-3xl font-extrabold cursor-pointer mb-10">
              Order Sekarang
            </Button>
            <div className="text-justify font-semibold">
              <h3>Fitur Standar Cloud Hosting</h3>
              <ul className="text-sm space-y-3 mt-4 mb-4">
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" /> 3 GB{" "}
                  <span className="font-normal">NVME Storage</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />
                  512 MB <span className="font-normal">Memory</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" /> 0.5{" "}
                  <span className="font-normal">CPU Core</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" /> 2 MB/s
                  <span className="font-normal">Disk I/O Throughput</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />
                  Unlimited <span className="font-normal">Databases</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />{" "}
                  Unlimited <span className="font-normal">Emails</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />
                  Unlimited <span className="font-normal">Bandwidth</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />
                  Unlimited <span className="font-normal">Inodes</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" /> 1{" "}
                  <span className="font-normal">Addon Domain</span>
                </li>
              </ul>
              {/* ul ke 2 */}
              <h3>Keuntungan Fitur Premium</h3>
              <ul className="text-sm space-y-3 mt-4 mb-4">
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />{" "}
                  Automatic Cloud Backup (Daily & Weekly)
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" />
                  Gratis <span className="font-normal">Migrasi Website</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" /> Gratis
                  <span className="font-normal">Domain Selamanya</span>
                </li>
                <li className="flex items-center gap-2">
                  <LuCircleCheckBig className="text-green-600 size-6" /> Gratis
                  <span className="font-normal">SSL Grade A+</span>
                </li>
              </ul>
            </div>
          </div>
          <button className="mb-10 mt-10 font-semibold text-gray-400 cursor-pointer">
            Lihat Fitur Lainya{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
