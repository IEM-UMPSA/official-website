import HeroBanner from "@/components/hero-banner";
import Event from "@/components/event";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
import Award from "@/components/Award";
import BuyMeACoffeeButton from "@/components/BuyMeACoffee";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Header />
        <HeroBanner />
        <Award />

        <Event />
        <Enquiry />
        <Footer />
        <BuyMeACoffeeButton />
    </div>
  );
}
