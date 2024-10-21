import PaddingWrapper from "@/components/PaddingWrapper";
import ProductsList from "@/components/ProductsList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <Slider />
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-4xl mt-10 mb-2">Featured Products</h2>
      </PaddingWrapper>
      <ProductsList />
    </div>
  );
};

export default HomePage;
