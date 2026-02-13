import NavBar from "@/widgets/productPageDetailsSection/navBar.tsx/navBar";
import ProductInfo from "@/widgets/productPageDetailsSection/productInfo/productInfo";
import "@/widgets/productPageDetailsSection/styles/productDetailsCSS.css";
import { get } from "http";
import Loading from "./loading";

interface ProductPageProps {
    params?: {
        id: string;
    };
}

const ProductPageDetails = ({ params }: ProductPageProps) => {
    // const { id } = params;
    // const product = await getProductById(id);

    return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-20 py-8">
            {/* <Loading /> */}
            <NavBar />
            <ProductInfo />
        </section>
    );
};

export default ProductPageDetails;
