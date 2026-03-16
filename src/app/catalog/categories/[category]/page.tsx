import ProductCatalogCategory from "@/widgets/productCatalog/productCatalogCategory";

const CatalogPage = async ({ params }: { params: { category: string } }) => {
    const { category } = await params;
    return <ProductCatalogCategory category={category} />;
};

export default CatalogPage;
