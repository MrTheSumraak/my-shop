"use client";

import { useCallback, useMemo, useState } from "react";
import CatalogPageUI from "../page";
import {
    TRequest,
    useProductsPagination,
} from "@/shared/api/useProductsPagination";
import { useSelector } from "@/store/rootReduser";
import { buildFiltersByCategory } from "@/features/filters/configFilter";
import useFilteredItems from "@/features/filters/hooks/useFilteredItems";
import ErrorComponent from "@/shared/ui/error/error";

interface ICollectionsProduct {
    collection: TRequest;
}

const CollectionsProduct = ({ collection }: ICollectionsProduct) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useProductsPagination(page, collection);

    const filters = useSelector((state) => state.filtersProducts);

    const items = data?.items ?? [];

    const filtersConfig = useMemo(
        () => buildFiltersByCategory(items),
        [collection, items],
    );

    const filterItems = useFilteredItems(items, filters);

    const totalPages = data?.totalPages ?? 1;
    const total = data?.total ?? 0;

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
            category={collection}
            total={total}
        />
    );
};

export default CollectionsProduct;
