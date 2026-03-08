type TCategories = "laptops" | "headphones" | "smartphones" | "tvs" | "watches";
type TSeries = "premium" | "basic" | "pro" | "ultra";
type TtechnicalSpecifications = {
    [key: string]: string;
};

export interface IProduct {
    id: string;
    name: string;
    price: number;
    brand: string;
    imageUrl: string;
    description: string;

    inStock: boolean; // в наличии или нет
    category: TCategories;
    rating: number;
    count: number; // количество товаров в наличии
    countInBasket?: number; // количество товаров в корзине
    createdAt: string; // дата создания товара
    updatedAt: string; // дата последнего обновления товара
    reviews?: IUserReviews[]; // отзывы

    additionalInfo?: {
        gallery: string[]; // дополнительные изображения товара
        colors: { [key: string]: string }; // доступные цвета (hex или названия)
        series: TSeries; // серия товара
        reviewsCount: number; // количество оценок
    };
    technicalSpecifications: TtechnicalSpecifications;
}

export interface ISalesProducts extends IProduct {
    oldPrice?: number; // цена до скидки
    discountPrice?: number; // цена со скидкой (дублирует price, но можно оставить)
    discountPercent?: number; // скидка в процентах
}

export interface IUserReviews {
    id: string; // уникальный идентификатор отзыва
    title: string; // заголовок отзыва
    text: string; // текст отзыва
    name: string; // имя
    isverified: boolean; // проверенный покупатель или нет
    date: string; // дата публикации отзыва
}
