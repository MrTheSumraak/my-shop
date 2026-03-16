"use client";

import SearchIcon from "@/shared/ui/iconComponents/SearchIcon";
import CancelIcon from "@/shared/ui/iconComponents/CancelIcon";

interface IAiSearchsection {
    onChange: () => void;
    value: string;
    setValue: (value: string) => void;
    isLoading: boolean;
}

const AiSearchsection = ({ onChange, value, setValue, isLoading }: IAiSearchsection) => {
    return (
        <div className="relative max-w-3xl mx-auto mb-12">
            <div className="flex flex-col gap-2">
                <label className="flex items-center w-full h-14 bg-surface-dark border border-border-dark rounded-xl px-4 ai-glow focus-within:border-primary transition-all">
                    <span className="material-symbols-outlined text-primary mr-3">
                        <SearchIcon />
                    </span>

                    <input
                        className="bg-transparent border-none focus:ring-0 w-full text-lg placeholder:text-slate-500"
                        placeholder="Ask AI or search products..."
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <div className="flex flex-row gap-1">
                        <button
                            onClick={onChange}
                            className="p-1 text-slate-500 hover:text-white transition-colors"
                        >
                            <span className="w-full h-full">
                                <SearchIcon
                                    width={"2.875rem"}
                                    height={"1.375rem"}
                                />
                            </span>
                        </button>
                        <button onClick={() => setValue("")} className="p-1 text-slate-500 hover:text-white transition-colors">
                            <span className="material-symbols-outlined">
                                <CancelIcon />
                            </span>
                        </button>
                    </div>
                </label>

                {/* <AIDropdown /> */}
                {/* <AIDropdown /> */}
            </div>
        </div>
    );
};

export default AiSearchsection;
