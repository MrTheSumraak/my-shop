const apiRequest = async (name: string) => {
    const request = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${name}`,
    );
    const items = await request.json();

    return items;
};

export default apiRequest;
