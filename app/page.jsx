import Banner from "../components/Home/Banner";
import Bestseller from "../components/Home/Bestseller";
import Blog from "../components/Home/Blog";
import Category from "../components/Home/Category";
import ClientSay from "../components/Home/ClientSay";
import Collection from "../components/Home/Collection";
import Delivary from "../components/Home/Delivary";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import HomeAbout from "../components/Home/HomeAbout";
import Products from "../components/Home/Products";
import SaleBanner from "../components/Home/SaleBanner";


export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Products/>
      <Delivary/>
      <Collection/>
      <FeaturedProducts />
      <SaleBanner />
      <Bestseller />
      <ClientSay />
      <HomeAbout />
      <Blog />
    </>
  );
}
