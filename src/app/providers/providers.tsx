"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ILayoutProps } from "../types";

export default function Providers({ children }: ILayoutProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme="dark">
            <NextUIProvider>{children}</NextUIProvider>
        </NextThemesProvider>
    );
}
