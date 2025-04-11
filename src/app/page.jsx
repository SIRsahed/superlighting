import Banner from "@/components/home/Banner";
import Bestseller from "@/components/home/Bestseller";
import Blog from "@/components/home/Blog";
import Category from "@/components/home/Category";
import ClientSay from "@/components/home/ClientSay";
import Collection from "@/components/home/Collection";
import Delivary from "@/components/home/Delivary";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HomeAbout from "@/components/home/HomeAbout";
import Products from "@/components/home/Products";
import SaleBanner from "@/components/home/SaleBanner";

export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Products />
      <Delivary />
      <Collection />
      <FeaturedProducts />
      <SaleBanner />
      <Bestseller />
      <ClientSay />
      <HomeAbout />
      <Blog />
    </>
  );
}
