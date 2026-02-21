"use client";

import { useSelector } from "@/store/rootReduser";
import BasketProductItem from "./productItem/basketProductItem";
import { selectBasket } from "@/store/slices/basketSlices";
import { ISalesProducts } from "@/entities/product/api/types";

const BasketProductList = () => {
    const productsBasket: ISalesProducts[] = useSelector(selectBasket);
    console.log(productsBasket);

    return (
        <section className="flex-grow">
            <h1 className="text-4xl font-bold mb-8">
                Your Cart
                <span className="text-slate-400 dark:text-slate-500 font-normal">
                    {(productsBasket.length > 0 && `(${productsBasket.length})`) || "0"}
                </span>
            </h1>

            <ul className="space-y-6">
                {productsBasket.map((product, index) => {
                    return <BasketProductItem key={index} product={product} />;
                })}
            </ul>

            <div className="mt-8 flex justify-between items-center">
                <a
                    className="flex items-center gap-2 text-primary font-medium hover:underline"
                    href="#"
                >
                    <span className="material-symbols-outlined">
                        arrow_back
                    </span>
                    Continue Shopping
                </a>
            </div>
        </section>
    );
};

export default BasketProductList;
