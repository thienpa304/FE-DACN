import alertDialog from 'src/utils/alertDialog';

// Common function to handle API requests
const sendRequest = async (url, headers, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();
    if (data?.error) {
      throw new Error(data.error.message);
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Common function to process messages
const processMessages = async (content, sendMessage) => {
  const responses = [];
  let hasShownAlert = false;

  const results = await Promise.allSettled(
    content.map((inputText) => sendMessage(JSON.stringify(inputText)))
  );

  for (const result of results) {
    if (result.status === 'fulfilled') {
      responses.push(result.value);
    } else if (result.status === 'rejected') {
      if (!hasShownAlert) {
        console.error('Error in sendMessage:', result.reason);
        alertDialog({
          selectedId: '_',
          handleConfirm: () => {},
          message: result.reason.message,
          hideCancelButton: true
        });
        hasShownAlert = true;
      }
      break;
    }
  }

  return responses;
};

const sendChatGPTRequest = async (
  request,
  content,
  max_tokens = null,
  logit_bias = null
) => {
  if (!content || content.length === 0) return [];

  const headers = {
    'Content-Type': 'application/json',
    Authorization: process.env.GPT_API_KEY || process.env.FREE_GPT_API_KEY
  };

  const sendMessage = async (inputText) => {
    if (!inputText.trim()) return;

    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: request },
        { role: 'user', content: inputText }
      ],
      temperature: 0,
      presence_penalty: 0.7,
      frequency_penalty: 0.7,
      max_tokens: max_tokens,
      logit_bias: logit_bias
    };

    const data = await sendRequest(
      'https://api.chatanywhere.cn/v1/chat/completions',
      headers,
      body
    );
    return data?.choices?.[0]?.message?.content;
  };

  return await processMessages(content, sendMessage);
};

export const getEmbedding = async (content) => {
  if (!content || content.length === 0) return [];

  const headers = {
    'Content-Type': 'application/json',
    Authorization: process.env.GPT_API_KEY || process.env.FREE_GPT_API_KEY
  };

  const sendMessage = async (inputText) => {
    if (!inputText) return;

    const body = {
      model: 'text-embedding-3-large',
      input: inputText
    };

    const data = await sendRequest(
      'https://api.chatanywhere.cn/v1/embeddings',
      headers,
      body
    );
    return data?.data?.map((item) => item.embedding);
  };

  const processEmbeddings = async (content) => {
    const responses = [];
    let hasShownAlert = false;

    const results = await Promise.allSettled(
      content.map(async (inputText) => {
        let i = 0;
        console.log('inputText', inputText);

        const employer_Requirement = (
          await sendMessage(inputText?.employer_Requirement)
        )?.map((res) => ({
          word: inputText?.employer_Requirement[i++],
          result: res
        }));

        i = 0;

        const employee_Profile = (
          await sendMessage(inputText?.employee_Profile)
        )?.map((res) => ({
          word: inputText?.employee_Profile[i++],
          result: res
        }));

        return {
          id: inputText?.id,
          employer_Requirement: employer_Requirement,
          employee_Profile: employee_Profile
        };
      })
    );

    for (const result of results) {
      if (result.status === 'fulfilled') {
        responses.push(result.value);
      } else if (result.status === 'rejected') {
        if (!hasShownAlert) {
          console.error('Error in sendMessage:', result.reason);
          alertDialog({
            selectedId: '_',
            handleConfirm: () => {},
            message: result.reason.message,
            hideCancelButton: true
          });
          hasShownAlert = true;
        }
        break;
      }
    }

    return responses;
  };

  return await processEmbeddings(content);
};

export default sendChatGPTRequest;
