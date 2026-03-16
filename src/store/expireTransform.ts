import { ISalesProducts } from "@/entities/product/api/types";
import { createTransform } from "redux-persist";

interface IBasketState {
    basket: ISalesProducts[];
    isLoading: boolean;
    hasError: string | null;
    _persistedAt?: number;
}

const expireTransform = createTransform<IBasketState, IBasketState>(
    // это то что выполняется перед отправкой в localStorage
    (inboundState) => {
        return {
            ...inboundState,
            _persistedAt: Date.now(),
        };
    },
    // это то что выполняется после получения из localStorage
    (outboundState) => {
        const EXPIRE_TIME = 1000 * 60; // 1 minute
        if (!outboundState._persistedAt) {
            return outboundState;
        }
        if (Date.now() - outboundState._persistedAt > EXPIRE_TIME) {
            return {
                ...outboundState,
                basket: [],
            };
        }

        return outboundState;
    },
    {
        whitelist: ["basketProducts"],
    },
);

export default expireTransform;
