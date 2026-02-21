"use client";

import useLoaderProductId from "@/lib/useLoaderProductId";
import ImageGallery from "../imageGallary/imageGallary";
import ProductDetails from "../productDetails/productDetails";

interface ProductInfoProps {
    id?: string;
}

const ProductInfo = ({ id }: ProductInfoProps) => {
    const { selectedProduct } = useLoaderProductId({ id: id || "" });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <ImageGallery
                images={selectedProduct?.additionalInfo?.gallery || []}
            />
            <ProductDetails product={selectedProduct} />
        </div>
    );
};

export default ProductInfo;
