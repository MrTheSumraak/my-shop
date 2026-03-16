"use client";

import CheckBoxLayout from "@/widgets/CheckBoxLayout/CheckBoxLayout";
import RangeInput from "@/widgets/rangeInput/rangeInput";
import CheckBoxTechnicalSpec from "@/widgets/filters/checkBoxTechnicalSpec/checkBoxTechnicalSpec";
import React from "react";
import { TFilterConfig } from "../configFilter";
import style from './sss.module.css'

interface IFilter {
    filters: TFilterConfig[];
}

const Filter = ({ filters }: IFilter) => {
    if (!filters || filters.length === 0) {
        return (
            <aside className="w-64 shrink-0 hidden lg:block sticky top-28 h-fit">
                <div className="p-3 rounded bg-red-500/10 text-red-400 text-sm">
                    Под выбранную категорию фильтры отсутствуют!
                </div>
            </aside>
        );
    }

    return (
        <div className="min-w-37 w-96 shrink-0 sticky top-28 overflow-y-auto max-h-[calc(100vh-7rem)]">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                <button className="text-xs text-primary hover:underline">
                    Reset All
                </button>
            </div>

            <div className={style.filter}>
                {filters.map((filter) => {
                    switch (filter.type) {
                        case "range":
                            return (
                                <RangeInput
                                    key={filter.name}
                                    label={filter.label}
                                    min={filter.min}
                                    max={filter.max}
                                />
                            );

                        case "checkbox-group":
                            return (
                                <CheckBoxTechnicalSpec
                                    key={filter.name}
                                    name={filter.name}
                                    label={filter.label}
                                    value={filter.options}
                                />
                            );

                        case "checkbox":
                            return (
                                <CheckBoxLayout
                                    name={filter.name}
                                    key={filter.name}
                                    label={filter.label}
                                />
                            );
                    }
                })}
            </div>
        </div>
    );
};

export default React.memo(Filter);
