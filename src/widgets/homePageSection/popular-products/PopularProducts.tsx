import { IPopularProducts } from "./types";
import PopularProductsClient from "./PopularProducts.client";

const PopularProducts = ({ products }: IPopularProducts) => {
    return <PopularProductsClient products={products} />;
};

export default PopularProducts;
