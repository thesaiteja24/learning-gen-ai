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
      "You are sports resource person who has wide knowledge in all the games",
  },
  {
    role: "user",
    content: "Give dtails about kabaddi",
  },
];

console.log(response.choices[0].message.content);
