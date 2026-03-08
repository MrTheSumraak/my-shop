"use client";

import CatalogList from "./catalogList/catalogList";
import Filter from "../../features/filters/ui/filter";
import Pagination from "./pagination/pagination";
import ToolBar from "./toolBar/toolBar";
import Loader from "@/shared/ui/loader/loader";
import Breadcrumbs from "../navigation/navigation";
import { useCallback, useMemo, useState } from "react";
import { useProductsPagination } from "@/shared/api/useProductsPagination";
import ErrorComponent from "@/shared/ui/error/error";
import { FiltersHandlersProvider } from "@/features/filters/model/filtersHandlersContext";
import { useSelector } from "@/store/rootReduser";
import { buildFiltersByCategory } from "@/features/filters/configFilter";
import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import useFilteredItems from "@/features/filters/hooks/useFilteredItems";

interface IProductCatalog {
    category: string;
}

const ProductCatalog = ({ category }: IProductCatalog) => {
    const [page, setPage] = useState(1);

    const { data, isLoading, error } = useProductsPagination(page, category);

    const filters = useSelector((state) => state.filtersProducts);

    const items = data?.items ?? [];

    const filtersConfig = useMemo(
        () => buildFiltersByCategory(category, items),
        [category, items],
    );

    const filterItems = useFilteredItems(items, filters);

    // console.log("FILTERED ITEMS -", filterItems);
    const totalPages = data?.totalPages ?? 1;
    const total = data?.total ?? 0;

    const handlePageChange = useCallback((page: number) => setPage(page), []);

    if (error) return <ErrorComponent error={error} />;

    return (
        <section className="max-w-[1440px] mx-auto flex gap-8 items-start">
            <FiltersHandlersProvider>
                <Filter filters={filtersConfig} />
            </FiltersHandlersProvider>

            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <Breadcrumbs category={category} />

                        <h2 className="text-2xl font-bold tracking-tight">
                            {category[0].toUpperCase() + category.slice(1)}
                            <span className="text-sm font-normal text-slate-500 ml-2">
                                ({total} items)
                            </span>
                        </h2>
                    </div>

                    <ToolBar />
                </div>

                {isLoading ? (
                    <Loader />
                ) : (
                    <CatalogList products={filterItems} />
                )}

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default ProductCatalog;
