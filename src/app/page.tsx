import UsegetProducts from "@/lib/useGetProducts";
import { CategoriesWidget } from "@/widgets/categories";
import CategoriesTabs from "@/widgets/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/FlashSales/FlashSales";
import HeaderUI from "@/widgets/header/HeaderActions";
import HeroSection from "@/widgets/hero-section/heroSecrtion";
import PopularProducts from "@/widgets/popular-products/PopularProducts";

async function HomePage() {
    const products = await UsegetProducts("api/products");
    const saleProducts = await UsegetProducts("api/saleProducts");

    console.log(saleProducts);
    return (
        <>
            <HeaderUI />
            <HeroSection />
            <CategoriesTabs />
            <FlashSales />
            {/* <PopularProducts products={products} /> */}
        </>
    );
}

export default HomePage;
