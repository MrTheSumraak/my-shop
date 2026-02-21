import { ISalesProducts } from "@/entities/product/api/types";
import { useDispatch } from "@/store/rootReduser";
import { addProductToBasket } from "@/store/slices/basketSlices";

interface IUseAddToBasket {
    product: ISalesProducts;
    dispatch: typeof useDispatch;
}

const useAddToBasket = ({product}: IUseAddToBasket) => {
    const dispatch = useDispatch();

    dispatch(addProductToBasket(product));
};

export default useAddToBasket;