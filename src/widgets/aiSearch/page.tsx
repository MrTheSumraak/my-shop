"use client";

import useAISearch from "@/hooks/useAISearch";
import { useState } from "react";
import AiListProducts from "./ai-card/ai-list-products/AiListProducts";
import AiSearchsection from "./Ai-serach-section/aiSearchsection";
import AIFilterBar from "./filter-bar/filterBar";
import LoadMoreSection from "./load-more-section/loadMoreSection";
import Loader from "@/shared/ui/loader/loader";

const SearchResults = () => {
    const [value, setValue] = useState("");
    const [shown, setShown] = useState(4);
    const { search, isLoading, products } = useAISearch();
    const TOTAL = products.length;
    const STEP = 4;
    const visibleProducts = products.slice(0, shown);

    const handleLoadMore = () => {
        setShown((prev) => Math.min(prev + STEP, TOTAL));
    };

    const handleSearch = () => {
        if (!value.trim()) return;
        search(value);
    };
    return (
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-8">
            <AiSearchsection
                onChange={handleSearch}
                value={value}
                setValue={setValue}
                isLoading={isLoading}
            />

            <AIFilterBar items={products} />
            {isLoading ? (
                <Loader />
            ) : (
                <AiListProducts isLoading={isLoading} items={visibleProducts} />
            )}

            <LoadMoreSection
                shown={shown}
                total={TOTAL}
                onLoadMore={handleLoadMore}
                progress={(shown / TOTAL) * 100}
            />
        </div>
    );
};

export default SearchResults;
