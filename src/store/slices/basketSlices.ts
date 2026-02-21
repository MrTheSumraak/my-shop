"use client";

import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IBasketState {
    basket: ISalesProducts[];
    isLoading: boolean;
    hasError: string | null;
}

const initialState: IBasketState = {
    basket: [],
    isLoading: false,
    hasError: null,
};

const basketSlice = createSlice({
    name: "basketProducts",
    initialState,
    selectors: {
        selectBasket: (state) => state.basket,
    },
    reducers: {
        addProductToBasket: (state, action: PayloadAction<ISalesProducts>) => {
            state.basket.push(action.payload);
        },
    },
});

export const { reducer } = basketSlice;
export const { addProductToBasket } = basketSlice.actions;
export const { selectBasket } = basketSlice.selectors;
