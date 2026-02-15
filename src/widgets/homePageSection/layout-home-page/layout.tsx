"use client";

import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import CategoriesTabs from "@/widgets/homePageSection/categories-tabs/categoriesTabs";
import FlashSales from "@/widgets/homePageSection/FlashSales/FlashSales";
import HeroSection from "@/widgets/homePageSection/hero-section/heroSecrtion";
import PopularSection from "@/widgets/homePageSection/popular-section/popularSection";
import TrustBar from "@/widgets/homePageSection/trustBar/trustBar";
import { useDispatch, useSelector } from "@/store/rootReduser";
import getPopulyarProducts from "@/store/asyncThunk/populyarProductsThunk";
import { useEffect, useLayoutEffect } from "react";
import { selectIsLoading, selectProducts } from "@/store/slices/productsSlice";
import {
    selectIsSalesLoading,
    selectSalesProducts,
} from "@/store/slices/salesProducts";
import getSalesProducts from "@/store/asyncThunk/salesThunk";

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
            <FlashSales
                loading={isLoadingSalesProducts}
                saeleProducts={salesProducts}
            />
            <PopularSection
                loading={isLoadingPopulyarProducts}
                popularProducts={popularProducts}
            />
            <TrustBar />
        </>
    );
};

export default LayoutHomePage;
