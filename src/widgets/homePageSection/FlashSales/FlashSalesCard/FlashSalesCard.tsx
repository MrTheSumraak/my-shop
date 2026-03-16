"use client";

import { ISalesProducts } from "@/entities/product/api/types";
import useAddToCart from "@/hooks/useAddToCart";
import ModalWindowUI from "@/shared/ui/modalWindowUI/modalWindowUI";
import { useDispatch, useSelector } from "@/store/rootReduser";
import { selectIsProductInBasket } from "@/store/slices/basketSlices";
import Link from "next/link";

interface FlashSalesCardProps {
    saleProduct: ISalesProducts;
}

const FlashSalesCard = ({ saleProduct }: FlashSalesCardProps) => {
    const {
        oldPrice,
        discountPrice,
        discountPercent,
        imageUrl,
        name,
        id,
        count,
    } = saleProduct;
    const dispatch = useDispatch();
    const isProduct = useSelector(selectIsProductInBasket(id));
    const { handleAddToCart, isModalOpen, setIsModalOpen } = useAddToCart({
        dispatch,
        isProduct,
        saleProduct,
        id,
    });

    if (isModalOpen) {
        return <ModalWindowUI text="The product has been successfully added to your cart." title="Product Added" onClose={() => setIsModalOpen(false)} />;
    }

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
                {count} Items Left
            </p>

            {isProduct ? (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                    className="w-full py-2 bg-primary text-background-dark font-bold rounded-lg transition-all text-sm"
                >
                    The product has been added to the cart!
                </button>
            ) : (
                <button
                    onClick={handleAddToCart}
                    className="w-full py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background-dark font-bold rounded-lg transition-all text-sm"
                >
                    Add to Cart
                </button>
            )}
        </Link>
    );
};

export default FlashSalesCard;
