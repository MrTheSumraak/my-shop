"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";
import { reducer as productsReducer,  } from './slices/productsSlice';
import { reducer as salesProductsSlice } from './slices/salesProducts';

export const rootReducer = combineReducers({
    populyarProducts: productsReducer,
    salesProducts: salesProductsSlice
});

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
