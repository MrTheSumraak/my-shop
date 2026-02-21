import { IProduct } from "@/entities/product/api/types";
import AddIcon from "@/shared/ui/iconComponents/AddIcon";
import DeleteIcon from "@/shared/ui/iconComponents/DeleteIcon";
import RemoveIcon from "@/shared/ui/iconComponents/RemoeIcon";

interface IBasketProductItem {
    product: IProduct;
}

const BasketProductItem = ({ product }: IBasketProductItem) => {
    const { id, name, imageUrl, price, inStock } = product;

    return (
        <li className="group flex flex-col sm:flex-row items-center gap-6 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 bg-white dark:bg-surface-dark/50 transition-all">
            <div className="w-32 h-32 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                <div
                    className="w-full h-full bg-cover bg-center"
                    data-alt="High-end black wireless gaming headphones"
                    style={{
                        backgroundImage: `url("${imageUrl}")`,
                        // backgroundImage:
                        //     'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfZszT9F0V6eL6mHOz_Q7BWmMxhHD8R2nJTbAjlCC7POl_OKRvhehWnnw3_5j_QDUNaSuwpVm1NYsUNBR6tBNIHt-eeSNUihVyN7BxKUVj1bM246u6OvtOuqg-V138OzsO5AVS7esiFLllFSyFzZAhLWP9hDADGkTQaxwIXWLjOje9_6tO6qI04CBC2WPuZo_VZyf6bPwjYwoELHnKWfQtwxftm1dZVpZAxazMrtZe8Z9ZatVdIOC_UZ73dwRTg2Er9iS1IYk")',
                    }}
                ></div>
            </div>

            <div className="flex-grow flex flex-col justify-between h-full py-1 text-center sm:text-left">
                <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {/* Quantum X1 Wireless Headset */}
                        {name}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                        Matte Black | 7.1 Surround | 40h Battery
                    </p>
                </div>

                <div className="mt-4 flex items-center justify-center sm:justify-start gap-6">
                    <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
                        <button className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm font-bold">
                                <RemoveIcon />
                            </span>
                        </button>
                        <span className="w-10 text-center font-bold">1</span>
                        <button className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-sm font-bold">
                                <AddIcon />
                            </span>
                        </button>
                    </div>

                    <button className="flex items-center gap-1 text-slate-400 hover:text-red-400 transition-colors text-xs font-medium uppercase tracking-wider">
                        <span className="material-symbols-outlined text-base">
                            <DeleteIcon />
                        </span>
                        Remove
                    </button>
                </div>
            </div>

            <div className="text-right shrink-0">
                <p className="text-xl font-bold">${price}</p>
                <p className="text-xs text-primary font-medium mt-1">
                    {inStock ? "In Stock" : "Out of Stock"}
                </p>
            </div>
        </li>
    );
};

export default BasketProductItem;
