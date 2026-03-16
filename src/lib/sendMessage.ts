"use client";

export type ChatRole = "user" | "ai";

export interface ChatMessage {
    role: ChatRole;
    text: string;
}

interface SendMessageArgs {
    inputValue: string;
    messages: ChatMessage[];
    setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
}

const sendMessage = async ({
    inputValue,
    messages,
    setMessages,
    setInputValue,
    setIsTyping
}: SendMessageArgs) => {
    if (!inputValue.trim()) return;

    const userMessage = { role: "user" as const, text: inputValue };

    // Добавляем сообщение пользователя
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    try {
        const res = await fetch("/api/ai-support", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ messages: [...messages, userMessage] }),
        });

        const data = await res.json();

        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (err) {
        setMessages((prev) => [
            ...prev,
            { role: "ai", text: "Брат, сервер не отвечает." },
        ]);
    } finally {
        setIsTyping(false);
    }
};

export default sendMessage;
