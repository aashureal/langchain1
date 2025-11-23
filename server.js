import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { config } from "dotenv";
config();

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  maxOutputTokens: 2048,
});

// Batch and stream are also supported
// const res = await model.invoke([
//   [
//     "human",
//     "What would be a good company name for a company that makes colorful socks?",
//   ],
// ]);

const res = await model.invoke("who are you?");

console.log(res.content);
