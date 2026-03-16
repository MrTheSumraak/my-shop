"use client";

import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import { useProductsPagination } from "@/shared/api/useProductsPagination";
import ErrorComponent from "@/shared/ui/error/error";
import Loader from "@/shared/ui/loader/loader";
import CatalogPageUI from "../page";
import useFilters from "@/hooks/useFilters";
import { useCallback, useState } from "react";

// interface IAllProducts {

// }

const AllProductsWidget = ({}) => {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useProductsPagination(page, "all");
    const items: IProduct[] | ISalesProducts[] | [] = data?.items ?? [];
    const { filterItems, filtersConfig } = useFilters(items);

    const handlePageChange = useCallback((page: number) => setPage(page), []);
    if (error) return <ErrorComponent error={error} />;
    return isLoading ? (
        <Loader />
    ) : (
        <CatalogPageUI
            isLoading={isLoading}
            total={filterItems.length}
            filterConfig={filtersConfig}
            filterItems={filterItems}
            page={page}
            totalPages={data?.totalPages ?? 1}
            handlePageChange={handlePageChange}
        />
    );
};

export default AllProductsWidget;
