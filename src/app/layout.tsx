// "use client";

import Providers from "./providers/providers";
import { ILayoutProps } from "./types";
import "./globals.css";
import "./normalise.css";
import { manrope } from "./_fonts/manropeFont";

export default function RootLayout({ children }: ILayoutProps) {
    return (
        <html lang="ru" className={manrope.variable} suppressHydrationWarning>
            <body>
                <main className="px-12">
                    <Providers>{children}</Providers>
                </main>
            </body>
        </html>
    );
}
