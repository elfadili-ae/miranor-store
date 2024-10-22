import CategoryList from "@/components/CategoryList";
import PaddingWrapper from "@/components/PaddingWrapper";
import ProductsList from "@/components/ProductsList";
import Slider from "@/components/Slider";

const HomePage = () => {
  return (
    <div className="relative z-0 w-full flex flex-col">
      <Slider />
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-3xl mt-10 mb-2">Featured Products</h2>
      </PaddingWrapper>
      <ProductsList />
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-3xl mt-10 mb-2">Shop By Categories</h2>
      </PaddingWrapper>
      <CategoryList />
      <PaddingWrapper>
        <h2 className="text-2xl lg:text-3xl mt-10 mb-2">New Products</h2>
      </PaddingWrapper>
      <ProductsList />
    </div>
  );
};

export default HomePage;
