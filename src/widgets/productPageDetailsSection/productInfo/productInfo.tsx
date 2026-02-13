import { IProduct } from "@/entities/product/api/types";
import ImageGallery from "../imageGallary/imageGallary";
import ProductDetails from "../productDetails/productDetails";

interface ProductInfoProps {
    product?: IProduct;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <ImageGallery images={product?.additionalInfo?.gallery || []} />
            <ProductDetails />
        </div>
    );
};

export default ProductInfo;
