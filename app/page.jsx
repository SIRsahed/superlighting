import Banner from "@/components/Home/Banner";
import Bestseller from "@/components/Home/Bestseller";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import SaleBanner from "@/components/Home/SaleBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <FeaturedProducts />
      <SaleBanner />
      <Bestseller />
    </>
  );
}