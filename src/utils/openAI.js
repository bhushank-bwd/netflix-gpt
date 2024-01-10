import OpenAI from "openai";
import { GPT_KEY } from "./constants";

export const openAI = new OpenAI({
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser: true,
});
