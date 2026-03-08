"use client";

import useProductById from "@/shared/api/useProductById";
import Loader from "@/shared/ui/loader/loader";
import ProductInfo from "@/widgets/productPageDetailsSection/productInfo/productInfo";
import TechnicalSpecifications from "@/widgets/productPageDetailsSection/technicalSpecifications/TechnicalSpecifications";
import UserReviews from "@/widgets/productPageDetailsSection/userReviews/UserReviews";

interface IProductPageProps {
    id: string;
}

const SALES_URL = "/api/productsAll";

export default function ProductPageClient({ id }: IProductPageProps) {
    const {
        product: selectedProduct,
        isLoading,
        error,
    } = useProductById(id!, SALES_URL);

    if (error) return <div>Error: {error.message}</div>;
    if (!selectedProduct) return <div>Product not found</div>;

    return isLoading ? (
        <Loader />
    ) : (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-20 py-8">
            <ProductInfo selectedProduct={selectedProduct} />
            <TechnicalSpecifications selectedProduct={selectedProduct} />
            <UserReviews selectedProduct={selectedProduct} />
        </section>
    );
}
