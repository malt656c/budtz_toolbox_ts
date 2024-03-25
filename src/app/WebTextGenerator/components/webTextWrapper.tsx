'use client';
import { FormEvent, useState } from 'react';
import WebTextInput from './webTextInput';
import WebTextOutput from './webTextOutput';
import { APIResponse, WebTextData } from '@/app/api/webTextAPI/route';
import Loading from '@/app/loading';

export default function WebTextWrapper() {
   const [outputData, setOutputData] = useState<APIResponse>();
   const [isLoading, setIsLoading] = useState<Boolean>(false);
   //@submit handling
   function handleSubmit(e: FormEvent) {
      //#format input data
      e.preventDefault();
      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      const data: WebTextData = Object.fromEntries(formData) as WebTextData;
      //#call scrape and ai function
      async function fetchWebTextAPI() {
         setIsLoading(true);
         setOutputData(
            await fetch('/api/webTextAPI/', { headers: { Accept: 'application/json' }, method: 'POST', body: JSON.stringify(data) })
               .then((res) => res.json())
               .then((data: APIResponse) => {
                  console.log(data);
                  return data;
               })
         );
         setIsLoading(false);
      }
      fetchWebTextAPI();
   }
   return (
      <section className='grid h-full w-full place-items-center gap-6 p-4 relative'>
         {isLoading && <Loading />}
         {!outputData && <WebTextInput submitHandler={handleSubmit} />}
         {outputData && <WebTextOutput outputData={outputData} />}
      </section>
   );
}
