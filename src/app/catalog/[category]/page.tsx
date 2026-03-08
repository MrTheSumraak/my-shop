import ProductCatalog from "@/widgets/productCatalog/productCatalog";

const CatalogPage = async ({ params }: { params: { category: string } }) => {
    const { category } = await params;
    return <ProductCatalog category={category} />;
};

export default CatalogPage;
