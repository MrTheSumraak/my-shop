import NavLink from "@/shared/ui/navLink/navLink";
import { IPopularSectionCard } from "./types";

const PopularSectionCard = ({ item }: IPopularSectionCard) => {
    const { imageUrl, category, name, price } = item;
    return (
        <NavLink href="#" className="flex flex-col gap-3 group cursor-pointer">
            <img
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl bg-gray-200 dark:bg-background-dark border border-transparent group-hover:border-primary transition-all duration-300"
                data-alt="Modern desktop CPU with golden contacts"
                src={imageUrl}
            ></img>
            <div className="mt-2">
                <p className="text-sm text-gray-400 font-medium uppercase tracking-tighter">
                    {category}
                </p>
                <p className="text-lg font-bold">{name}</p>
                <p className="text-primary font-bold">${price}</p>
            </div>
        </NavLink>
    );
};

export default PopularSectionCard;
