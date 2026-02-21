"use client";

import { useDispatch, useSelector } from "@/store/rootReduser";
import {
    getSalesProductsId,
    selectedPrdouct,
} from "@/store/slices/salesProducts";
import { useEffect } from "react";

const useLoaderProductId = ({ id }: { id: string }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("RENDER HOOK");
        if (id) {
            dispatch(getSalesProductsId(id));
        }
    }, [id, dispatch]);

    const selectedProduct = useSelector(selectedPrdouct);
    const technicalSpecifications = selectedProduct?.technicalSpecifications;
    const reviews = selectedProduct?.reviews;
    console.log("SELECTED PRODUCT -", selectedProduct?.reviews);
    return { selectedProduct, technicalSpecifications, reviews };
};

export default useLoaderProductId;
