import FlashSalesCard from "./FlashSalesCard/FlashSalesCard";
import { ISaleProducts } from "./FlashSalesCard/types";
import Loader from "@/shared/ui/loader/loader";
import Link from "next/link";
import Timer from "./timer/timer";

const FlashSales = ({ request, loading }: ISaleProducts) => {
    const products = request.items;
    return (
        <section className="max-w-[1440px] mx-auto px-4 lg:px-20 mb-16">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Flash Sales</h2>

                    <Timer salesEnd={request.salesEnd} />
                </div>

                <Link
                    className="text-primary text-sm font-bold hover:underline"
                    href={`/catalog/collections/flashSales`}
                >
                    View All Deals
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {loading ? (
                    <Loader />
                ) : (
                    products
                        .slice(0, 4)
                        .map((product) =>
                            loading ? (
                                <Loader key={product.id} />
                            ) : (
                                <FlashSalesCard
                                    key={product.id}
                                    saleProduct={product}
                                />
                            ),
                        )
                )}
            </div>
        </section>
    );
};

export default FlashSales;
