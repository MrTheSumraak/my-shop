import { TRequest } from "@/shared/api/useProductsPagination";
import CollectionsProduct from "@/widgets/productCatalog/collectionsProduct/collectionsProduct";

const CatalogPage = async ({ params }: { params: { collection: TRequest } }) => {
    const { collection } = await params;
    return <CollectionsProduct collection={collection} />;
};

export default CatalogPage;