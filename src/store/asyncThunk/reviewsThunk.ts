"use client";

import apiRequest from "@/lib/apiRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getReviewsProducts = createAsyncThunk("products/getReviews", async () => {
    try {
        const response = await apiRequest("api/userReviews")
        return response;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
});

export default getReviewsProducts;  
