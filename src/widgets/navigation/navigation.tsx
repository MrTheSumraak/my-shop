"use client";

import Link from "next/link";
import ChevronRight from "@/shared/ui/iconComponents/ChevronRight";

interface BreadcrumbsProps {
    category: string;
    productName?: string;
}

export default function Breadcrumbs({
    category,
    productName,
}: BreadcrumbsProps) {
    const format = (str: string) =>
        str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return (
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
            <Link className="hover:text-primary transition-colors" href="/">
                Home
            </Link>

            <div className="flex items-center gap-2">
                <ChevronRight />
                <Link
                    className="hover:text-primary transition-colors"
                    href={`/catalog/${category}`}
                >
                    {format(category)}
                </Link>
            </div>

            {productName && (
                <div className="flex items-center gap-2">
                    <ChevronRight />
                    <span className="text-slate-900 dark:text-white font-medium">
                        {productName}
                    </span>
                </div>
            )}
        </nav>
    );
}
