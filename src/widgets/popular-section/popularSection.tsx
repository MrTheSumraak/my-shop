import NavLink from "@/shared/ui/navLink/navLink";
import { IPopularSection } from "./types";
import PopularSectionCard from "./popularSectionCard/popularSectionCars";

const PopularSection = ({ popularProducts }: IPopularSection) => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-12 bg-gray-100 dark:bg-card-dark/30 rounded-3xl mb-16">
            <h2 className="text-2xl font-bold mb-8 px-4">Popular Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                {popularProducts.slice(0, 4).map((product) => (
                    <PopularSectionCard key={product.id} item={product} />
                ))}
            </div>
        </div>
    );
};

export default PopularSection;
