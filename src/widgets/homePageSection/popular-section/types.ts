import { IProduct } from "@/entities/product/api/types";

type TRequest = {
    items: IProduct[];
};

export interface IPopularSection {
    popularProducts: TRequest;
    loading: boolean;
    error?: Error | null;
}
