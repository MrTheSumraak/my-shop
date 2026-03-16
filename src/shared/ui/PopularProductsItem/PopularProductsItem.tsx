import clsx from "clsx";
import { IPopularProductsItem } from "./types";

//  id: string;
//     name: string;
//     price: number;
//     imageUrl: string;
//     description: string;
//     inStock: boolean;
//     category: TCategories;
//     rating: number;
//     count: number;
//     createdAt: string;
//     updatedAt: string;

const PopularProductsItem = ({ item }: IPopularProductsItem) => {
    const { inStock, imageUrl, price, name } = item;
    return (
        <li className="bg-[var(--card)] min-w-[clamp(8rem,20vw,15rem)]">
            <a
                href=""
                className=" flex flex-col p-[clamp(0.2rem,0.6vw,1.2rem)] items-center gap-[clamp(0.4rem,0.6vw,0.5rem)]"
            >
                <div className="w-[clamp(3.2rem,13vw,18.75rem)]">
                    <img
                        className="w-full"
                        src={imageUrl}
                        alt="картинка товара"
                    />
                </div>
                <div>
                    <span className="text-[clamp(0.2rem,1vw,1.15rem)] truncate">
                        {name}
                    </span>
                    <div className="flex flex-row justify-between">
                        <span className="font-bold text-[clamp(0.3rem,1.2vw,1.5rem)]">
                            {price} ₽
                        </span>
                        <span
                            className={clsx(
                                "text-[clamp(0.2rem,1vw,1.25rem)]",
                                inStock ? "text-green-500" : "text-red-500",
                            )}
                        >
                            {inStock ? "В наличии" : "Нет в наличии"}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
};

export default PopularProductsItem;
