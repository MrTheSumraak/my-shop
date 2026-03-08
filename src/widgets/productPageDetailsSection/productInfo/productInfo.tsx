"use client";

import ImageGallery from "../imageGallary/imageGallary";
import ProductDetails from "../productDetails/productDetails";
import Breadcrumbs from "@/widgets/navigation/navigation";
import { ISalesProducts } from "@/entities/product/api/types";

interface ProductInfoProps {
    selectedProduct: ISalesProducts;
}
const ProductInfo = ({ selectedProduct }: ProductInfoProps) => {
    const { additionalInfo } = selectedProduct || {};
    return (
        <>
            <Breadcrumbs category={selectedProduct?.category || ""} />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                <ImageGallery images={additionalInfo?.gallery || []} />
                <ProductDetails product={selectedProduct} />
            </div>
        </>
    );
};

export default ProductInfo;
