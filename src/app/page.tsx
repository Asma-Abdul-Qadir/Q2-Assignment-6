import Image from "next/image";
import Navbar from "./components/nav"; 
import Banner from "./components/banner";
import SmallerBanner  from "./components/smaller banner";
import Category from "./components/category";
import Products from "./components/products";
import BigBanner from "./components/bigbanner";
import DiscountProducts from "./components/discountproducts";
import Banner2 from "./components/banner2";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <SmallerBanner />
      <Category />
      <Products/>
      <BigBanner/>
      <DiscountProducts/>
      <Banner2/>
      <Footer/>
    </div>
  );
}



