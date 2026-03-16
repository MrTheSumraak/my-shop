"use client";

import { QueryClient, useQuery } from "@tanstack/react-query";

const ALL_PRODUCTS = process.env.NEXT_PUBLIC_ALL_PRODUCTS!;
const CATEGORIES_URL = process.env.NEXT_PUBLIC_API_CATEGORIES!;
const FLASH_SALES_URL = process.env.NEXT_PUBLIC_API_FLASH_SALES!;
const POPULAR_URL = process.env.NEXT_PUBLIC_API_POPULAR!;
export type TRequest = "category" | "flashSales" | "popular" | "all";

const handle = (
    type: TRequest,
    page: number,
    category?: string,
    limit?: number,
): string => {
    switch (type) {
        case "category":
            return `${CATEGORIES_URL}?page=${page}&limit=${limit || 3}${
                category ? `&category=${category}` : ""
            }`;
        case "flashSales":
            return `${FLASH_SALES_URL}?page=${page}&limit=${limit || 3}`;
        case "popular":
            return `${POPULAR_URL}?page=${page}&limit=${limit || 3}`;
        case "all":
            return `${ALL_PRODUCTS}?page=${page}&limit=${limit || 3}`;
        default:
            throw new Error(`Unknown request type: ${type}`);
    }
};

export const useProductsPagination = (
    page: number,
    type: TRequest,
    category?: string,
    limit?: number,
) => {
    return useQuery({
        // Ключ запроса — если меняется page или category → делается новый запрос
        queryKey: ["products", type, page, category, limit],
        // Функция, которая делает запрос
        queryFn: async () => {
            
            const url = handle(type, page, category, limit);
            console.log("URL :", url);

            const res = await fetch(url);

            if (!res.ok) throw new Error("Failed to fetch products");

            const data = await res.json();

            return {
                ...data,
                totalPages: Math.ceil(data.total / data.limit),
            };
        },
        refetchOnWindowFocus: false,
        // делает запрос при переключении вкладок браузера

        refetchOnReconnect: true,
        // делает запрос при восстановлении интернета

        refetchOnMount: false,
        // делает запрос при каждом маунте компонента

        refetchInterval: false,
        // делает периодические запросы (по умолчанию выключено, но ставим явно)

        refetchIntervalInBackground: false,
        // делает запросы в фоне

        // -------------------------------
        // Настройки свежести данных
        // -------------------------------

        staleTime: 1000 * 60 * 5,
        //  Данные считаются "свежими" 5 минут
        // Пока данные свежие — React Query НЕ делает refetch

        gcTime: 1000 * 60 * 30,
        //  Держать данные в кэше 30 минут
        // Если пользователь вернётся на страницу — данные возьмутся из кэша

        // -------------------------------
        //  Поведение при ошибках
        // -------------------------------

        retry: 0,
        // 🔁 Попробовать повторить запрос 1 раз (можно поставить 0)

        retryDelay: 10000,
        //  Задержка между повторными попытками

        // -------------------------------
        //  Поведение загрузки
        // -------------------------------

        // keepPreviousData: true,
        //  НЕ сбрасывать данные при смене page
        // Это делает пагинацию плавной

        // -------------------------------
        // 🔥 Опционально: включить/выключить запрос
        // -------------------------------

        enabled: Boolean(category || type !== "category"),
        //  Запускать запрос только если удолетворяет условие в скобках
    });
};
