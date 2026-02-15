/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/shared/**/*.{js,ts,jsx,tsx}",
        "./src/widgets/**/*.{js,ts,jsx,tsx}",
        "./src/entities/**/*.{js,ts,jsx,tsx,json}",
    ],
    theme: {
        extend: {
            // colors: {
            //     dark: {
            //         background: "#0F0F0F", // основной фон
            //         card: "#1A1A1A", // карточки, блоки
            //         text: "#EAEAEA", // основной текст
            //         heading: "#FFFFFF", // заголовки
            //         primary: "#4F46E5", // фиолетовый акцент
            //         secondary: "#22D3EE", // голубой акцент
            //         price: "#FACC15", // жёлтый для цены
            //         success: "#10B981", // зелёный "в наличии"
            //         border: "#2A2A2A", // бордеры
            //     },

            //     light: {
            //         background: "#FFFFFF",
            //         card: "#F5F5F5",
            //         text: "#111111",
            //         heading: "#000000",
            //         primary: "#4F46E5",
            //         secondary: "#0EA5E9",
            //         price: "#CA8A04",
            //         success: "#059669",
            //         border: "#E5E7EB",
            //     },
            // },

            colors: {
                primary: "#00b2ff",
                secondary: "#00FF9D",
                "background-light": "#f5f7f8",
                "background-dark": "#0E0E0E",
                "card-dark": "#1A1A1A",
                "border-dark": "#2e2e2e",
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },
            fontFamily: {
                sans: ["Manrope", "sans - serif"],
            },
            animation: { spinSlow: "spin 1.4s linear infinite" },
        },
    },
    plugins: [],
};
