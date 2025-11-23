import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { config } from "dotenv";
config();


const promptTemplate = new PromptTemplate({
  template: `explain {topic} in very simple way like ELI5, make sure to include the core concepts and avoid unnecessary jargons. make the answer as concise as possible.`,
  inputVariables: ["topic"],
});

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

// const res = await model.invoke("who are you?");

async function main() {
  try {
    const res = await promptTemplate.pipe(model).invoke({ topic: "AI" });
    console.log(res.content);
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
