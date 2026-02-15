import apiRequest from "@/lib/apiRequest";
import ProductPageDetails from "./product/[id]/page";
import LayoutHomePage from "@/widgets/homePageSection/layout-home-page/layout";

async function HomePage() {
    // const products = await apiRequest("api/popularProducts");
    // const saleProducts = await apiRequest("api/saleProducts");

    // console.log(saleProducts);
    return (
        <>
            {/* <LayoutHomePage saleProducts={saleProducts} products={products} /> */}
            <ProductPageDetails />
        </>
    );
}

export default HomePage;
