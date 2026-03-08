"use client";

import CategoriesTabs from "@/widgets/homePageSection/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/homePageSection/FlashSales/FlashSales";
import HeroSection from "@/widgets/homePageSection/hero-section/heroSecrtion";
import PopularSection from "@/widgets/homePageSection/popular-section/popularSection";
import TrustBar from "@/widgets/homePageSection/trustBar/trustBar";
import Loader from "@/shared/ui/loader/loader";
import useProducts from "@/shared/api/useProducts";

const salesUrl = "/api/flashSales";
const popularUrl = "/api/popular";

const LayoutHomePage = () => {
    const {
        data: salesProducts,
        isLoading: isLoadingSalesProducts,
        error: salesError,
    } = useProducts(salesUrl);

    const {
        data: popularProducts,
        isLoading: isLoadingPopulyarProducts,
        error: popularError,
    } = useProducts(popularUrl);

    return (
        <>
            <HeroSection />
            <CategoriesTabs />
            {isLoadingSalesProducts ? (
                <Loader />
            ) : (
                <FlashSales
                    loading={isLoadingSalesProducts}
                    saeleProducts={salesProducts}
                />
            )}
            {isLoadingPopulyarProducts ? (
                <Loader />
            ) : (
                <PopularSection
                    loading={isLoadingPopulyarProducts}
                    popularProducts={popularProducts}
                    error={popularError}
                />
            )}

            <TrustBar />
        </>
    );
};

export default LayoutHomePage;
