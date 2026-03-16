"use client";

import { updateTimer } from "@/lib/updateTime";
import Stopwatch from "@/shared/ui/iconComponents/Stopwatch";
import { useEffect, useState } from "react";

const Timer = ({ salesEnd }: { salesEnd: string }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const SALES_END = new Date(salesEnd).getTime();

        // первый вызов сразу
        updateTimer(SALES_END, setTime);

        // интервал с передачей аргументов
        const interval = setInterval(() => {
            updateTimer(SALES_END, setTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [salesEnd]);

    return (
        <div className="flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-md border border-secondary/20">
            <span className="material-symbols-outlined text-sm">
                <Stopwatch />
            </span>
            <span className="text-sm font-bold">{time}</span>
        </div>
    );
};

export default Timer;
