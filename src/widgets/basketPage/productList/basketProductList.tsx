"use client";

import { useSelector } from "@/store/rootReduser";
import BasketProductItem from "./productItem/basketProductItem";
import { selectBasket } from "@/store/slices/basketSlices";
import { ISalesProducts } from "@/entities/product/api/types";
import ArrowBackIcon from "@/shared/ui/iconComponents/ArrowBackIcon";
import Link from "next/link";

const BasketProductList = () => {
    const productsBasket: ISalesProducts[] = useSelector(selectBasket);

    return (
        <section className="flex-grow">
            <h1 className="text-4xl font-bold mb-8">
                Your Cart
                <span className="text-slate-400 dark:text-slate-500 font-normal">
                    {(productsBasket.length > 0 &&
                        `(${productsBasket.length})`) ||
                        "(0)"}
                </span>
            </h1>

            <ul className="space-y-6">
                {productsBasket.map((product, index) => {
                    return <BasketProductItem key={index} product={product} />;
                })}
            </ul>

            <button className="mt-8 flex justify-between items-center">
                <Link
                    className="flex items-center gap-2 text-primary font-medium hover:underline"
                    href="/"
                >
                    <span className="material-symbols-outlined">
                        <ArrowBackIcon />
                    </span>
                    Continue Shopping
                </Link>
            </button>
        </section>
    );
};

export default BasketProductList;
