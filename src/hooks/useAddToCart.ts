import { ISalesProducts } from "@/entities/product/api/types";
import { AppDispatch } from "@/store/rootReduser";
import {
    addProductToBasket,
    incrementProduct,
} from "@/store/slices/basketSlices";
import { useState } from "react";

interface IAddToCart {
    dispatch: AppDispatch;
    isProduct: boolean;
    saleProduct: ISalesProducts;
    id: string;
}

const useAddToCart = ({ dispatch, isProduct, saleProduct, id }: IAddToCart) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isProduct) {
            alert("Товар уже в корзине");
            return;
        }

        console.log("IDDD :", id);

        dispatch(addProductToBasket(saleProduct));
        dispatch(incrementProduct(id));
        setIsModalOpen(true);
    };

    return { handleAddToCart, isModalOpen, setIsModalOpen };
};

export default useAddToCart;
