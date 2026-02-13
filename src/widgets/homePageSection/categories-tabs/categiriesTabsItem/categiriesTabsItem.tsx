import NavLink from "@/shared/ui/navLink/navLink";
import { ICategoriesTabsItem } from "./types";

const CategoriesTabsItem = ({
    icon,
    title,
    active = false,
    href = "#",
}: ICategoriesTabsItem) => {
    return (
        <NavLink
            className={`
                flex flex-col items-center justify-center gap-2 pb-4 px-2 border-b-2 transition-colors
                ${
                    active
                        ? "border-primary text-primary"
                        : "border-transparent text-gray-500 hover:text-primary"
                }
            `}
            href={href}
        >
            <span>{icon}</span>
            <p className="text-sm font-bold uppercase tracking-wider">
                {title}
            </p>
        </NavLink>
    );
};

export default CategoriesTabsItem;
