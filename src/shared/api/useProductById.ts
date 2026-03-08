"use client";

import { ISalesProducts } from "@/entities/product/api/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useProductById = (id: string, url: string) => {
    const queryClient = useQueryClient();

    const cachedProducts = queryClient.getQueryData<ISalesProducts[]>([
        "products",
        url,
    ]);

    let cachedProduct: ISalesProducts | undefined;
    if (Array.isArray(cachedProducts)) {
        cachedProduct = cachedProducts.find((product) => product.id === id);
    }

    const { data, isLoading, error } = useQuery<ISalesProducts>({
        queryKey: ["product", url, id],
        queryFn: async () => {
            const res = await fetch(`${url}/${id}`);
            if (!res.ok) throw new Error("Failed to fetch product");
            return res.json();
        },
        enabled: !cachedProduct,
        staleTime: 1000 * 60 * 5,
    });

    return {
        product: cachedProduct ?? data,
        isLoading,
        error,
    };
};

export default useProductById;
