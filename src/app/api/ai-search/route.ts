import { promtAiFilter } from "@/config/configAI";

export async function POST(req: Request) {
    const { query } = await req.json();

    const ai = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
            model: "llama-3.1-8b-instant",
            messages: [
                { role: "system", content: promtAiFilter },
                { role: "user", content: query },
            ],
        }),
    });

    const data = await ai.json();

    return Response.json(data);
}
