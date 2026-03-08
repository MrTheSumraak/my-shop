"use client";

import { useDispatch } from "@/store/rootReduser";
import { setTechnicalSpecifications } from "@/store/slices/filtersSlices";
import { TFilterHandlers } from "../../../widgets/productCatalog/types";

const useFilterHandlers = () => {
    const dispatch = useDispatch();

    const handleSetTechnicalSpecifications = (value: string, name: string) =>
        dispatch(setTechnicalSpecifications({ name, value }));

    const filterHandlers: TFilterHandlers = {
        handleSetTechnicalSpecifications,
    };

    return filterHandlers;
};

export default useFilterHandlers;
