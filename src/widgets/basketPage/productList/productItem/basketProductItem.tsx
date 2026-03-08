"use client";

import { IProduct } from "@/entities/product/api/types";
import AddIcon from "@/shared/ui/iconComponents/AddIcon";
import DeleteIcon from "@/shared/ui/iconComponents/DeleteIcon";
import RemoveIcon from "@/shared/ui/iconComponents/RemoeIcon";
import { useDispatch } from "@/store/rootReduser";
import {
    decrementProduct,
    deleteProductFromBasket,
    incrementProduct,
} from "@/store/slices/basketSlices";

interface IBasketProductItem {
    product: IProduct;
}

const BasketProductItem = ({ product }: IBasketProductItem) => {
    const {
        id,
        name,
        imageUrl,
        price,
        inStock,
        countInBasket,
        technicalSpecifications,
    } = product;
    const dispatch = useDispatch();
    const totalPriceProduct = price * (countInBasket || 0);

    const handleDeleteProduct = () => {
        dispatch(deleteProductFromBasket(id));
    };

    const handleAddProduct = () => {
        dispatch(incrementProduct(id));
    };

    const handleRemoveProduct = () => {
        dispatch(decrementProduct(id));
    };

    return (
        <li className="group flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 bg-white dark:bg-surface-dark/50 transition-all">
            <div className="w-32 h-32 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    data-alt="High-end black wireless gaming headphones"
                    style={{
                        backgroundImage: `url("${imageUrl}")`,
                    }}
                ></div>
            </div>

            <div className="flex-grow flex flex-col justify-between h-full py-1 text-center sm:text-left">
                <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                        {/* Matte Black | 7.1 Surround | 40h Battery */}
                        {Object.values(technicalSpecifications || {})
                            .slice(0, 3)
                            .map((value, index) => (
                                <span key={index}>{value}</span>
                            ))}
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                        <button
                            onClick={handleRemoveProduct}
                            className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm font-bold">
                                <RemoveIcon />
                            </span>
                        </button>
                        <span className="w-10 text-center font-bold">
                            {countInBasket}
                        </span>
                        <button
                            onClick={handleAddProduct}
                            className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm font-bold">
                                <AddIcon />
                            </span>
                        </button>
                    </div>

                    <button
                        onClick={handleDeleteProduct}
                        className="flex items-center gap-1 text-slate-400 hover:text-red-400 transition-colors text-xs font-medium uppercase tracking-wider"
                    >
                        <span className="material-symbols-outlined text-base">
                            <DeleteIcon />
                        </span>
                        Remove
                    </button>
                </div>
            </div>

            <div className="text-right shrink-0">
                <p className="text-xl font-bold">${totalPriceProduct}</p>
                <p className="text-xs text-primary font-medium mt-1">
                    {inStock ? "In Stock" : "Out of Stock"}
                </p>
            </div>
        </li>
    );
};

export default BasketProductItem;
