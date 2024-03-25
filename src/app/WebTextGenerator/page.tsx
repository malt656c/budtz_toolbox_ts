import { Toaster } from '@/components/ui/toaster';
import WebTextWrapper from './components/webTextWrapper';

export const metadata = {
   title: 'Text Generator',
};

export default function Home() {
   return (
      <main className='flex h-fit flex-col items-center justify-start'>
         <WebTextWrapper></WebTextWrapper>
         <Toaster/>
      </main>
   );
}
