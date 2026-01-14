import { GoogleGenAI, Type } from "@google/genai";
import { AIFeedback } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const reviewOpinion = async (title: string, content: string): Promise<AIFeedback> => {
  try {
    const prompt = `
      Anda adalah seorang editor senior untuk koran universitas bergaya klasik. 
      Tinjau draf opini berikut ini. Berikan analisis singkat.
      
      Judul: ${title}
      Isi: ${content}
      
      Berikan output dalam JSON dengan struktur:
      - tone: (string) Nada tulisan (misal: Akademis, Kritis, Satir, Santai).
      - suggestions: (array of strings) Maksimal 3 saran singkat untuk perbaikan tata bahasa atau alur argumen.
      - summary: (string) Ringkasan satu paragraf pendek (maksimal 2 kalimat) untuk lead artikel.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tone: { type: Type.STRING },
            suggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            summary: { type: Type.STRING }
          },
          required: ["tone", "suggestions", "summary"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as AIFeedback;
  } catch (error) {
    console.error("Error reviewing opinion:", error);
    return {
      tone: "Tidak dapat menganalisis",
      suggestions: ["Maaf, layanan editor AI sedang sibuk."],
      summary: "Ringkasan tidak tersedia."
    };
  }
};
