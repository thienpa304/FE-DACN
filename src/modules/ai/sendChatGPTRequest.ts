const sendChatGPTRequest = async (
  request: string,
  content: any[],
  max_tokens = null,
  logit_bias = null
) => {
  const responses = [];

  if (!content || content.length === 0) {
    return responses;
  }

  const sendMessage = async (inputText) => {
    if (!inputText.trim()) return;

    try {
      const response = await fetch(
        'https://api.chatanywhere.cn/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              // 'Bearer sk-ASMcBs6iBFaFfCxCizltjPPGTLCkB9tyESkmxxsQb9Tie4Fx'
              'Bearer sk-idLv1WJ8H0Xec0FjTujkzGClFhuOLvUcVw7FJBA0ERBhN8Y2' //free
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: request
              },
              { role: 'user', content: inputText }
            ],
            temperature: 0,
            top_p: 0,
            presence_penalty: 0.7,
            frequency_penalty: 0.7,
            max_tokens: max_tokens,
            logit_bias: logit_bias
          })
        }
      );

      const data = await response.json();
      return data?.choices?.[0]?.message?.content;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  await Promise.all(
    content.map(async (inputText) => {
      const response = await sendMessage(JSON.stringify(inputText)).catch(
        () => ''
      );
      responses.push(response);
    })
  );

  return responses;
};

export default sendChatGPTRequest;
