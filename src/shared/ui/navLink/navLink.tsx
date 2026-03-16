"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string;
    children: React.ReactNode;
    activeClass?: string;
    className?: string;
}

export default function NavLink({
    href,
    children,
    activeClass = "text-primary border-primary",
    className = "",
}: Props) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`${className} ${isActive ? activeClass : ""}`}
        >
            {children}
        </Link>
    );
}
