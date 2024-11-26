//import dotenv from 'dotenv';
//dotenv.config();


import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai" 

//const env = process.env;
//const API_KEY = process.env.VITE_API_KEY;
const API_KEY = "AIzaSyAHqA4yDdaz8qxgKWfKvEimeHIkz4yllWw";
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  console.log(result.response.text());
  return result.response.text(); 
}

export default run;
  