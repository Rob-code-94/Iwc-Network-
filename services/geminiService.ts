import { GoogleGenAI, GenerateContentResponse } from '@google/genai';
import { BusinessLine, businessInfo } from '../constants/businessInfo';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const courierInstruction = `
You are the "IWC Logistics Assistant" for IWC Network (Independent Wellness Courier Network) — medical courier division.
Specialties: Lab specimens, pharmaceuticals, medical equipment, confidential records.
Compliance: HIPAA compliant, OSHA trained drivers. STAT, scheduled, and route-based service.
Tone: Professional, reassuring, medical-focused. Keep answers under 3 sentences unless detail is requested.
For pricing, direct users to the "Get a Quote" form. For member rides, suggest the NEMT site at /nemt.
`;

const nemtInstruction = `
You are the "IWC NEMT Assistant" for IWC Network's Non-Emergency Medical Transportation division in Dallas–Fort Worth, Texas.
Mobility levels: Ambulatory, Wheelchair (WAV), Stretcher.
Medicaid members schedule through their MCO; private pay can use the intake form on this site.
Service area: ${businessInfo.nemt.serviceArea.join(', ')}.
Compliance: Texas HHSC standards, Dallas Ch. 47A driver permits, HIPAA, ADA.
Tone: Professional, compassionate, clear. Keep answers under 3 sentences unless detail is requested.
Do not quote prices — direct to the NEMT intake form or dispatch at ${businessInfo.dispatch.phone}.
Do not invent license numbers or NPI values.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[],
  businessLine: BusinessLine = 'courier'
): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, I cannot connect right now (Missing API Key). Please contact dispatch by phone.";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: { systemInstruction: businessLine === 'nemt' ? nemtInstruction : courierInstruction },
      history,
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I apologize, I didn't catch that.";
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "I'm having trouble right now. Please try again or contact dispatch.";
  }
};
