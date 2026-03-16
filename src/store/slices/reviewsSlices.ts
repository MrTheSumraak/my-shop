"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserReviews } from "@/widgets/productPageDetailsSection/userReviews/UserReviews";
import getReviewsProducts from "../asyncThunk/reviewsThunk";

interface IReviewsState {
    reviews: UserReviews[];
    isLoading: boolean;
    hasError: string | null;
}

const initialState: IReviewsState = {
    reviews: [],
    isLoading: false,
    hasError: null,
};

const reviewsProductsSlice = createSlice({
    name: "reviewsProducts",
    initialState,
    selectors: {
        selectReviews: (state) => state.reviews,
        selectIsLoading: (state) => state.isLoading,
        selectHasError: (state) => state.hasError,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getReviewsProducts.pending, (state) => {
                state.isLoading = true;
                state.hasError = null;
            })
            .addCase(
                getReviewsProducts.fulfilled,
                (state, action: PayloadAction<UserReviews[]>) => {
                    state.reviews = action.payload;
                    state.isLoading = false;
                },
            )
            .addCase(getReviewsProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = action.error.message || "Something went wrong";
            });
    },
});

export const { reducer } = reviewsProductsSlice;
export const { selectReviews, selectIsLoading, selectHasError } =
    reviewsProductsSlice.selectors;
