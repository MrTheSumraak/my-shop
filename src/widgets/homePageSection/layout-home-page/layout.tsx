"use client";

import CategoriesTabs from "@/widgets/homePageSection/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/homePageSection/FlashSales/FlashSales";
import HeroSection from "@/widgets/homePageSection/hero-section/heroSecrtion";
import PopularSection from "@/widgets/homePageSection/popular-section/popularSection";
import TrustBar from "@/widgets/homePageSection/trustBar/trustBar";
import Loader from "@/shared/ui/loader/loader";
import useProducts from "@/shared/api/useProducts";
import ErrorComponent from "@/shared/ui/error/error";

const SALES_URL = process.env.NEXT_PUBLIC_API_FLASH_SALES!;
const POPULAR_URL = process.env.NEXT_PUBLIC_API_POPULAR!;

const LayoutHomePage = () => {
    const {
        data: salesProducts,
        isLoading: isLoadingSalesProducts,
        error: salesError,
    } = useProducts(SALES_URL);

    const {
        data: popularProducts,
        isLoading: isLoadingPopulyarProducts,
        error: popularError,
    } = useProducts(POPULAR_URL);

    return (
        <>
            <HeroSection />
            <CategoriesTabs />
            {isLoadingSalesProducts ? (
                <Loader />
            ) : salesError ? (
                <ErrorComponent error={salesError} />
            ) : (
                <FlashSales
                    loading={isLoadingSalesProducts}
                    request={salesProducts}
                    error={salesError}
                />
            )}
            {isLoadingPopulyarProducts ? (
                <Loader />
            ) : popularError ? (
                <ErrorComponent error={popularError} />
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
