"use client";

import { ISalesProducts } from "@/entities/product/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getSalesProducts from "../asyncThunk/salesThunk";

interface IPopularProductsState {
    salesProducts: ISalesProducts[];
    selectedProduct: null | ISalesProducts;
    isLoading: boolean;
    hasError: string | null;
}

const initialState: IPopularProductsState = {
    salesProducts: [],
    selectedProduct: null,
    isLoading: false,
    hasError: null,
};

const salesProductsSlice = createSlice({
    name: "salesProducts",
    initialState,
    selectors: {
        selectSalesProducts: (state) => state.salesProducts,
        selectIsSalesLoading: (state) => state.isLoading,
        selectedPrdouct: (state) => state.selectedProduct,
        selectReiewsProduct: (state) => state.selectedProduct?.reviews,
        selectSalesHasError: (state) => state.hasError,
    },
    reducers: {
        getSalesProductsId: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            const product = state.salesProducts.find((item) => item.id === id);
            state.selectedProduct = product || null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSalesProducts.pending, (state) => {
                state.isLoading = true;
                state.hasError = null;
            })
            .addCase(
                getSalesProducts.fulfilled,
                (state, action: PayloadAction<ISalesProducts[]>) => {
                    state.salesProducts = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(getSalesProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = action.error.message || "Something went wrong";
            });
    },
});

export const { reducer } = salesProductsSlice;
export const { getSalesProductsId } = salesProductsSlice.actions;
export const {
    selectSalesProducts,
    selectIsSalesLoading,
    selectSalesHasError,
    selectedPrdouct,
    selectReiewsProduct
} = salesProductsSlice.selectors;
