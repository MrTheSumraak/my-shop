"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";
// import { reducer as productsReducer,  } from './slices/productsSlice';
// import { reducer as salesProductsSlice } from './slices/salesProducts';
// import { reducer as reviewsProductsSlice } from './slices/reviewsSlices';
import { reducer as filtersSlice } from "./slices/filtersSlices";
import { reducer as basketProductsSlice } from "./slices/basketSlices";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import expireTransform from "./expireTransform";

const prsistConfig = {
    key: "root",
    storage,
    transforms: [expireTransform],
    whitelist: ["basketProducts"],
};

export const rootReducer = combineReducers({
    // populyarProducts: productsReducer,
    // salesProducts: salesProductsSlice,
    // reviewsProducts: reviewsProductsSlice,
    basketProducts: basketProductsSlice,
    filtersProducts: filtersSlice,
});
const persistedReducer = persistReducer(prsistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
    devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
