'use client'

// open ai key:  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
/* export default function Page() {
    return (

        <h1 className="text-center p-auto">Secret page! :D</h1>
    )
} */

import { useEffect, useState } from 'react';
import { dogChatbot } from '@/components/dogchat';

export default function DogChat() {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        const chatbotResponse = await dogChatbot(userInput);
        setResponse(chatbotResponse);
    };

    return (
        <div>
            <h1>Enter a dog breed:</h1>
            <input type="text" value={userInput} onChange={handleInputChange} />
            <button className="btn btn-secondary" onClick={handleSubmit}>Ask</button>
            <p>{response}</p>
        </div>
    );
}
