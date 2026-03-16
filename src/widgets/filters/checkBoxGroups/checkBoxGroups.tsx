"use client";

import CheckBoxList from "@/shared/ui/checkBoxList/checkBoxList";

interface ICheckBoxGroups {
    label: string;
    value: string[];
    onChange?: (value: string) => void;
    name: string;
}
const CheckBoxGroups = ({ label, value, onChange, name }: ICheckBoxGroups) => {
    return (
        <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {label}
            </p>
            <div className="space-y-2">
                <CheckBoxList name={name} onChange={onChange} value={value} />
            </div>
        </div>
    );
};
export default CheckBoxGroups;
