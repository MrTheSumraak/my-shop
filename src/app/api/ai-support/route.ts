import { promtAiSupport } from "@/config/configAI";
import Groq from "groq-sdk";

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const groqMessages = messages.map((m: any) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.text,
        }));

        const completion = await client.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "system",
                    content:
                        promtAiSupport,
                },
                ...groqMessages,
            ],
        });

        const reply = completion.choices[0].message.content;

        return Response.json({ reply });
    } catch (err) {
        console.log(err.message);
        return Response.json({ reply: "Брат, на сервере ошибка." }, { status: 500 });
    }
}
