import apiRequest from "@/lib/apiRequest";
import Loader from "@/shared/ui/loader/loader";
import LayoutHomePage from "@/widgets/homePageSection/layout-home-page/layout";

async function HomePage() {
    return (
        <>
            <LayoutHomePage />
            {/* <ProductPageDetails /> */}
        </>
    );
}

export default HomePage;
