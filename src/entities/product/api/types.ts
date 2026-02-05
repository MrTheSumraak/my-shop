type TCategories = "laptops" | "headphones" | "smartphones" | "tvs" | "watches";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    inStock: boolean;
    category: TCategories;
    rating: number;
    count: number;
    createdAt: string;
    updatedAt: string;
}

export interface ISalesProducts extends IProduct {
    oldPrice: number; // цена до скидки
    discountPrice: number; // цена со скидкой (дублирует price, но можно оставить)
    discountPercent: number; // скидка в процентах
}
