"use client";

import { use, useEffect, useRef } from "react";
import { IPopularProducts } from "./types";
import PopularProductsItem from "@/shared/ui/PopularProductsItem/PopularProductsItem";
import ArrowIcon from "@/shared/ui/iconComponents/ArrowIcon";

const PopularProductsClient = ({ products }: IPopularProducts) => {
    const sliderRef = useRef<HTMLUListElement>(null);

    const doubled = [...products, ...products];

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const half = el.scrollWidth / 2;

        let animationFrameId: number;
        const scrollStep = () => {
            if (!el) return;
            el.scrollLeft += 0.5;
            if (el.scrollLeft >= half) {
                el.scrollLeft -= half;
            }
            animationFrameId = requestAnimationFrame(scrollStep);
        };
        // animationFrameId = requestAnimationFrame(scrollStep);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    const scrollRight = () => {
        const el = sliderRef.current;
        if (!el) return;
        const half = el.scrollWidth / 2;
        el.scrollLeft += 300;
        if (el.scrollLeft >= half) {
            el.scrollLeft -= half;
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between">
                <h2 className="text-[clamp(0.8rem,2vw,2.25rem)] font-bold">
                    Популярное сейчас
                </h2>
                <button onClick={scrollRight}>
                    <ArrowIcon className="w-[clamp(0.8rem,2vw,3rem)] h-[clamp(0.8rem,2vw,3rem)]" />
                </button>
            </div>

            <ul
                ref={sliderRef}
                className="w-full flex flex-row gap-[clamp(0.5rem,0.8vw,1rem)] mt-4 overflow-x-scroll no-scrollbar scroll-smooth"
            >
                {doubled.map((item, i) => (
                    <PopularProductsItem
                        key={i}
                        item={item}
                        // img={item.imageUrl}
                        // inStock={item.inStock}
                    />
                ))}
            </ul>
        </div>
    );
};

export default PopularProductsClient;
