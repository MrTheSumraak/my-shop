/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/shared/**/*.{js,ts,jsx,tsx}",
        "./src/widgets/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    background: "#0F0F0F", // основной фон
                    card: "#1A1A1A", // карточки, блоки
                    text: "#EAEAEA", // основной текст
                    heading: "#FFFFFF", // заголовки
                    primary: "#4F46E5", // фиолетовый акцент
                    secondary: "#22D3EE", // голубой акцент
                    price: "#FACC15", // жёлтый для цены
                    success: "#10B981", // зелёный "в наличии"
                    border: "#2A2A2A", // бордеры
                },

                light: {
                    background: "#FFFFFF",
                    card: "#F5F5F5",
                    text: "#111111",
                    heading: "#000000",
                    primary: "#4F46E5",
                    secondary: "#0EA5E9",
                    price: "#CA8A04",
                    success: "#059669",
                    border: "#E5E7EB",
                },
            },
            borderRadius: {
                md: "12px",
                lg: "20px",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
