"use client";

import { IProduct } from "@/entities/product/api/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useProducts = (url: string, category?: string) => {
    const queryClient = useQueryClient();
    return useQuery({
        queryKey: ["products", url],
        queryFn: async () => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await res.json();

            if (!data) {
                throw new Error("Failed to fetch products");
            }

            switch (true) {
                case Array.isArray(data):
                    return data;
                case typeof data === "object":
                    return category
                        ? (data[category] ?? [])
                        : Object.values(data).flat();
                default:
                    throw new Error("Unexpected data format");
            }
        },
        // // если есть кэш — используем его как initialData
        // initialData: () =>
        //     queryClient.getQueryData<IProduct[]>(["products", url]),
        // staleTime: 1000 * 60 * 5, // 5 minutes
    });
};

export default useProducts;
