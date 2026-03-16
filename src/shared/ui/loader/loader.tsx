"use client";

import React from "react";
import { useEffect, useState } from "react";

const funnyPhrases = [
    "сейчас вот-вот загрузится...",
    "подожди, сервер просыпается...",
    "загружаю пиксели...",
    "подкручиваю болтики...",
    "оптимизирую оптимизацию...",
    "почти готово, честно, честно...",
    "сервер делает глубокий вдох...",
];

const Loader = React.memo(function Loader() {
    const [text, setText] = useState(funnyPhrases[0]);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % funnyPhrases.length;
            setText(funnyPhrases[index]);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-y-4 items-center">
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 animate-spin" />
                <div className="absolute inset-2 bg-white dark:bg-neutral-900 rounded-full" />
            </div>

            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-pulse">
                {text}
            </p>
        </div>
    );
});

export default Loader;
