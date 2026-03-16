"use client";

import { useState } from "react";
interface RangeInputProps {
    label: string;
    min: number;
    max: number;
}

export default function RangeInput({ label, min, max }: RangeInputProps) {
    const [minValue, setMinValue] = useState(min);
    const [maxValue, setMaxValue] = useState(max);

    const minPercent = (minValue / max) * 100;
    const maxPercent = (maxValue / max) * 100;

    return (
        <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {label}
            </p>

            <div className="px-2">
                <div className="relative h-1.5 w-full rounded-full bg-white/10">
                    <div
                        className="absolute inset-y-0 bg-primary rounded-full"
                        style={{
                            left: `${minPercent}%`,
                            right: `${100 - maxPercent}%`,
                        }}
                    />

                    <div
                        className="absolute -top-1.5 size-4 bg-white rounded-full border-2 border-primary shadow-lg shadow-primary/20 pointer-events-none"
                        style={{ left: `calc(${minPercent}% - 8px)` }}
                    />

                    <div
                        className="absolute -top-1.5 size-4 bg-white rounded-full border-2 border-primary shadow-lg shadow-primary/20 pointer-events-none"
                        style={{ left: `calc(${maxPercent}% - 8px)` }}
                    />

                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minValue}
                        onChange={(e) =>
                            setMinValue(
                                Math.min(Number(e.target.value), maxValue - 50),
                            )
                        }
                        className="absolute inset-0 w-full opacity-0 cursor-pointer z-30"
                    />

                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxValue}
                        onChange={(e) =>
                            setMaxValue(
                                Math.max(Number(e.target.value), minValue + 50),
                            )
                        }
                        className="absolute inset-0 w-full opacity-0 cursor-pointer z-40"
                        style={{
                            clipPath: `inset(0 0 0 ${minPercent}%)`,
                        }}
                    />
                </div>

                <div className="mt-4 flex justify-between text-xs font-mono">
                    <span>${minValue}</span>
                    <span className="text-primary">
                        ${maxValue.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
}
