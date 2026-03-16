"use client";

import { useFiltersActions } from "@/features/filters/model/filtersHandlersContext";
import CheckBoxGroups from "../checkBoxGroups/checkBoxGroups";

interface ICheckBoxTechnicalSpec {
    value: string[];
    label: string;
    name: string;
}

const CheckBoxTechnicalSpec = ({ value, label, name }: ICheckBoxTechnicalSpec) => {
    const { handleSetTechnicalSpecifications } = useFiltersActions();
    return (
        <CheckBoxGroups
            value={value}
            name={name}
            label={label}
            onChange={handleSetTechnicalSpecifications}
        />
    );
};

export default CheckBoxTechnicalSpec;
