import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

async function testOpenAI() {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Say hello!" },
      ],
      max_tokens: 10,
    });

    console.log("OpenAI response:", completion.choices[0].message.content);
  } catch (error) {
    console.error("OpenAI test error:", error.response ? error.response.data : error.message);
  }
}

testOpenAI();
