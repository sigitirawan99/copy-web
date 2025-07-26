import InformationProduct from "./InformationProduct";

const InformationPage = () => {
  return (
    <div className="h-dvh w-full">
      <div className="w-320 mx-auto mt-30">
        <span className="font-semibold bg-gray-100 p-3 rounded-md text-sm w-70">
          ⚡️ Optimalisasi Website Terbaik
        </span>
        <div className="flex mt-15 justify-between mb-3">
          <h1 className="text-5xl font-bold mb-10 mr-25 text-blue-950">
            Teknologi Pendukung Performa Website Anda
          </h1>
          <p className="w-210 mt-3">
            Dengan infrastruktur kami yang tangguh dan tim Ninja Support yang
            responsif, Dewaweb memastikan website Anda akan akan selalu berjalan
            dengan optimal.
          </p>
        </div>
        <div className="flex gap-5">
          <InformationProduct />
          <InformationProduct />
          <InformationProduct />
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
