import { ISalesProducts } from "@/entities/product/api/types";

type TRequest = {
    salesEnd: string,
    items: ISalesProducts[];
};

export interface ISaleProducts {
    request: TRequest;
    loading: boolean;
    error: Error | null;
}
