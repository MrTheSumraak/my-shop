import UsegetProducts from "@/lib/useGetProducts";
import CategoriesTabs from "@/widgets/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/FlashSales/FlashSales";
import HeaderUI from "@/widgets/header/HeaderActions";
import HeroSection from "@/widgets/hero-section/heroSecrtion";
import PopularProducts from "@/widgets/popular-products/PopularProducts";
import PopularSection from "@/widgets/popular-section/popularSection";

async function HomePage() {
    const products = await UsegetProducts("api/popularProducts");
    const saleProducts = await UsegetProducts("api/saleProducts");

    console.log(saleProducts);
    return (
        <>
            <HeaderUI />
            <HeroSection />
            <CategoriesTabs />
            <FlashSales saeleProducts={saleProducts} />
            <PopularSection popularProducts={products} />
            {/* <PopularProducts products={popularProducts} /> */}
        </>
    );
}

export default HomePage;
