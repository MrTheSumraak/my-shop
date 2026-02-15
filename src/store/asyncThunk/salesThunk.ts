"use client";

import apiRequest from "@/lib/apiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getSalesProducts = createAsyncThunk("products/getSalesProducts", async () => {
    try {
        const response =  await apiRequest("api/saleProducts");
        return response;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

export default getSalesProducts;
