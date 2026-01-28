type TSize = "sm" | "md" | "lg" | "xl";
type TType = "submit" | "reset" | "button";

export interface IButtonUI {
    text: string;
    onClick?: () => void;
    className?: string;
    type?: TType;
    size: TSize;
    width?: string;
}
