import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const aiSuggestionController = async (req, res) => {
  try {
    const { prompt } = req.body;

    const interaction = await ai.interactions.create({
      model: "gemini-3.5-flash",
      input: prompt,
    });

    res.status(200).json({
      status: true,
      suggestion: interaction.output_text,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};