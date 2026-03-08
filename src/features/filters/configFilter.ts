export type TFilterConfig =
    | {
          type: "range";
          name: "price";
          label: string;
          min: number;
          max: number;
      }
    | {
          type: "checkbox-group";
          name: string;
          label: string;
          options: string[];
      }
    | {
          type: "checkbox";
          name: string;
          label: string;
      };
// функция-хелпер удаляет дубликаты, undefined, пустые строки, null за счет Set и filter(Boolean)
const getUnique = (arr: (string | undefined)[]) =>
    [...new Set(arr.filter(Boolean))] as string[];

// Функция-хелпер для построения конфигурации фильтров путем анализа товаров
export const buildFiltersByCategory = (category: string, items: any[]) => {
    if (!items.length) return [];

    const prices = items.map((i) => i.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const filters: TFilterConfig[] = [
        {
            type: "range",
            name: "price",
            label: "Price",
            min: minPrice,
            max: maxPrice,
        },
    ];

    if (items[0].technicalSpecifications) {
        // Берём первый товар как эталон структуры
        const firstSpecstechnical = items[0].technicalSpecifications;
        for (const [specKey] of Object.entries(firstSpecstechnical)) {
            const lowerKey = specKey.toLowerCase();

            // Собираем все значения по этому ключу
            const options = getUnique(
                items.map(
                    (i) =>
                        i.technicalSpecifications?.[specKey] as
                            | string
                            | undefined,
                ),
            );

            // Если значений нет — пропускаем
            if (!options.length) continue;

            filters.push({
                type: "checkbox-group",
                name: lowerKey,
                label: specKey,
                options,
            });
        }
    }

    // Проходим по всем ключам technicalSpecifications

    const brandOptions = getUnique(items.map((i) => i.brand));

    if (brandOptions.length) {
        filters.push({
            type: "checkbox-group",
            name: "brand",
            label: "Brand",
            options: brandOptions,
        });
    }

    const inStockOptions = getUnique(items.map((i) => i.inStock));

    if (inStockOptions.length) {
        filters.push({
            type: "checkbox",
            name: "inStock",
            label: "In Stock",
        });
    }

    const categiriesOptions = getUnique(items.map((i) => i.category));

    if (categiriesOptions.length) {
        filters.push({
            type: "checkbox-group",
            name: "category",
            label: "Category",
            options: categiriesOptions,
        });
    }

    if (items[0].additionalInfo && items[0].additionalInfo.colors) {
        const colorsOptions = getUnique(
            items.flatMap((i) => Object.keys(i.additionalInfo?.colors)),
        );

        if (colorsOptions.length) {
            filters.push({
                type: "checkbox-group",
                name: "colors",
                label: "Color",
                options: colorsOptions,
            });
        }
    }

    return filters;
};
