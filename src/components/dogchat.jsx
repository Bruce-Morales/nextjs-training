import { getOpenAIResponse } from "./openai";

export async function dogChatbot(userInput) {
    const prompt = `Tell me about ${userInput} dogs.`;
    const response = await getOpenAIResponse(prompt);
    return response;
}