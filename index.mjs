import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const messages = [
  {
    role: "system",
    content:
      "You are a cool rapper now genearte a 5 line rap based on the given topic",
  },
  {
    role: "user",
    content: "Rap on television",
  },
];

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: messages,
});

console.log(response.choices[0].message.content);
