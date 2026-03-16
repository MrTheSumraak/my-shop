"use client";

interface CheckBoxUIProps {
    label: string;
    onChange?: (value: string, name: string ) => void;
    name: string;
}

const CheckBoxUI = ({ label, onChange, name }: CheckBoxUIProps) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <input
            type="checkbox"
            value={label}
            name={name}
            onChange={() => onChange?.(label, name)}
            className="rounded border-white/10 bg-card-dark text-primary focus:ring-primary focus:ring-offset-background-catalog-dark"
        />
        <span className="text-sm group-hover:text-primary transition-colors">
            {label}
        </span>
    </label>
);

export default CheckBoxUI;
