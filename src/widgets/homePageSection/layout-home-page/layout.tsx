// "use client";

import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import CategoriesTabs from "@/widgets/homePageSection/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/homePageSection/FlashSales/FlashSales";
import HeroSection from "@/widgets/homePageSection/hero-section/heroSecrtion";
import PopularSection from "@/widgets/homePageSection/popular-section/popularSection";
import TrustBar from "@/widgets/homePageSection/trustBar/trustBar";

interface ILayoutHomePageProps {
    saleProducts: ISalesProducts[];
    products: IProduct[];
}

const LayoutHomePage = ({ saleProducts, products }: ILayoutHomePageProps) => {
    return (
        <>
            <HeroSection />
            <CategoriesTabs />
            <FlashSales saeleProducts={saleProducts} />
            <PopularSection popularProducts={products} />
            <TrustBar />
        </>
    );
};

export default LayoutHomePage;
