export default function Loading() {
   return (
      <section className="fixed inset-0 bg-background grid place-items-center z-10">
         <div className='h-fit w-fit grid place-items-center gap-4'>
            <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='fill-primary-foreground h-24 w-24 animate-loading-icon'>
               <path d='m239.87,40.3c-22.27.29-44.46,1.03-66.31,5.6-19.16,4.01-37.87,9.63-54.2,20.84-3.79,2.6-7.06,7.1-8.7,11.43-2.58,6.81-3.58,14.22-5.22,21.39-1.44,6.32-3.86,7.17-8.58,2.78-7.62-7.08-15.54-13.91-22.61-21.51-6.4-6.88-5.37-12.89,1.77-19.18,9.86-8.69,20.91-15.34,33.23-19.93,30.25-11.27,61.31-19.35,93.45-22.55,16.79-1.67,33.7-2.41,50.58-3,19.59-.69,38.49,3.31,56.46,10.9,9.85,4.16,17.49,3.41,25.36-4.61,11.52-11.73,29.07-6.8,31.32,9.32,2.22,15.96,9.99,27.84,20.2,39.27,8.73,9.78,15.33,21.04,17.84,34.2,2.46,12.9-.11,25.01-5.43,36.92-11.29,25.29-31.24,42.96-52.14,59.62-18.97,15.12-38.64,29.35-58,43.98-.68.52-1.41.98-2.07,1.52-5.86,4.86-5.73,6.46,1.26,9.59,25.42,11.4,50.91,22.66,76.34,34.04,7.67,3.43,15.21,2.95,22.93.12,11.55-4.23,23.08-8.59,34.87-12.07,4.85-1.44,10.47-1.6,15.49-.78,4.84.79,5.61,4.12,2.18,7.82-2.84,3.06-6.29,5.8-9.94,7.82-9.27,5.13-18.89,9.61-28.19,14.7-6.75,3.69-6.95,5.82-3.02,12.68,4.85,8.44,9.81,16.84,14.16,25.54,6.14,12.31,4.26,24.68-1.29,36.65-8.86,19.11-21.36,35.62-35.63,51.09-16,17.34-33.88,32.29-53.46,45.22-16.14,10.67-33.69,17.61-53.53,16.08-21.12-1.63-39.21-9.05-48.72-29.51-8-17.21-5.39-34.26,4.43-49.93,10.33-16.49,23.78-30.4,38.84-42.67,12.58-10.25,25.23-20.42,38.04-30.37,11.34-8.81,23.06-17.11,34.34-25.99,2.88-2.27,4.74-5.85,7.06-8.82-3.66-2.88-6.9-7.05-11.06-8.38-8.75-2.81-17.92-4.4-27.01-6.03-14.12-2.53-28.37-4.41-42.47-7.04-19.49-3.64-28.27,5.17-35.85,20.91-10.68,22.17-17.48,45.64-20.12,70.17-.74,6.91-.72,13.95-.44,20.9.33,8.01-4.33,13.76-12.4,13.49-5.41-.18-10.99-.71-16.13-2.27-9.34-2.84-11.29-8.59-7.06-17.45,5.39-11.26,11.23-22.36,15.75-33.97,6.87-17.68,12.99-35.65,18.99-53.65,6.27-18.8,10.21-38.46,20.44-55.77,7.66-12.96,16.35-25.34,23.39-38.62,11.86-22.35,22.82-45.18,34.07-67.85,4.87-9.8,9.56-19.69,14.3-29.56,6.29-13.11,13.28-25.94,18.6-39.43,5.19-13.18,3.58-16.43-8.23-22.53-12.41-6.42-25.21-10.02-39.27-9.8-9.54.15-19.09-.84-28.64-1.32Zm32,424.02c19.5-.52,36.38-7.26,52.24-16,22.15-12.19,41.46-28.01,57.29-48.13,14.35-18.24,15.24-45.54,3.83-61.91-9.28-13.31-12.79-14.99-27.96-8.63-21.9,9.18-41.81,21.82-59.25,37.96-9.49,8.78-18.45,18.23-26.94,28-11.67,13.44-20.51,28.57-24.26,46.29-2.26,10.7,2.1,18.32,12.67,20.94,4.25,1.06,8.77,1.07,12.37,1.47Zm107.77-345.88c.37-16.11-4.2-29.47-14.79-40.6-6.07-6.37-9.6-7.22-15.48-.91-11.72,12.57-23.27,25.41-33.68,39.07-16.08,21.11-25.35,46.02-36.52,69.82-3.85,8.2-8.1,16.31-10.81,24.89-1.51,4.79-2.16,11.79.32,15.38,2.88,4.17,9.38,1.21,13.63-1.18,13.38-7.54,26.73-15.18,39.69-23.41,15.31-9.72,27.44-23.16,38.78-37.02,11.02-13.47,19.86-28.37,18.87-46.05Z' />
            </svg>
            <article className='grid place-items-center select-none'>
               <span className='text-lg'>Henter data...</span>
               <span className='text-sm text-muted-foreground'>det kan tage lidt tid. Hent en kop kaffe eller drik noget vand</span>
            </article>
         </div>
      </section>
   );
}
