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
              'Bearer sk-ASMcBs6iBFaFfCxCizltjPPGTLCkB9tyESkmxxsQb9Tie4Fx'
            // 'Bearer sk-idLv1WJ8H0Xec0FjTujkzGClFhuOLvUcVw7FJBA0ERBhN8Y2' //free
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

export const getEmbedding = async (content: any[]) => {
  const responses = [];

  if (!content || content.length === 0) {
    return responses;
  }

  const sendMessage = async (inputText) => {
    if (!inputText) return;

    try {
      const response = await fetch(
        'https://api.chatanywhere.cn/v1/embeddings',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer sk-ASMcBs6iBFaFfCxCizltjPPGTLCkB9tyESkmxxsQb9Tie4Fx'
            // 'Bearer sk-idLv1WJ8H0Xec0FjTujkzGClFhuOLvUcVw7FJBA0ERBhN8Y2' //free
          },
          body: JSON.stringify({
            model: 'text-embedding-3-large',
            input: inputText
            // dimensions: 100
          })
        }
      );

      const data = await response.json();
      return data?.data?.map((item) => item.embedding);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  await Promise.all(
    content.map(async (inputText) => {
      let i = 0;
      const employer_Requirement = (
        await sendMessage(inputText?.employer_Requirement)
      ).map((res) => ({
        word: inputText?.employer_Requirement[i++],
        result: res
      }));

      i = 0;

      const employee_Profile = (
        await sendMessage(inputText?.employee_Profile)
      ).map((res) => ({
        word: inputText?.employee_Profile[i++],
        result: res
      }));

      responses.push({
        id: inputText?.id,
        employer_Requirement: employer_Requirement,
        employee_Profile: employee_Profile
      });
      console.log(responses);
    })
  );

  return responses;
};

export default sendChatGPTRequest;
