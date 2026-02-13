type TCategories = "laptops" | "headphones" | "smartphones" | "tvs" | "watches";
type TSeries = "premium" | "basic" | "pro" | "ultra";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;

    inStock: boolean; // в наличии или нет
    category: TCategories;
    rating: number;
    count: number; // количество товаров в наличии
    createdAt: string; // дата создания товара
    updatedAt: string; // дата последнего обновления товара

    additionalInfo?: {
        gallery: string[]; // дополнительные изображения товара
        colors: string[]; // доступные цвета (hex или названия)
        series: TSeries; // серия товара
        reviewsCount: number; // количество оценок
    };
}

export interface ISalesProducts extends IProduct {
    oldPrice: number; // цена до скидки
    discountPrice: number; // цена со скидкой (дублирует price, но можно оставить)
    discountPercent: number; // скидка в процентах
}
