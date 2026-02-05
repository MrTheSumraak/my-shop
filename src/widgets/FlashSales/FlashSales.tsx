import FlashSalesCard from "./FlashSalesCard/FlashSalesCard";

const FlashSales = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 mb-16">
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold">Flash Sales</h2>

                    <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-md border border-secondary/20">
                        <span className="material-symbols-outlined text-sm">
                            schedule
                        </span>
                        <span className="text-sm font-bold">02:45:12</span>
                    </div>
                </div>

                <a
                    className="text-primary text-sm font-bold hover:underline"
                    href="#"
                >
                    View All Deals
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Flash Sale Card 1 */}
                <FlashSalesCard />

                {/* Flash Sale Card 2 */}
                <div className="bg-white dark:bg-card-dark rounded-xl p-4 border border-gray-200 dark:border-border-dark group hover:border-primary/50 transition-all">
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-black/40">
                        <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                            15% OFF
                        </span>

                        <img
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            alt="High-end smartphone with triple camera system"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6zU0zp_MM_5MZ-oKBYmY7_zymvSrK9HkuO138iJX8Ve6e35vUQw2FHMcrHF88Im2brwb11kUOowN3MD6BuUQ9tlxABU7Tu03tZ8QVz7iPlYZFBJQIhS7llwOUvFia_WpiqoJac3hkuB5oMgbE8K9315akc_cAHVLlV7KKiEuwj07tbnFE-pWOmfpZCh_gSLnd7FDIiY1gDLuPucqfLKaT9N-RUu_GKF3fFev-sn2QuMU30VsUvGRM2Tbaq17ncLKDpt5oq8"
                        />
                    </div>

                    <h3 className="font-medium text-base mb-1 truncate">
                        Galaxy Ultra Z 2024
                    </h3>

                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-primary font-bold">
                            $1,099.00
                        </span>
                        <span className="text-gray-500 text-sm line-through">
                            $1,299.00
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-black/50 h-1.5 rounded-full mb-2">
                        <div className="bg-secondary h-full rounded-full w-1/4 glow-green"></div>
                    </div>

                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-4">
                        5 Items Left
                    </p>

                    <button className="w-full py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background-dark font-bold rounded-lg transition-all text-sm">
                        Add to Cart
                    </button>
                </div>

                {/* Flash Sale Card 3 */}
                <div className="bg-white dark:bg-card-dark rounded-xl p-4 border border-gray-200 dark:border-border-dark group hover:border-primary/50 transition-all">
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-black/40">
                        <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                            40% OFF
                        </span>

                        <img
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            alt="Premium mechanical keyboard with RGB lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-_UIW6VI_wJLcDKUtauTNP6vRVrz46_GGRuVWRsOhEHCFC7jVvODax6tjG_tR_1WsBLl4IMmPgD9lmzlwGMcvzu9KQSHeMhAQiwSRmVvrCF2QFavPIrl_Z5j6ebz_Gx8x9zsFZpE7YZQTGBAawddzUWilwViGBdPk78dA2PDmYK44DAYL_mhkA_xER_wjg8OFF0-9BRAzIAX7oREp-FJ_A6AoBl5pyHHGCuh-bkFOZMW14ozGBvKI2OveZTMvwUMVuEXFQQI"
                        />
                    </div>

                    <h3 className="font-medium text-base mb-1 truncate">
                        ClickMaster X Carbon
                    </h3>

                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-primary font-bold">$89.00</span>
                        <span className="text-gray-500 text-sm line-through">
                            $149.00
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-black/50 h-1.5 rounded-full mb-2">
                        <div className="bg-secondary h-full rounded-full w-1/2 glow-green"></div>
                    </div>

                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-4">
                        28 Items Left
                    </p>

                    <button className="w-full py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background-dark font-bold rounded-lg transition-all text-sm">
                        Add to Cart
                    </button>
                </div>

                {/* Flash Sale Card 4 */}
                <div className="bg-white dark:bg-card-dark rounded-xl p-4 border border-gray-200 dark:border-border-dark group hover:border-primary/50 transition-all">
                    <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50 dark:bg-black/40">
                        <span className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                            10% OFF
                        </span>

                        <img
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                            alt="State-of-the-art smartwatch with curved display"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwRCmEQK7xXR1w6KYUBE-Bvc1uSoAgDc7nYZaef8JBfOn0W94vouuUybj7wZOPhX2_csJoZNNHUY_gOyDJsaPW7fVruY9OaUXGiF6iWSy4zve1N_6idNYP7m1RTeE1mLhapWGNkL_30YZTtmx028oLBXXJxniwuOkzpE_ireTaKOx7HGDuyFUTUHhtGag7px4LsVvKjGwvbo345RLh6_q-5Lxn_vtnXt6l57LFZy8msqV5JeYBVW1Zfa8h0MJc8oGnTag5_4Y"
                        />
                    </div>

                    <h3 className="font-medium text-base mb-1 truncate">
                        Titan Watch S3
                    </h3>

                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-primary font-bold">$359.00</span>
                        <span className="text-gray-500 text-sm line-through">
                            $399.00
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-black/50 h-1.5 rounded-full mb-2">
                        <div className="bg-secondary h-full rounded-full w-5/6 glow-green"></div>
                    </div>

                    <p className="text-[10px] text-gray-500 font-bold uppercase mb-4">
                        45 Items Left
                    </p>

                    <button className="w-full py-2 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-background-dark font-bold rounded-lg transition-all text-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlashSales;
