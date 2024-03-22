import React, { useEffect, useState } from 'react';

const ChatGPT = (props) => {
  const { request, content, setAnswer, sendRequest } = props;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setInputText(request + JSON.stringify(content));
  }, [request, content]);

  useEffect(() => {
    if (sendRequest) sendMessage();
  }, [sendRequest]);

  useEffect(() => {
    if (messages[messages.length - 1]?.role === 'ai')
      setAnswer(messages[messages.length - 1].content);
  }, [messages.length]);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    // Thực hiện gửi yêu cầu API đến OpenAI
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

    // Cập nhật tin nhắn và phản hồi từ API
    setMessages([
      ...messages,
      { role: 'user', content: inputText },
      {
        role: 'ai',
        content: data?.choices[0]?.message?.content
      }
    ]);

    // Xóa nội dung tin nhắn sau khi gửi
    setInputText('');
  };

  return (
    <div>
      {/* <div>
        {messages[messages.length - 1]?.role === 'ai' &&
          messages[messages.length - 1].content}
      </div> */}
      {/* <textarea
        // type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            sendMessage();
          }
        }}
        placeholder="Nhập tin nhắn của bạn..."
        style={{ width: '100%', padding: '10px', marginTop: '10px' }}
        rows={5}
      /> */}
      {/* <button onClick={sendMessage}>Gửi</button> */}
    </div>
  );
};

export default ChatGPT;
