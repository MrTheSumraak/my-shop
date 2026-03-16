import { IProduct } from "@/entities/product/api/types";
import CatalogListItem from "./catalog-list-item/catalogListItem";
import React from "react";

interface ICatalogList {
    products: IProduct[] | [];
}

const CatalogList = React.memo(function CatalogList({
    products,
}: ICatalogList) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.length > 0 ?
                products.map((product) => (
                    <CatalogListItem key={product.id} product={product} />
                )) : (
                    <p className="text-xl text-blue-500">
                        Упс, кажется товары еще не доехали...
                    </p>
                )}
        </div>
    );
});

export default CatalogList;
