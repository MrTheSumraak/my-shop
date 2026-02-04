import { CategoriesWidget } from "@/widgets/categories";
import HeaderUI from "@/widgets/header/HeaderActions";
import PopularProducts from "@/widgets/popular-products/PopularProducts";

async function HomePage() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    const products = await res.json();
    return (
        <>
            <HeaderUI />
            <CategoriesWidget />
            <PopularProducts products={products} />
        </>
    );
}

export default HomePage;
