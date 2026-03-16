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

            return data;

            // switch (true) {
            //     case Array.isArray(data):
            //         return data;
            //     case typeof data === "object":
            //         return category
            //             ? (data[category] ?? [])
            //             : Object.values(data).flat();
            //     default:
            //         throw new Error("Unexpected data format");
            // }
        },
        staleTime: 10 * 60 * 1000, // 10 минут
        gcTime: 10 * 60 * 1000, // 10 минут
        // если есть кэш — используем его как initialData
        initialData: () =>
            queryClient.getQueryData<IProduct[]>(["products", url]),
    });
};

export default useProducts;
