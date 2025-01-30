import { useState } from 'react';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    if (inputText.trim() === '') return;

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      { message: inputText, sender: 'user', id: crypto.randomUUID() },
    ];
    setChatMessages(newChatMessages);

    // Typing indicator
    const typingMessage = { message: '...', sender: 'robot', id: crypto.randomUUID() };
    setChatMessages([...newChatMessages, typingMessage]);

    try {
      const response = await fetch('ariaai-backend-production.up.railway.app/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: inputText }), // Changed 'message' to 'prompt'
      });

      const data = await response.json();

      // Remove typing message and update with the actual AI response
      const updatedChatMessages = newChatMessages.filter((msg) => msg.id !== typingMessage.id);
      setChatMessages([
        ...updatedChatMessages,
        { message: data.response, sender: 'robot', id: crypto.randomUUID() }, // Ensure 'response' is the correct key returned by the server
      ]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInputText('');
    setIsLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Talk to AriaAI..."
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        disabled={isLoading}
      />
      <button onClick={sendMessage} className="send-button" disabled={isLoading}>
        {isLoading ? 'Typing...' : 'Send'}
      </button>
    </div>
  );
}
