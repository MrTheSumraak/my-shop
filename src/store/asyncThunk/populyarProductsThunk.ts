"use client";

import apiRequest from "@/lib/apiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getPopulyarProducts = createAsyncThunk("products/getProducts", async () => {
    try {
        const response = await apiRequest("api/popularProducts");
        return response;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

export default getPopulyarProducts;
