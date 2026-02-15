"use client";

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 animate-spin" />{" "}
                <div className="absolute inset-2 bg-white dark:bg-neutral-900 rounded-full" />{" "}
            </div>
        </div>
    );
};

export default Loader;
