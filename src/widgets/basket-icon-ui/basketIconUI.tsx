"use client";

import Link from "next/link";
import BasketIcon from "../../shared/ui/iconComponents/BasketIcon";
import { useSelector } from "@/store/rootReduser";
import { bascketLength } from "@/store/slices/basketSlices";

const BasketIconUI = () => {
    const basketCount = useSelector(bascketLength);
    const hasItemsInBasket = basketCount > 0;

    return (
        <Link
            href="/basket"
            className="p-2 hover:bg-gray-100 dark:hover:bg-card-dark rounded-lg transition-colors relative"
        >
            <span className="material-symbols-outlined">
                <BasketIcon />
            </span>

            {hasItemsInBasket && (
                <span
                    className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center 
                               bg-red-500 text-white text-[10px] font-bold rounded-full shadow-md px-[4px]"
                >
                    {basketCount}
                </span>
            )}
        </Link>
    );
};

export default BasketIconUI;
