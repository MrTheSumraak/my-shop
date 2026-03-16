import { IProduct } from "@/entities/product/api/types";
import BasketIcon from "@/shared/ui/iconComponents/BasketIcon";
import Link from "next/link";
import React from "react";

interface ICatalogListItem {
    product: IProduct;
}

const CatalogListItem = ({ product }: ICatalogListItem) => {
    const { id, name, price, imageUrl, technicalSpecifications } = product;
    return (
        <Link
            href={`/product/${id}`}
            className="glass-card rounded-xl p-4 flex flex-col group transition-all duration-300 neon-glow relative overflow-hidden"
        >
            <div className="absolute top-4 left-4 z-10">
                <span className="bg-accent-catalog-green/20 text-accent-catalog-green text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest border border-accent-catalog-green/30">
                    New Arrival
                </span>
            </div>

            <div className="relative w-full aspect-[4/3] rounded-lg bg-black/40 overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500">
                <img
                    alt={"Product Image"}
                    className="w-full h-full object-cover mix-blend-lighten opacity-80"
                    src={imageUrl}
                />
            </div>

            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <button className="text-slate-500 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                            favorite
                        </span>
                    </button>
                </div>

                <p className="text-slate-400 text-xs font-mono">
                    {technicalSpecifications &&
                        Object.values(technicalSpecifications)
                            .slice(0, 3)
                            .map((spec, index) => (
                                <span key={index} className="mx-1">
                                    {spec} •
                                </span>
                            ))}
                </p>
            </div>

            <div className="mt-auto pt-6 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">
                        ${price && price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 line-through">
                        {price && (price * 1.2).toFixed(2)}
                    </span>
                </div>

                <button className="bg-primary hover:bg-primary/80 text-background-catalog-dark size-10 rounded-lg flex items-center justify-center transition-all group-hover:scale-110 active:scale-95">
                    <span className="material-symbols-outlined">
                        <BasketIcon />
                    </span>
                </button>
            </div>
        </Link>
    );
};

export default React.memo(CatalogListItem);
