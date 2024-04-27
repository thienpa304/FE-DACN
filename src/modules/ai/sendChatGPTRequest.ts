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

export const getEmbedding = async (content: any[]) => {
  const responses = [];

  if (!content || content.length === 0) {
    return responses;
  }

  const sendMessage = async (inputText) => {
    if (!inputText.trim()) return;

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
            model: 'text-embedding-3-small',
            input: inputText
            // dimensions: 100
          })
        }
      );

      const data = await response.json();
      return data?.data[0]?.embedding;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  await Promise.all(
    content.map(async (inputText) => {
      const employer_Requirement = await Promise.all(
        inputText?.employer_Requirement.map(async (require) => {
          const res = await sendMessage(JSON.stringify(require));
          // console.log(res);
          return { word: require, result: res };
        })
      );
      const employee_Profile = await Promise.all(
        inputText?.employee_Profile.map(async (profile) => {
          const res = await sendMessage(JSON.stringify(profile));
          // console.log(res);
          return { word: profile, result: res };
        })
      );
      responses.push({
        id: inputText?.id,
        employer_Requirement: employer_Requirement,
        employee_Profile: employee_Profile
      });
      // debugger;
      console.log(responses);
    })
  );

  return responses;
};

export default sendChatGPTRequest;
