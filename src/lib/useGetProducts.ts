const UsegetProducts = async (name: string) => {
    const resProducts = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${name}`,
    );
    const products = await resProducts.json();

    return products;
};

export default UsegetProducts;
