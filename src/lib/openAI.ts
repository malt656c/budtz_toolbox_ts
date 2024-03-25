export type OpenAIInput = {
  model: "gpt-3.5-turbo-0125" | "gpt-4-0125-preview" | "gpt-4-1106-preview" | "gpt-4-32k-0613" | "gpt-4";
  messages: [
    { role: "system"; content: string },
    {
      role: "user";
      content: {
        linkedIn_data: string[];
        website_data: string[];
        user_input: string;
      };
    }
  ];
};

export const OpenAISend = async ({ url, selector }: OpenAIInput) => {
  const apiURL = "/api/openAI";
  const body = [{}];
  const headers = { Accept: "application/json" };
  const response = await fetch(apiURL, { headers: headers, method: "POST", body: JSON.stringify(body) });
  const data = await response.json();
  console.log("openAI.ts:", body);

  return data;
};
