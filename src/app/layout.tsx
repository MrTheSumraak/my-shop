import Providers from "./providers/providers";
import { ILayoutProps } from "./types";
import "./globals.css";
import "./normalise.css";
import { manrope } from "./_fonts/manropeFont";
import HeaderUI from "@/widgets/header/HeaderActions";
import Footer from "@/widgets/footer/Footer";
import StoreProvider from "./storeProvider/StoreProvider";

export default function RootLayout({ children }: ILayoutProps) {
    return (
        <html lang="ru" className={manrope.variable} suppressHydrationWarning>
            <body>
                <StoreProvider>
                    <HeaderUI />
                    <main className="px-12">
                        <Providers>{children}</Providers>
                    </main>
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
