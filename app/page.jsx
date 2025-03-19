import Banner from "@/components/Home/Banner";
import Bestseller from "@/components/Home/Bestseller";
import Blog from "@/components/Home/Blog";
import Category from "@/components/Home/Category";
import ClientSay from "@/components/Home/ClientSay";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import HomeAbout from "@/components/Home/HomeAbout";
import SaleBanner from "@/components/Home/SaleBanner";

export default function Home() {
  return (
    <>
      <Banner/>
      <Category/>
      <FeaturedProducts/>
      <SaleBanner/>
      <Bestseller/>
      <ClientSay/>
      <HomeAbout/>
      <Blog/>
    </>
  );
}