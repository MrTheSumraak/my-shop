"use client";

import CategoriesTabs from "@/widgets/homePageSection/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/homePageSection/FlashSales/FlashSales";
import HeroSection from "@/widgets/homePageSection/hero-section/heroSecrtion";
import PopularSection from "@/widgets/homePageSection/popular-section/popularSection";
import TrustBar from "@/widgets/homePageSection/trustBar/trustBar";
import { useDispatch, useSelector } from "@/store/rootReduser";
import getPopulyarProducts from "@/store/asyncThunk/populyarProductsThunk";
import { useEffect } from "react";
import { selectIsLoading, selectProducts } from "@/store/slices/productsSlice";
import {
    getSalesProductsId,
    selectIsSalesLoading,
    selectSalesProducts,
} from "@/store/slices/salesProducts";
import getSalesProducts from "@/store/asyncThunk/salesThunk";
import Loader from "@/shared/ui/loader/loader";

const LayoutHomePage = () => {
    const dispatch = useDispatch();
    const isLoadingPopulyarProducts = useSelector(selectIsLoading);
    const isLoadingSalesProducts = useSelector(selectIsSalesLoading);

    useEffect(() => {
        console.log("RENDER");
        dispatch(getPopulyarProducts());
        dispatch(getSalesProducts());
    }, [dispatch]);

    const popularProducts = useSelector(selectProducts);
    const salesProducts = useSelector(selectSalesProducts);

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
                />
            )}

            <TrustBar />
        </>
    );
};

export default LayoutHomePage;
