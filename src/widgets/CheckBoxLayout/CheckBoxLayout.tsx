"use client";

import CheckBoxUI from "@/shared/ui/checkBox/checkBox";

interface ICheckBoxLayout {
    label: string;
    name: string;
}

const CheckBoxLayout = ({ label, name }: ICheckBoxLayout) => {
    return (
        <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {label}
            </p>

            <CheckBoxUI name={name} label={label} />
        </div>
    );
};

export default CheckBoxLayout;
