"use client";

import { ISalesProducts } from "@/entities/product/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReduser";
import { createSelector } from "@reduxjs/toolkit";

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
        bascketLength: (state) => state.basket.length,
    },
    reducers: {
        addProductToBasket: (state, action: PayloadAction<ISalesProducts>) => {
            state.basket.push(action.payload);
        },
        deleteProductFromBasket: (state, action: PayloadAction<string>) => {
            state.basket = state.basket.filter(
                (product) => product.id !== action.payload,
            );
        },
        incrementProduct: (state, action: PayloadAction<string>) => {
            const product = state.basket.find(
                (product) => product.id === action.payload,
            );

            if (!product) return;

            // если нет countInBasket — ставим 0
            if (!product.countInBasket) {
                product.countInBasket = 0;
            }

            // проверяем лимит склада
            if (product.countInBasket < product.count) {
                product.countInBasket++;
            }
        },
        decrementProduct: (state, action) => {
            const product = state.basket.find((p) => p.id === action.payload);
            if (!product) return;

            if (product.countInBasket && product.countInBasket > 1) {
                product.countInBasket--;
            } else {
                // countInBasket === 1 → после уменьшения будет 0 → удаляем
                state.basket = state.basket.filter(
                    (p) => p.id !== action.payload,
                );
            }
        },
    },
});
// проверка наличия товара в корзине
export const selectIsProductInBasket =
    (productId: string) =>
    (state: RootState): boolean =>
        state.basketProducts.basket.some((p) => p.id === productId);

export const selectBasket = (state: RootState) => state.basketProducts.basket; // все товары в корзине

export const selectTotalCount = createSelector(
    [selectBasket],
    (
        basket, // количество всех товаров в корзине
    ) => basket.reduce((acc, product) => acc + (product.countInBasket || 0), 0),
);

// сума всех товаров в корзине, с учетом их количества
export const selectTotalPrice = createSelector([selectBasket], (basket) =>
    basket.reduce(
        (acc, product) => acc + product.price * (product.countInBasket || 0),
        0,
    ),
);

export const { reducer } = basketSlice;
export const {
    addProductToBasket,
    deleteProductFromBasket,
    incrementProduct,
    decrementProduct,
} = basketSlice.actions;

export const { bascketLength } = basketSlice.selectors;
