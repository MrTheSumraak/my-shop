"use client";

import { IProduct } from "@/entities/product/api/types";
import { useState } from "react";

const useAISearch = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const search = async (query: string) => {
        try {
            setIsLoading(true);
            const aiRes = await fetch("/api/ai-search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });

            const aiData = await aiRes.json();

            const filterString = aiData.choices[0].message.content;
            const parsedFilter = JSON.parse(filterString);

            const productsRes = await fetch("/api/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ filter: parsedFilter }),
            });

            const { products } = await productsRes.json();
            setProducts(products);
        } catch (e) {
            console.error("AI Search Error:", e);
            throw new Error("AI Search Error");
        } finally {
            setIsLoading(false);
        }
    };

    return { search, products, isLoading };
};

export default useAISearch;
