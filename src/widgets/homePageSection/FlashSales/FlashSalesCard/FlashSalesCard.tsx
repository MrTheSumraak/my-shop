import { ISalesProducts } from "@/entities/product/api/types";
import { useDispatch } from "@/store/rootReduser";
import { addProductToBasket } from "@/store/slices/basketSlices";
import Link from "next/link";

interface FlashSalesCardProps {
    saleProduct: ISalesProducts;
}

const FlashSalesCard = ({ saleProduct }: FlashSalesCardProps) => {
    const { oldPrice, discountPrice, discountPercent, imageUrl, name } =
        saleProduct;
    const dispatch = useDispatch();
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addProductToBasket(saleProduct));
    };
    return (
        <Link
            href={`/product/${saleProduct.id}`}
            className="block bg-white dark:bg-card-dark rounded-xl p-4 border border-gray-200 dark:border-border-dark group hover:border-primary/50 transition-all"
        >
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-black/40">
                <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                    {discountPercent}% OFF
                </span>

                <img
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    alt="картинка товара"
                    src={imageUrl}
                />
            </div>

            <h3 className="font-medium text-base mb-1 truncate">{name}</h3>

            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-primary font-bold">${discountPrice}</span>
                <span className="text-gray-500 text-sm line-through">
                    ${oldPrice}
                </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-black/50 h-1.5 rounded-full mb-2">
                <div className="bg-secondary h-full rounded-full w-3/4 glow-green"></div>
            </div>

            <p className="text-[10px] text-gray-500 font-bold uppercase mb-4">
                12 Items Left
            </p>

            <button
                onClick={handleAddToCart}
                className="w-full py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background-dark font-bold rounded-lg transition-all text-sm"
            >
                Add to Cart
            </button>
        </Link>
    );
};

export default FlashSalesCard;
