import BasketProductList from "./productList/basketProductList";
import Summary from "./summary/summary";
import Breadcrumbs from "../navigation/navigation";

const BasketPage = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            {/* <Breadcrumbs /> */}

            <div className="flex flex-col lg:flex-row gap-12">
                <BasketProductList />
                <Summary />
            </div>
        </div>
    );
};

export default BasketPage;
