import ChipIcon from "@/shared/ui/iconComponents/ChipIcon";
import HeadphonesIcon from "@/shared/ui/iconComponents/HeadphonesIcon";
import { LapTopIcon } from "@/shared/ui/iconComponents/LapTopIcon";
import PhonesIcon from "@/shared/ui/iconComponents/PhonesIcon";
import WetchIcon from "@/shared/ui/iconComponents/WatchIcon";
import CategoriesTabsItem from "./categiriesTabsItem/categiriesTabsItem";

const CategoriesTabs = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 mb-12">
            <div className="flex border-b border-gray-200 dark:border-border-dark overflow-x-auto no-scrollbar gap-10">
                <CategoriesTabsItem
                    icon={
                        <LapTopIcon className="w-[clamp(0.9rem,1.8vw,2rem)] h-[clamp(0.9rem,1.8vw,2rem)]" />
                    }
                    title={"Laptops"}
                    href={"#"}
                    active
                />
                <CategoriesTabsItem
                    icon={
                        <PhonesIcon className="w-[clamp(0.9rem,1.8vw,2rem)] h-[clamp(0.9rem,1.8vw,2rem)]" />
                    }
                    title={"Phones"}
                    href={"#"}
                />
                <CategoriesTabsItem
                    icon={
                        <ChipIcon className="w-[clamp(0.9rem,1.8vw,2rem)] h-[clamp(0.9rem,1.8vw,2rem)]" />
                    }
                    title={"Components"}
                    href={"#"}
                />
                <CategoriesTabsItem
                    icon={
                        <HeadphonesIcon className="w-[clamp(0.9rem,1.8vw,2rem)] h-[clamp(0.9rem,1.8vw,2rem)]" />
                    }
                    title={"Audio"}
                    href={"#"}
                />
                <CategoriesTabsItem
                    icon={
                        <WetchIcon className="w-[clamp(0.9rem,1.8vw,2rem)] h-[clamp(0.9rem,1.8vw,2rem)]" />
                    }
                    title={"Wearables"}
                    href={"#"}
                />
            </div>
        </div>
    );
};

export default CategoriesTabs;
