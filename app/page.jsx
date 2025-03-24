import Banner from "@/components/home/Banner";
import Bestseller from "@/components/home/Bestseller";
import Blog from "@/components/home/Blog";
import Category from "@/components/home/Category";
import ClientSay from "@/components/home/ClientSay";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeAbout from "@/components/home/HomeAbout";
import SaleBanner from "@/components/home/SaleBanner";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <FeaturedProducts />
      <SaleBanner />
      <Bestseller />
      <ClientSay />
      <HomeAbout />
      <Blog />
    </>
  );
}
