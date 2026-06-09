import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the "IWC Logistics Assistant", a helpful and professional AI support agent for the IWC Network (Independent Wellness Courier Network).

Your goal is to assist potential clients (doctors, labs, hospitals) with questions about medical logistics.

Key Information about IWC Network:
- We specialize in: Lab specimens, Pharmaceuticals, Medical Equipment, and Confidential Records.
- Compliance: Fully HIPAA compliant, OSHA trained drivers.
- Service Speed: STAT (immediate), Scheduled, and Route-based.
- Area: Nationwide coverage with local specialized hubs.
- Technology: Real-time GPS tracking, chain of custody verification.

Tone: Professional, reassuring, efficient, and medical-focused.
Keep answers concise (under 3 sentences unless detailed explanation is requested).
If asked about specific pricing, ask them to use the "Get a Quote" form on the website as pricing depends on distance and urgency.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot connect to the server right now (Missing API Key). Please contact support by phone.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    // We construct a chat session for context, but for this simple implementation 
    // we will just use generateContent with the latest query + a bit of history context if needed, 
    // or use the proper chat API. Here we use the Chat API.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history // Pass previous conversation history
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: message
    });

    return result.text || "I apologize, I didn't catch that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble accessing my logistics database at the moment. Please try again in a moment.";
  }
};