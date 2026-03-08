"use client";

import { ISalesProducts } from "@/entities/product/api/types";
import AddToCard from "@/shared/ui/iconComponents/AddToCard";
import LikeIcon from "@/shared/ui/iconComponents/LikeIcon";
import TruckIcon from "@/shared/ui/iconComponents/TruckIcon";
import VerifiedUser from "@/shared/ui/iconComponents/VerifiedUser";
import Star from "@/shared/ui/star/star";
import { useDispatch, useSelector } from "@/store/rootReduser";
import {
    addProductToBasket,
    selectIsProductInBasket,
} from "@/store/slices/basketSlices";

interface IProductDetails {
    product: ISalesProducts;
}

const ProductDetails = ({ product }: IProductDetails) => {
    const { additionalInfo } = product || {};
    const { colors } = additionalInfo || {};
    const dispatch = useDispatch();
    const isProductInBasket = useSelector(selectIsProductInBasket(product.id));

    const handleAddToCard = () => {
        dispatch(addProductToBasket(product));
    };

    const colorsArray: string[] = (colors && Object.values(colors)) || [];
    return (
        <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">
                    Premium Series
                </span>
                <h1 className="text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                    {product?.name}
                </h1>
                <div className="flex items-center gap-4">
                    <div className="flex items-center text-primary">
                        {product?.rating &&
                            Array.from({ length: product?.rating || 0 }).map(
                                (_, index) => (
                                    <span
                                        key={index}
                                        className="material-symbols-outlined fill-1"
                                    >
                                        <Star
                                            width="clamp(0.78rem, 0.9vw, 1.2rem)"
                                            height="clamp(0.7rem, 0.89vw, 1.063rem)"
                                            className="text-primary"
                                        />
                                    </span>
                                ),
                            )}
                    </div>
                    <span className="text-[#8dbace] text-sm">
                        {product?.rating} (
                        {product?.additionalInfo?.reviewsCount} Reviews)
                    </span>
                </div>
            </div>

            <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold">
                    ${product?.discountPrice}
                </span>
                <span className="text-[#8dbace] text-xl line-through">
                    {product?.price}
                </span>
                <span className="bg-primary/20 text-primary px-2 py-1 rounded text-sm font-bold">
                    {product?.discountPrice}% OFF
                </span>
            </div>

            <p className="text-[#8dbace] text-lg leading-relaxed">
                {product?.description}
            </p>

            <div className="flex flex-col gap-4 py-4">
                {colorsArray.length > 0 && (
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-xs text-[#8dbace] font-bold uppercase mb-2 block">
                                Select Color
                            </label>
                            <div className="flex gap-2">
                                {colorsArray.map((color) => (
                                    <button
                                        key={color}
                                        className="size-8 rounded-full border-2 border-transparent hover:border-white/50"
                                        style={{
                                            backgroundColor: color,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-3 mt-4">
                {isProductInBasket ? (
                    <div className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
                        <span>In Cart</span>
                    </div>
                ) : (
                    <button
                        onClick={handleAddToCard}
                        className="w-full bg-primary hover:bg-primary/90 text-white h-14 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3"
                    >
                        <span className="material-symbols-outlined">
                            <AddToCard />
                        </span>
                        Add to Cart
                    </button>
                )}

                <button className="w-full glass-panel hover:bg-white/10 text-white h-12 rounded-xl font-bold transition-all flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined">
                        <LikeIcon />
                    </span>
                    Save to Wishlist
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#203e4b]">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                        <TruckIcon />
                    </span>
                    <div className="text-xs">
                        <p className="font-bold">Free Shipping</p>
                        <p className="text-[#8dbace]">On orders over $99</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                        <VerifiedUser />
                    </span>
                    <div className="text-xs">
                        <p className="font-bold">2-Year Warranty</p>
                        <p className="text-[#8dbace]">Full tech support</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
