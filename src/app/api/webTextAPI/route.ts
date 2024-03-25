import puppeteer from 'puppeteer';
import OpenAI from 'openai';
//@type for webtext input form

export type WebTextData = {
   linkedIn: string;
   linkedInSelector: string;
   website: string;
   websiteSelector: string;
   textInput: string;
   modelSelector: modelSelector;
};
// @type for url & selector input
export type inputData = {
   url: string;
   selector: string;
};
// @type form model selector
export type modelSelector = 'gpt-3.5-turbo-0125' | 'gpt-4-0125-preview' | 'gpt-4-1106-preview' | 'gpt-4-32k-0613' | 'gpt-4';
// @type for openAI request
export type openAIRequest = {
   messages: [
      {
         role: 'system';
         content: string;
      },
      { role: 'user'; content: string }
   ];
   model: modelSelector;
};
// @type for openAI response
export type openAIResponse = {
   content: string | null;
   info: {
      created: Date;
      model: string;
      finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';
      prompt_tokens?: number;
      completion_tokens?: number;
      total_tokens?: number;
   };
};
// @type for API response
export type APIResponse = {
   content: string | null;
   info: {
      created: Date;
      model: string;
      finish_reason: 'stop' | 'length' | 'tool_calls' | 'content_filter' | 'function_call';
      prompt_tokens?: number;
      completion_tokens?: number;
      total_tokens?: number;
   };
   userInput: {
      linkedIn_url: string;
      website_url: string;
      user_input: string;
   };
};
// @API ROUTE FUNCTION

export async function POST(req: Request) {
   console.log('api route called');
   //# get request data/input data
   const data: WebTextData = await req.json();
   //# scrape website & linkedin
   const LinkedInData = await GetWebData({
      url: data.linkedIn,
      selector: data.linkedInSelector,
   } as inputData);
   const websiteData = await GetWebData({
      url: data.website,
      selector: data.websiteSelector,
   } as inputData);
   const openAIResponse = await OpenAICall(LinkedInData, websiteData, data.textInput, data.modelSelector);
   const apiResponse: APIResponse = {
      ...openAIResponse,
      userInput: {
         linkedIn_url: data.linkedIn as string,
         website_url: data.website as string,
         user_input: data.textInput as string,
      },
   };
   return Response.json(apiResponse);
}
async function GetWebData(dataSource: inputData): Promise<string[]> {
   // #Scraping function
   function ScrapingFunction(elements: Element[]) {
      const scrapedText = elements.map((el) => {
         const textcontent = el.textContent as string;
         return textcontent.replace(/(\s\s\s*)/g, ' ').trim();
      });
      const cleanedText = scrapedText.filter((i) => i.length > 2);
      const uniqueValues = new Set(cleanedText);
      return Array.from(uniqueValues);
   }
   // #Puppeteer web scraping
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto(dataSource.url);
   const data = await page.$$eval(dataSource.selector, ScrapingFunction);
   await browser.close();
   return data;
}
async function OpenAICall(LinkedInData: string[], websiteData: string[], userInput: string, model: modelSelector) {
   // #format input & scraped data for openAI API
   //?SYSTEM PROMPT FOR OPENAI API
   const systemPrompt: string =
      'du modtager data i form at et stringified javascript object med keys = linkedin_data, website_data og userinput. linkedIn_data     består af tekst hentet fra en virksomheds linkedin profil og website_data består af tekst hentet fra en virksomheds hjemmeside. user_input er din prompt til din respons. Dine responser skal være tekst som skal bruges til markedføring';
   //? FORMAT OPENAI REQUEST
   const openAIbody: openAIRequest = {
      messages: [
         { role: 'system', content: systemPrompt },
         {
            role: 'user',
            content: JSON.stringify({
               linkedIn_data: LinkedInData,
               website_data: websiteData,
               user_input: userInput,
            }),
         },
      ],
      model: model,
   };
   //#send request to OpenAI API
   const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
   });
   const response = await openai.chat.completions.create({
      ...openAIbody,
      stream: false,
   });
   //#clean up response data
   const cleanedData: openAIResponse = {
      content: response.choices[0].message.content,
      info: {
         created: new Date(response.created * 1000),
         model: response.model,
         finish_reason: response.choices[0].finish_reason,
         ...response.usage,
      },
   };

   return cleanedData;
}
