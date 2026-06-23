import Header from "./Section/Header/page";
import Hero from "./Section/Hero/page";
import Sushis from "./Section/sushi/page";
import Collectios from "./Section/collectios/page";
import Philosophy from "./Section/philosophy/page"
import Location from "./Section/location/page";
import Footer from "./Section/footer/page"

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Sushis/>
      <Collectios/>
      <Philosophy/>
      <Location/>
      <Footer/>
    </>
  );
}
