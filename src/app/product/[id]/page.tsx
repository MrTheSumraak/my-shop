import NavBar from "@/widgets/productPageDetailsSection/navBar.tsx/navBar";
import ProductInfo from "@/widgets/productPageDetailsSection/productInfo/productInfo";
import "@/widgets/productPageDetailsSection/styles/productDetailsCSS.css";
import Loading from "./loading";
import TechnicalSpecifications from "@/widgets/productPageDetailsSection/technicalSpecifications/TechnicalSpecifications";
import UserReviews from "@/widgets/productPageDetailsSection/userReviews/UserReviews";
import apiRequest from "@/lib/apiRequest";

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
            <TechnicalSpecifications />
            <UserReviews />
        </section>
    );
};

export default ProductPageDetails;
