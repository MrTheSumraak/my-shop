import BasketIcon from "@/shared/ui/iconComponents/BasketIcon";
import LikeIcon from "@/shared/ui/iconComponents/LikeIcon";
import SearchIcon from "@/shared/ui/iconComponents/SearchIcon";

const HeaderUI = () => {
    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-border-dark px-4 lg:px-20 py-3">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                            <span className="material-symbols-outlined font-bold">
                                bolt
                            </span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">
                            TECHSTORE
                        </h2>
                    </div>

                    <nav className="hidden xl:flex items-center gap-8">
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Laptops
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Smartphones
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Components
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Audio
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Wearables
                        </a>
                    </nav>
                </div>

                <div className="flex flex-1 justify-end items-center gap-6">
                    <div className="hidden md:flex flex-1 max-w-md relative group">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                            <SearchIcon />
                        </span>
                        <input
                            className="w-full h-10 pl-10 pr-4 rounded-lg border-none bg-gray-100 dark:bg-card-dark text-sm focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-500"
                            placeholder="Search future tech..."
                            type="text"
                        />
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-card-dark rounded-lg transition-colors">
                            <span className="material-symbols-outlined">
                                <LikeIcon />
                            </span>
                        </button>

                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-card-dark rounded-lg transition-colors relative">
                            <span className="material-symbols-outlined">
                                <BasketIcon />
                            </span>
                            <span className="absolute top-1 right-1 size-2 bg-secondary rounded-full"></span>
                        </button>

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
