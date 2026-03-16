import { IProduct, ISalesProducts } from "@/entities/product/api/types";

interface IAIFilterBar {
    items: IProduct[] | ISalesProducts[];
}

const AIFilterBar = ({ items }: IAIFilterBar) => {
    const itemsLength = items.length;
    return (
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-dark pb-6 mb-8">
            <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">
                    <span className="text-slate-500 font-normal">
                        results found: {itemsLength}
                    </span>
                    {/* <span className="text-primary">Gaming Laptop</span> */}
                </h2>
            </div>
        </div>
    );
};

export default AIFilterBar;
