import BoltIcon from "@/shared/ui/iconComponents/Bolt";
import LikeIcon from "@/shared/ui/iconComponents/LikeIcon";
import Link from "next/link";
import Search from "./HeaderSearch";
import BasketIconUI from "../basket-icon-ui/basketIconUI";

const LINK_CONTENT = [
    {
        title: "Laptops",
        href: "#",
    },
    {
        title: "Smartphones",
        href: "#",
    },
    {
        title: "Components",
        href: "#",
    },
    {
        title: "Audio",
        href: "#",
    },
    {
        title: "Wearables",
        href: "#",
    },
];

const HeaderUI = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-border-dark px-4 lg:px-20 py-3">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/"
                            className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark"
                        >
                            <span className="material-symbols-outlined font-bold">
                                <BoltIcon />
                            </span>
                        </Link>
                        <h2 className="text-xl font-bold tracking-tight">
                            TECHSTORE
                        </h2>
                    </div>

                    <nav className="hidden xl:flex items-center gap-8">
                        {LINK_CONTENT.map(({ title, href }) => (
                            <Link
                                key={title}
                                href={href}
                                className="text-sm font-medium hover:text-primary transition-colors"
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex flex-1 justify-end items-center gap-6">
                    {/* <Search /> */}

                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-card-dark rounded-lg transition-colors">
                            <span className="material-symbols-outlined">
                                <LikeIcon />
                            </span>
                        </button>

                        <BasketIconUI />

                        <div className="size-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Minimalist user profile avatar icon"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjVc4q_K5FLZdtQTbL8J_YRd7dbNIxWErDTDzMuQwMpWIYLSJge12I0q3MzQraR9HfjgM4QoxzK-MJ46lDsQNppgZY6OCxbZng_w9fCp_9vv3occnvt-1oFQmqWHCoiKyICW0RFZf3SK4MsCeKFJYgdziVnrqdXyvUTWWoIgY7GwdCDbm2Zm-CdEbd2CN9I_tZzPAW0b7j3pvPheOoYe1kPHe9T7xcWhK1DmUuI8TkNjR1u4SrXbhrljenJIUzsu37Vi0G1Yg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderUI;
