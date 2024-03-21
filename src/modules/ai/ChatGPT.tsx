import React, { useEffect, useState } from 'react';

const ChatGPT = ({ request, content, setAnswer, sendRequest }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    if (content) {
      const inputText = request + JSON.stringify(content);
      if (sendRequest) sendMessage(inputText);
    }
  }, [request, content, sendRequest]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].role === 'ai')
      setAnswer(messages[messages.length - 1].content);
  }, [messages, setAnswer]);

  const sendMessage = async (inputText) => {
    if (!inputText.trim()) return;
    console.log('inputText', inputText);

    try {
      const response = await fetch(
        'https://api.chatanywhere.cn/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer sk-idLv1WJ8H0Xec0FjTujkzGClFhuOLvUcVw7FJBA0ERBhN8Y2' //free
            // 'Bearer sk-ASMcBs6iBFaFfCxCizltjPPGTLCkB9tyESkmxxsQb9Tie4Fx'
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo', // Chọn mô hình ChatGPT bạn muốn sử dụng
            messages: [{ role: 'user', content: inputText }]
          })
        }
      );

      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: inputText },
        { role: 'ai', content: data?.choices?.[0]?.message?.content }
      ]);

      // setInputText('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Trả về null hoặc không trả về gì cả vì không có phần tử DOM nào cần thiết
  return null;
};

export default ChatGPT;
