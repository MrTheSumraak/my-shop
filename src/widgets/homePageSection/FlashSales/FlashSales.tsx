import Stopwatch from "@/shared/ui/iconComponents/Stopwatch";
import FlashSalesCard from "./FlashSalesCard/FlashSalesCard";
import { ISaleProducts } from "./FlashSalesCard/types";

const FlashSales = ({ saeleProducts }: ISaleProducts) => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 lg:px-20 mb-16">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Flash Sales</h2>

                    <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-md border border-secondary/20">
                        <span className="material-symbols-outlined text-sm">
                            <Stopwatch />
                        </span>
                        <span className="text-sm font-bold">02:45:12</span>
                    </div>
                </div>

                <a
                    className="text-primary text-sm font-bold hover:underline"
                    href="#"
                >
                    View All Deals
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {saeleProducts.slice(0, 4).map((product) => (
                    <FlashSalesCard key={product.id} saleProduct={product} />
                ))}
            </div>
        </section>
    );
};

export default FlashSales;
