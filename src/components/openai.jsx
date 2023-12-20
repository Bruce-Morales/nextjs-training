// utils/openai.js
import axios from 'axios';

export function getOpenAIResponse(prompt) {
    const url = '/api';
    // const apiKey = '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';

    const headers = {
        'Content-Type': 'application/json',
       // 'Authorization': `Bearer ${apiKey}`
    };

    const data = JSON.stringify({
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 100
    });

    return axios.post(url, data, { headers })
        .then(response => response.data.choices[0].message.content)
        .catch(error => {
            console.error('Error calling OpenAI API:', error);
            throw error;
        });
}
