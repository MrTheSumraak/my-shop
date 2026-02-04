"use client";

import CategorisItem from "@/shared/ui/categorisItem/categorisItem";
import { LapTopIcon } from "@/shared/ui/iconComponents/LapTopIcon";

export const CategoriesWidget = () => {
    return (
        <div className="w-full flex flex-col gap-4 my-8">
            <h2 className="text-[clamp(0.8rem,2vw,2.25rem)] font-bold">
                Категории
            </h2>
            <ul className="flex flex-row justify-between gap-4 ">
                <CategorisItem
                    img={
                        <LapTopIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    }
                />
                <CategorisItem
                    img={
                        <LapTopIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    }
                />
                <CategorisItem
                    img={
                        <LapTopIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    }
                />
                <CategorisItem
                    img={
                        <LapTopIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    }
                />
                <CategorisItem
                    img={
                        <LapTopIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    }
                />
            </ul>
        </div>
    );
};
