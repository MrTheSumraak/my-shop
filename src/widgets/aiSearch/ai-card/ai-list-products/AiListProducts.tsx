import { IProduct } from "@/entities/product/api/types";
import AICardItem from "../AI-card-item/AICardItem";
import Loader from "@/shared/ui/loader/loader";

interface IAiListProducts {
    items: IProduct[];
    isLoading: boolean;
}

const AiListProducts = ({ items, isLoading }: IAiListProducts) => {
    return !isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
                <AICardItem key={item.id} item={item} />
            ))}
        </div>
    ) : (
        <Loader />
    );
};

export default AiListProducts;
