"use client";

import sendMessage from "@/lib/sendMessage";
import { useState, useRef, useEffect } from "react";

type TMessage = {
    role: "user" | "ai";
    text: string;
};

const AiAssistent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<TMessage[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const toggleModal = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // Автоскролл вниз при появлении нового сообщения
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <>
            {/* Кнопка открытия */}
            {!isOpen && (
                <button
                    onClick={toggleModal}
                    className="fixed bottom-5 right-5 z-50 bg-sky-500 text-white shadow-xl px-4 py-3 rounded-full"
                >
                    💬 AI Ассистент - Василий Гопник
                </button>
            )}

            {/* Окно чата */}
            {isOpen && (
                <div className="fixed bottom-5 right-5 z-50 w-80 h-96 bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden border border-gray-200">
                    {/* Шапка */}
                    <div className="bg-sky-500 text-white p-3 flex justify-between items-center">
                        <span className="font-semibold">
                            AI Ассистент - Василий Гопник
                        </span>
                        <button
                            onClick={toggleModal}
                            className="text-white text-xl leading-none"
                        >
                            ✖
                        </button>
                    </div>

                    {/* Сообщения */}
                    <div className="flex-1 p-3 overflow-y-auto space-y-2 custom-scroll">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded-lg max-w-[80%] ${
                                    msg.role === "user"
                                        ? "bg-sky-500 text-white self-end ml-auto"
                                        : "bg-gray-200 text-black"
                                }`}
                            >
                                {msg.text}
                            </div>
                        ))}

                        {isTyping && (
                            <div className="bg-gray-200 text-black p-2 rounded-lg max-w-[60%]">
                                <span className="opacity-70">AI печатает…</span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Поле ввода */}
                    <div className="p-3 border-t border-gray-200 flex gap-2">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Введите сообщение..."
                            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                        <button
                            onClick={() => {
                                sendMessage({
                                    inputValue,
                                    messages,
                                    setMessages,
                                    setInputValue,
                                    setIsTyping,
                                });
                            }}
                            className="bg-sky-500 text-white px-4 rounded-lg"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AiAssistent;
