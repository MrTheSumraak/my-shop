"use client";

import { Button } from "@nextui-org/react";
import { IButtonUI } from "./types";

const sizeClasses = {
    sm: "px-3 py-1 text-sm w-[clamp(6rem,20vw,8rem)]", // 96–128px
    md: "px-4 py-2 text-base w-[clamp(8rem,25vw,12rem)]", // 128–192px
    lg: "px-6 py-3 text-lg w-[clamp(10rem,30vw,16rem)]", // 160–256px
    xl: "px-8 py-4 text-xl w-[clamp(12rem,40vw,62.5rem)]", // до 1000px
};

const ButtonUI = ({
    text,
    onClick,
    className,
    size,
    width,
    type,
}: IButtonUI) => {
    const click = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.stopPropagation();
        onClick?.();
    };
    return (
        <Button
            className={` 
                bg-[var(--primary)] 
                text-white px-4 py-2 
                w-auto
                rounded-md 
                hover:opacity-80 
                ${sizeClasses[size]}
                transition ${className ?? ""} `}
            color="primary"
            onClick={click}
        >
            {text}
        </Button>
    );
};

export default ButtonUI;
