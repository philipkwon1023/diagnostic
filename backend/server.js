import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const apikey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//console.log('apikey:', genAI);

app.post('/api/gemini', async (req, res) => {
    console.log('요청들어옴');
    const { userRawData, prompt } = req.body;
  
    try {
      
      const result = await model.generateContent(`${userRawData}\n\n${prompt}`);
      const response = await result.response;
      const text = response.text();
      res.json({ result: text });
    } catch (error) {
      console.error('API 호출 오류:', error);
      res.status(500).json({ error: 'Gemini API 호출 중 오류가 발생했습니다.' });
    }
  });
  
  app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
  });