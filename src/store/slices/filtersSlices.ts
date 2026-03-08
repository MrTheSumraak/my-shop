import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
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
}

const initialState: IInitialState = {
    category: [],
    name: [],

    brand: [],

    memory: [],
    cpu: [],
    ram: [],
    type: [],
    anc: [],
    display: [],

    colors: [],

    minPrice: 0,
    maxPrice: 0,
    minRating: 0,
    maxRating: 0,

    isInStock: false,
    isreviews: false,
};

const filtersSlice = createSlice({
    name: "filtersProducts",
    initialState,
    selectors: {
        selectCategory: (state) => state.category,
        selectName: (state) => state.name,
        selectMinPrice: (state) => state.minPrice,
        selectMaxPrice: (state) => state.maxPrice,
        selectMinRating: (state) => state.minRating,
        selectMaxRating: (state) => state.maxRating,
        selectIsInStock: (state) => state.isInStock,
        selectIsreviews: (state) => state.isreviews,
    },
    reducers: {
        setTechnicalSpecifications: (
            state,
            action: PayloadAction<{ name: string; value: string }>,
        ) => {
            const { name, value } = action.payload;

            const arr = state[name] as string[];
            const set = new Set(arr);

            if (set.has(value)) {
                set.delete(value);
            } else {
                set.add(value);
            }

            state[name] = [...set].flat();
        },
    },
});

export const { setTechnicalSpecifications } = filtersSlice.actions;

export const {
    selectCategory,
    selectName,
    selectMinPrice,
    selectMaxPrice,
    selectMinRating,
    selectMaxRating,
    selectIsInStock,
    selectIsreviews,
} = filtersSlice.selectors;

export const { reducer } = filtersSlice;
