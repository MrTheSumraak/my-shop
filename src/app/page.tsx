import UsegetProducts from "@/lib/useGetProducts";
import ProductPageDetails from "./product/[id]/page";
import LayoutHomePage from "@/widgets/homePageSection/layout-home-page/layout";

async function HomePage() {
    const products = await UsegetProducts("api/popularProducts");
    const saleProducts = await UsegetProducts("api/saleProducts");

    console.log(saleProducts);
    return (
        <>
            <LayoutHomePage saleProducts={saleProducts} products={products} />
            {/* <ProductPageDetails /> */}
        </>
    );
}

export default HomePage;
