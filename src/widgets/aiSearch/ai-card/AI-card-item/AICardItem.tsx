import { IProduct } from "@/entities/product/api/types";
import BasketIcon from "@/shared/ui/iconComponents/BasketIcon";
import StarIcon from "@/shared/ui/iconComponents/StarIcon";
import Link from "next/link";

interface IAICardItem {
    item: IProduct;
}

const AICardItem = ({ item }: IAICardItem) => {
    const { imageUrl, category, name, price, rating, id } = item;

    return (
        <Link
            href={`/product/${id}`}
            className="group bg-surface-dark rounded-xl border border-border-dark overflow-hidden flex flex-col hover:border-primary/50 transition-all"
        >
            <div className="relative aspect-video bg-background-dark overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt="Sleek black gaming laptop with glowing blue keyboard"
                    src={imageUrl}
                />
                <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-bold px-2 py-1 rounded">
                    MATCHED SPECS
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                        {category}
                    </span>
                    <div className="flex items-center text-primary">
                        <span className="material-symbols-outlined text-sm fill-1">
                            <StarIcon />
                        </span>
                        <span className="text-xs font-bold ml-1">{rating}</span>
                    </div>
                </div>

                <h3 className="text-lg font-bold leading-tight mb-2">
                    {name}
                    <span className="text-primary">Gaming Laptop</span>
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                    {/* {valuesTechnicalSpecifications.map((value) => (
                        <span
                            key={value}
                            className="text-[10px] bg-background-dark px-2 py-1 rounded text-slate-400"
                        >
                            {value}
                        </span>
                    ))} */}
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="text-xl font-bold">${price}</div>
                    <button className="size-10 bg-primary hover:bg-primary/80 text-background-dark rounded-lg flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined">
                            <BasketIcon />
                        </span>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default AICardItem;
