import NavBar from "@/widgets/productPageDetailsSection/navBar.tsx/navBar";
import ProductInfo from "@/widgets/productPageDetailsSection/productInfo/productInfo";
import TechnicalSpecifications from "@/widgets/productPageDetailsSection/technicalSpecifications/TechnicalSpecifications";
import UserReviews from "@/widgets/productPageDetailsSection/userReviews/UserReviews";

interface IProductPageProps {
    id: string;
}

export default function ProductPageClient({ id }: IProductPageProps) {
    return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-20 py-8">
            <NavBar />
            <ProductInfo id={id}  />
            <TechnicalSpecifications id={id}/>
            <UserReviews id={id} />
        </section>
    );
}