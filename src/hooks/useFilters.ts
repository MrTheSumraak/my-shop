import { IProduct } from "@/entities/product/api/types";
import { buildFiltersByCategory } from "@/features/filters/configFilter";
import useFilteredItems from "@/features/filters/hooks/useFilteredItems";
import { useSelector } from "@/store/rootReduser";
import { useMemo } from "react";

const useFilters = (items: IProduct[]) => {
    const filters = useSelector((state) => state.filtersProducts);

    const filtersConfig = useMemo(
        () => buildFiltersByCategory(items),
        [items],
    );

    const filterItems = useFilteredItems(items, filters);

    return { filtersConfig, filterItems };
};

export default useFilters;
