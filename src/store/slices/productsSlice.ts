// "use client";

// import { IProduct } from "@/entities/product/api/types";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import getPopulyarProducts from "../asyncThunk/populyarProductsThunk";

// interface IPopularProductsState {
//     populyarProducts: IProduct[];
//     isLoading: boolean;
//     hasError: string | null;
// }

// const initialState: IPopularProductsState = {
//     populyarProducts: [],
//     isLoading: false,
//     hasError: null,
// };

// const populyarProductsSlioce = createSlice({
//     name: "populyarProducts",
//     initialState,
//     selectors: {
//         selectProducts: (state) => state.populyarProducts,
//         selectIsLoading: (state) => state.isLoading,
//         selectHasError: (state) => state.hasError,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getPopulyarProducts.pending, (state) => {
//                 state.isLoading = true;
//                 state.hasError = null;
//             })
//             .addCase(
//                 getPopulyarProducts.fulfilled,
//                 (state, action: PayloadAction<IProduct[]>) => {
//                     state.populyarProducts = action.payload;
//                     state.isLoading = false;
//                 },
//             )
//             .addCase(getPopulyarProducts.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.hasError = action.error.message || "Something went wrong";
//             });
//     },
// });

// export const { reducer } = populyarProductsSlioce;
// export const { selectProducts, selectIsLoading, selectHasError } =
//     populyarProductsSlioce.selectors;
