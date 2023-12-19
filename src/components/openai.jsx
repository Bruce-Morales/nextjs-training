// utils/openai.js
import axios from 'axios';

export function getOpenAIResponse(prompt) {
    const url = 'https://api.openai.com/v1/completions';
    const apiKey = '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';

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };

    const data = {
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 100
    };

    return axios.post(url, data, { headers })
        .then(response => response.data.choices[0].message.content)
        .catch(error => {
            console.error('Error calling OpenAI API:', error);
            throw error;
        });
}
