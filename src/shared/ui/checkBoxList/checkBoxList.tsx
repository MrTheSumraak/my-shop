"use client";

import { useFiltersActions } from "@/features/filters/model/filtersHandlersContext";
import CheckBoxUI from "../checkBox/checkBox";
interface ICheckBoxList {
    value: string[];
    onChange?: (value: string) => void;
    name: string;
}
const CheckBoxList = ({ value, onChange, name }: ICheckBoxList) => {
    // const { handleSetTechnicalSpecifications } = useFiltersActions();
    return value.map((item) => (
        <CheckBoxUI name={name} onChange={onChange} key={item} label={item} />
    ));
};

export default CheckBoxList;
