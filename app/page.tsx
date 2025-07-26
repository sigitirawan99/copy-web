import DetailSection from "@/components/DetailSection";
import HeroSection from "@/components/HeroSection";
import InformationPage from "@/components/InformationPage";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProductSection />
      <DetailSection />
      <InformationPage />
    </div>
  );
}
