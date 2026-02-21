import { use } from "react";
import ProductPageClient from "@/widgets/productPageDetailsSection/productPageDetailsClient/productPageDetailsClient";

interface IProductPageProps {
    params: Promise<{ id: string }>;
}

export default function ProductPageDetails({ params }: IProductPageProps) {
    const { id } = use(params);
    return <ProductPageClient id={id} />;
}
