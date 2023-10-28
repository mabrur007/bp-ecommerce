import DealsAndOffers from "../components/DealsAndOffers";
import ExtraServices from "../components/ExtraServices";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Quote from "../components/Quote";

const HomePage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2">
      <Hero />
      <DealsAndOffers />
      <Products />
      <Quote />
      <ExtraServices />
    </div>
  );
};

export default HomePage;
