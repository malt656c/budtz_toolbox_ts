'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import FormInput from '@/components/composites/formInput';
import { Button } from '@/components/ui/button';

export default function WebTextInput({ submitHandler }: any) {
   return (
      <form onSubmit={submitHandler} className='grid gap-4 w-full max-w-[900px] relative'>
         <Card className='w-full'>
            <CardContent className='p-2'>
               <div className='grid gap-4 lg:grid-cols-2'>
                  <div className='grid gap-4 p-2'>
                     <FormInput forInput='linkedIn' label='link til LinkedIn profil'>
                        <Input name='linkedIn' id='linkedIn' type='text' placeholder='https://...' pattern='https?://.+' required />
                     </FormInput>
                     <FormInput forInput='linkedInSelector' label='selector'>
                        <Select name='linkedInSelector' defaultValue='[data-test-id="about-us__description"]'>
                           <SelectTrigger className='w-full'>
                              <SelectValue />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value='[data-test-id="about-us__description"]'>about-us</SelectItem>
                              <SelectItem value='[data-test-id="main-feed-activity-card__commentary"]'>posts</SelectItem>
                              <SelectItem value='[data-test-id="main-feed-activity-card__commentary"],[data-test-id="about-us__description"]'>about-us and posts</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormInput>
                  </div>
                  <div className='grid gap-4 p-2'>
                     <FormInput forInput='website' label='link til Website'>
                        <Input name='website' id='website' type='text' placeholder='https://eksempel.dk' pattern='https?://.+' required />
                     </FormInput>
                     <FormInput forInput='websiteSelector' label='website selector'>
                        <Select name='websiteSelector' defaultValue='main :is(p)'>
                           <SelectTrigger className='w-full'>
                              <SelectValue />
                           </SelectTrigger>
                           <SelectContent>
                              <SelectItem value='p'>all paragraphs</SelectItem>
                              <SelectItem value='main :is(p)'>paragraphs in main</SelectItem>
                              <SelectItem value='main :is(p,h1,h2,h3,h4,h5,h6)'>all text in main</SelectItem>
                              <SelectItem value='main :is(h1,h2,h3,h4,h5,h6)'>all headlines in main</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormInput>
                  </div>
               </div>
               <div className='grid gap-4 p-2'>
                  <FormInput forInput='textInput' label='beskrivelse af den tekst du vil have'>
                     <Textarea name='textInput' id='textInput' placeholder='skriv mig en tekst til... teksten skal indeholde...' />
                  </FormInput>

                  <FormInput forInput='modelSelector' label='Model'>
                     <Select name='modelSelector' defaultValue='gpt-3.5-turbo-0125'>
                        <SelectTrigger className='w-full h-full'>
                           <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value='gpt-3.5-turbo-0125'>gpt-3.5-turbo-0125</SelectItem>
                           <SelectItem value='gpt-4-0125-preview'>gpt-4-0125-preview</SelectItem>
                           <SelectItem value='gpt-4-1106-preview'>gpt-4-1106-preview</SelectItem>
                           <SelectItem value='gpt-4-32k-0613'>gpt-4-32k-0613</SelectItem>
                           <SelectItem value='gpt-4'>gpt-4</SelectItem>
                        </SelectContent>
                     </Select>
                  </FormInput>
               </div>
            </CardContent>
         </Card>
         <Button className='w-fit justify-self-center text-accent-foreground'>Submit</Button>
      </form>
   );
}
