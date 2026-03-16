"use client";

import { useCallback, useState } from "react";
import ErrorComponent from "@/shared/ui/error/error";
import CatalogPageUI from "./page";
import useGetProductsPagination from "@/hooks/useGetProductsPagination";
import useFilters from "@/hooks/useFilters";

interface IProductCatalog {
    category: string;
}

const ProductCatalogCategory = ({ category }: IProductCatalog) => {
    const [page, setPage] = useState(1);

    const { items, totalPages, total, error, isLoading } =
        useGetProductsPagination(page, category);
    const { filterItems, filtersConfig } = useFilters(items);

    const handlePageChange = useCallback((page: number) => setPage(page), []);

    if (error) return <ErrorComponent error={error} />;

    return (
        <CatalogPageUI
            isLoading={isLoading}
            filterItems={filterItems}
            filterConfig={filtersConfig}
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            category={category}
            total={total}
        />
    );
};

export default ProductCatalogCategory;
