import { useProductsPagination } from "@/shared/api/useProductsPagination";

const useGetProductsPagination = (page: number, category?: string) => {
    const { data, isLoading, error } = useProductsPagination(
        page,
        "category",
        category,
    );

    const items = data?.items ?? [];

    const totalPages = data?.totalPages ?? 1;
    const total = data?.total ?? 0;

    return { items, totalPages, total, error, isLoading };
};

export default useGetProductsPagination;
