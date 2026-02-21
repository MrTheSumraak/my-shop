import LayoutHomePage from "@/widgets/homePageSection/layout-home-page/layout";
import BasketPage from "@/widgets/basketPage/basketPage";
import ProductPageDetails from "./product/[id]/page";

async function HomePage() {
    return (
        <>
            <LayoutHomePage />
            {/* <BasketPage /> */}
            {/* <ProductPageDetails /> */}
        </>
    );
}

export default HomePage;