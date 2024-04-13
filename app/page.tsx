import HeroBanner from "@/components/hero-banner";
import Event from "@/components/event";
import Header from "@/components/header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Header />
        <HeroBanner />
        <Event />
        <Footer />
    </div>
  );
}
