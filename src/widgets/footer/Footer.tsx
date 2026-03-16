import BoltIcon from "@/shared/ui/iconComponents/Bolt";
import BrandFamily from "@/shared/ui/iconComponents/BrandFamilyIcon";
import CameraIcon from "@/shared/ui/iconComponents/CameraIcon";
import ShareIcon from "@/shared/ui/iconComponents/ShareIcon";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-card-dark border-t border-gray-200 dark:border-border-dark py-12 px-4 lg:px-20">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-background-dark">
                            <span className="material-symbols-outlined font-bold">
                                <BoltIcon />
                            </span>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight">
                            TECHSTORE
                        </h2>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed">
                        Leading the evolution of consumer electronics since
                        2024. Engineering the future with minimalist precision
                        and unmatched performance.
                    </p>

                    <div className="flex gap-4">
                        <a
                            className="p-2 bg-gray-200 dark:bg-background-dark rounded-full hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">
                                <ShareIcon />
                            </span>
                        </a>

                        <a
                            className="p-2 bg-gray-200 dark:bg-background-dark rounded-full hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">
                                <CameraIcon />
                            </span>
                        </a>

                        <a
                            className="p-2 bg-gray-200 dark:bg-background-dark rounded-full hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-xl">
                                <BrandFamily />
                            </span>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">
                        Shop
                    </h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-500">
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Computers
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Smartphones
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Audio Gear
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Accessories
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">
                        Support
                    </h4>
                    <ul className="flex flex-col gap-4 text-sm text-gray-500">
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Track Order
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Returns
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-primary transition-colors"
                                href="#"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">
                        Newsletter
                    </h4>
                    <p className="text-sm text-gray-500 mb-4">
                        Get the latest updates on new tech drops.
                    </p>

                    <div className="flex gap-2">
                        <input
                            className="flex-1 bg-white dark:bg-background-dark border-none rounded-lg text-sm px-4 focus:ring-1 focus:ring-primary"
                            placeholder="Email address"
                            type="email"
                        />
                        <button className="px-4 py-2 bg-primary text-background-dark font-bold rounded-lg hover:brightness-110 transition-all text-sm">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-gray-200 dark:border-border-dark flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-gray-500">
                    © 2024 TechStore. All rights reserved.
                </p>

                <div className="flex gap-6 text-xs text-gray-500">
                    <a className="hover:text-primary" href="#">
                        Privacy Policy
                    </a>
                    <a className="hover:text-primary" href="#">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
