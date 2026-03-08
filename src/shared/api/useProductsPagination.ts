"use client";

import { useQuery } from "@tanstack/react-query";

const ALL_PRODUCTS_URL = process.env.NEXT_PUBLIC_API_ALL_PRODUCTS!;

export const useProductsPagination = (
    page: number,
    category?: string,
    limit?: number,
) => {
    return useQuery({
        // Ключ запроса — если меняется page или category → делается новый запрос
        queryKey: ["products", page, category],
        // Функция, которая делает запрос
        queryFn: async () => {
            const url = `${ALL_PRODUCTS_URL}?page=${page}&limit=${limit || 3}${
                category ? `&category=${category}` : ""
            }`;

            const res = await fetch(url);

            if (!res.ok) throw new Error("Failed to fetch products");

            const data = await res.json();

            return {
                ...data,
                totalPages: Math.ceil(data.total / data.limit),
            };
        },
        refetchOnWindowFocus: false,
        // делатет запрос при переключении вкладок браузера

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

        // cacheTime: 1000 * 60 * 30,
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

        enabled: Boolean(category),
        //  Запускать запрос только если есть категория
    });
};
