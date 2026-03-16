import { useMemo } from "react";
import { IProduct, ISalesProducts } from "@/entities/product/api/types";

type TFiltersState = {
    category: string[];
    name: string[];
    brand: string[];
    memory: string[];
    cpu: string[];
    ram: string[];
    type: string[];
    anc: string[];
    display: string[];
    colors: string[];
    minPrice: number;
    maxPrice: number;
    minRating: number;
    maxRating: number;
    isInStock: boolean;
    isreviews: boolean;
};

const matchArray = (value: string | undefined, filters: string[]) =>
    filters.length === 0 ||
    (value &&
        filters.some((f) => value.toLowerCase().includes(f.toLowerCase())));

const matchExact = (value: string | undefined, filters: string[]) =>
    filters.length === 0 ||
    (value && filters.some((f) => value.toLowerCase() === f.toLowerCase()));

const matchRange = (value: number, min: number, max: number) =>
    (min === 0 && max === 0) || (value >= min && value <= (max || Infinity));

const useFilteredProducts = (
    items: (IProduct | ISalesProducts)[],
    filters: TFiltersState,
) => {
    return useMemo(() => {
        return items.filter((item) => {
            const specs = item.technicalSpecifications ?? {};
            const colors = item.additionalInfo?.colors ?? {};

            // 1. Technical specs
            const techPass = Object.entries(filters)
                .filter(([key]) => key.toUpperCase() in specs)
                .every(([key, selected]) => {
                    if (!Array.isArray(selected) || selected.length === 0)
                        return true;

                    const value = specs[key.toUpperCase()];
                    return matchArray(String(value), selected);
                });

            // 2. Price
            const pricePass = matchRange(
                item.price,
                filters.minPrice,
                filters.maxPrice,
            );

            // 3. Rating
            const ratingPass = matchRange(
                item.rating,
                filters.minRating,
                filters.maxRating,
            );

            // 4. Stock
            const stockPass = filters.isInStock ? item.inStock : true;

            // 5. Name
            const namePass = matchArray(item.name, filters.name);

            // 6. Brand
            const brandPass = matchExact(item.brand, filters.brand);

            // 7. Display 
            const displayPass = matchArray(specs.Display, filters.display);

            // 8. Colors 
            const colorPass =
                filters.colors.length === 0 ||
                filters.colors.some((selectedColor) =>
                    Object.keys(colors).some(
                        (colorName) =>
                            colorName.toLowerCase() ===
                            selectedColor.toLowerCase(),
                    ),
                );

            return (
                techPass &&
                pricePass &&
                ratingPass &&
                stockPass &&
                namePass &&
                brandPass &&
                displayPass &&
                colorPass
            );
        });
    }, [items, filters]);
};

export default useFilteredProducts;
