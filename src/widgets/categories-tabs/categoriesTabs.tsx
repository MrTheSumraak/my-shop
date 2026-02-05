import ChipIcon from "@/shared/ui/iconComponents/ChipIcon";
import HeadphonesIcon from "@/shared/ui/iconComponents/HeadphonesIcon";
import { LapTopIcon } from "@/shared/ui/iconComponents/LapTopIcon";
import PhonesIcon from "@/shared/ui/iconComponents/PhonesIcon";
import WetchIcon from "@/shared/ui/iconComponents/WatchIcon";

const CategoriesTabs = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 mb-12">
            <div className="flex border-b border-gray-200 dark:border-border-dark overflow-x-auto no-scrollbar gap-10">
                <a
                    className="flex flex-col items-center justify-center border-b-2 border-primary text-primary gap-2 pb-4 px-2"
                    href="#"
                >
                    <span
                        className="material-symbols-outlined"
                        // style='
                        //             font-variation-settings: "FILL" 1;
                        //         '
                    >
                        <LapTopIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    </span>
                    <p className="text-sm font-bold uppercase tracking-wider">
                        Laptops
                    </p>
                </a>
                <a
                    className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 hover:text-primary transition-colors gap-2 pb-4 px-2"
                    href="#"
                >
                    <span className="material-symbols-outlined">
                        <PhonesIcon className="w-[clamp(1.7rem,5vw,4.5rem)]" />
                    </span>
                    <p className="text-sm font-bold uppercase tracking-wider">
                        Phones
                    </p>
                </a>
                <a
                    className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 hover:text-primary transition-colors gap-2 pb-4 px-2"
                    href="#"
                >
                    <span className="material-symbols-outlined">
                        {" "}
                        <ChipIcon />
                    </span>
                    <p className="text-sm font-bold uppercase tracking-wider">
                        Components
                    </p>
                </a>
                <a
                    className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 hover:text-primary transition-colors gap-2 pb-4 px-2"
                    href="#"
                >
                    <span className="material-symbols-outlined">
                        <HeadphonesIcon />
                    </span>
                    <p className="text-sm font-bold uppercase tracking-wider">
                        Audio
                    </p>
                </a>
                <a
                    className="flex flex-col items-center justify-center border-b-2 border-transparent text-gray-500 hover:text-primary transition-colors gap-2 pb-4 px-2"
                    href="#"
                >
                    <span className="material-symbols-outlined">
                        <WetchIcon />
                    </span>
                    <p className="text-sm font-bold uppercase tracking-wider">
                        Wearables
                    </p>
                </a>
            </div>
        </div>
    );
};

export default CategoriesTabs;
