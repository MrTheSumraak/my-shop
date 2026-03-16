"use client";

import { createContext, useContext } from "react";
import useFilterHandlers from "./usefilterHandlers";
import { TFilterHandlers } from "@/widgets/productCatalog/types";

export const FiltersHandlersContext = createContext<TFilterHandlers | null>(
    null,
);

interface FiltersHandlersProviderProps {
    children: React.ReactNode;
}

export const FiltersHandlersProvider = ({
    children,
}: FiltersHandlersProviderProps) => {
    const handlers = useFilterHandlers();

    return (
        <FiltersHandlersContext.Provider value={handlers}>
            {children}
        </FiltersHandlersContext.Provider>
    );
};

export const useFiltersActions = () => {
    const ctx = useContext(FiltersHandlersContext);
    if (!ctx) {
        throw new Error(
            "useFiltersActions must be used within FiltersHandlersProvider",
        );
    }
    return ctx;
};
