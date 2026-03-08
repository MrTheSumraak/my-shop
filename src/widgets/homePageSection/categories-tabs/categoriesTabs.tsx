import ChipIcon from "@/shared/ui/iconComponents/ChipIcon";
import HeadphonesIcon from "@/shared/ui/iconComponents/HeadphonesIcon";
import { LapTopIcon } from "@/shared/ui/iconComponents/LapTopIcon";
import PhonesIcon from "@/shared/ui/iconComponents/PhonesIcon";
import WetchIcon from "@/shared/ui/iconComponents/WatchIcon";
import CategoriesTabsItem from "./categiriesTabsItem/categiriesTabsItem";

// const iconArray = [LapTopIcon, PhonesIcon, ChipIcon, HeadphonesIcon, WetchIcon];

const CATEGORIES_TABS_CONTENT = [
    {
        Icon: LapTopIcon,
        title: "Laptops",
        href: "laptops",
    },
    {
        Icon: PhonesIcon,
        title: "Phones",
        href: "smartphones",
    },
    {
        Icon: ChipIcon,
        title: "Components",
        href: "components",
    },
    {
        Icon: HeadphonesIcon,
        title: "Audio",
        href: "audio",
    },
    {
        Icon: WetchIcon,
        title: "Wearables",
        href: "wearables",
    },
];

const CategoriesTabs = () => {
    return (
        <section className="max-w-[1440px] mx-auto px-4 lg:px-20 mb-12">
            <div className="flex border-b border-gray-200 dark:border-border-dark overflow-x-auto no-scrollbar gap-10">
                {CATEGORIES_TABS_CONTENT.map(({ Icon, title, href }, index) => (
                    <CategoriesTabsItem
                        key={index}
                        icon={
                            <Icon className="w-[clamp(0.9rem,1.8vw,2rem)] h-[clamp(0.9rem,1.8vw,2rem)]" />
                        }
                        title={title}
                        href={`/catalog/${href}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default CategoriesTabs;
