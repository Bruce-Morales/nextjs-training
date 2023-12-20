// utils/openai.js
import axios from 'axios';

export async function getOpenAIResponse(prompt) {
    const url = 'https://api.openai.com/v1/chat/completions';
    const apiKey = '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';

  /*  const headers = {

        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const body = JSON.stringify({
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 100
    }); 



    const data = await axios.post(url, body, headers)
*/

const body = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
     {
      "role": "user",
      "content": prompt
     }
    ],
    "temperature": 0.7
   });
   let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.openai.com/v1/chat/completions',
    headers: {
     'Content-Type': 'application/json',
     'Authorization': 'Bearer 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',
    },
    data : body
   };
   const response = await axios.request(config)

   // console.log(response.data)


    return response.data
    
}
