import { FiltersHandlersProvider } from "@/features/filters/model/filtersHandlersContext";
import Filter from "@/features/filters/ui/filter";
import Loader from "@/shared/ui/loader/loader";
import CatalogList from "./catalogList/catalogList";
import ToolBar from "./toolBar/toolBar";
import { IProduct, ISalesProducts } from "@/entities/product/api/types";
import { TFilterConfig } from "@/features/filters/configFilter";
import Pagination from "./pagination/pagination";
import Breadcrumbs from "../navigation/navigation";

interface ICatalogPageUI {
    isLoading: boolean;
    filterItems: IProduct[] | ISalesProducts[] | [];
    filterConfig: TFilterConfig[];
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    category?: string;
    total: number;
}

const CatalogPageUI = ({
    isLoading,
    filterItems,
    filterConfig,
    page,
    totalPages,
    handlePageChange,
    category,
    total,
}: ICatalogPageUI) => {
    return (
        <section className="max-w-[1440px] mx-auto flex gap-8 items-start">
            <FiltersHandlersProvider>
                <Filter filters={filterConfig} />
            </FiltersHandlersProvider>

            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        {category && <Breadcrumbs category={category} />}

                        <h2 className="text-2xl font-bold tracking-tight">
                            {category &&
                                category[0].toUpperCase() + category.slice(1)}
                            <span className="text-sm font-normal text-slate-500 ml-2">
                                ({total} items)
                            </span>
                        </h2>
                    </div>

                    <ToolBar />
                </div>

                {isLoading ? (
                    <Loader />
                ) : (
                    <CatalogList products={filterItems} />
                )}

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={handlePageChange}
                />
            </div>
        </section>
    );
};

export default CatalogPageUI;
