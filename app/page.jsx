import Banner from "@/components/Home/Banner";
import Bestseller from "@/components/Home/Bestseller";
import SaleBanner from "@/components/Home/SaleBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner/>
      <SaleBanner />
      <Bestseller />
    </>
  );
}