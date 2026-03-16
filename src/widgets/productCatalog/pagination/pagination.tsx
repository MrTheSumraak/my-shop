"use client";

import ChevronRight from "@/shared/ui/iconComponents/ChevronRight";
import React from "react";

interface IPagination {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onChange }: IPagination) => {
    const isActivePage = (index: number) => index + 1 === page;
    return (
        <div className="mt-12 flex items-center justify-center gap-2">
            <button
                onClick={() => onChange(page - 1)}
                className="size-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary transition-colors ${isActiePage} ? border-primary transition-colors : '"
            >
                <span className="material-symbols-outlined text-sm">
                    <ChevronRight style={{ transform: "rotate(180deg)" }} />
                </span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i + 1)}
                    className={`size-10 flex items-center justify-center rounded-lg border transition-colors
                    ${isActivePage(i) ? "border-primary text-primary" : "border-white/10 hover:border-primary"}`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                onClick={() => {
                    if (page < totalPages) {
                        onChange(page + 1);
                    }
                }}
                className="size-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-primary transition-colors "
            >
                <span className="material-symbols-outlined text-sm">
                    <ChevronRight />
                </span>
            </button>
        </div>
    );
};

export default React.memo(Pagination);
