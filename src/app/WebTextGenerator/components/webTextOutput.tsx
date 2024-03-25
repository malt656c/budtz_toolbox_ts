'use client';
import { APIResponse } from '@/app/api/webTextAPI/route';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Copy, Info } from 'lucide-react';

type props = {
   outputData?: APIResponse;
};

export default function WebTextOutput({ outputData }: props) {
   const aiResponse = outputData?.content;
   const info = Object.entries({
      ...outputData?.info,
      ...outputData?.userInput,
   });
   const { toast } = useToast();
   function InformationTable() {
      return (
         <Table className='w-fit'>
            <TableCaption>data fra openAI</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead>Key</TableHead>
                  <TableHead>Value</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {info.map((i) => {
                  return (
                     <TableRow key={i[0]}>
                        <TableCell className='p-2'>{i[0]}</TableCell>
                        <TableCell className='p-2 break-all'>{i[1] as string}</TableCell>
                     </TableRow>
                  );
               })}
            </TableBody>
         </Table>
      );
   }
   function OutputDialog() {
      return (
         <Dialog>
            <DialogTrigger asChild>
               <Info className='absolute top-4 right-4 cursor-pointer' />
            </DialogTrigger>
            <DialogContent className='grid gap-4 max-w-full w-max'>
               <DialogHeader>
                  <DialogTitle>info</DialogTitle>
                  <DialogDescription>udvidet info omkring response</DialogDescription>
               </DialogHeader>
               <InformationTable />
            </DialogContent>
         </Dialog>
      );
   }
   return (
      <Card className='max-w-[85ch] relative'>
         <CardHeader>
            <CardTitle>Resultat</CardTitle>
            <CardDescription>den AI genererede tekst</CardDescription>
         </CardHeader>
         <CardContent>
            <p>{aiResponse}</p>
         </CardContent>
         <OutputDialog />
         <Copy
            onClick={() => {
               navigator.clipboard.writeText(aiResponse as string);
               toast({
                  title:'Tekst Kopiret',
                  description: 'Tekst kopiret til clipboard',
               });
            }}
            className='absolute top-4 right-12 cursor-pointer'
         />
      </Card>
   );
}
