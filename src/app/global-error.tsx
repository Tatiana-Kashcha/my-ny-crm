'use client';

// import Button from '@/app/components/button';
import React from 'react';

export interface ClobalErrorProps {}

export default function ClobalError({}: ClobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Somethind globally went wrong</p>
          {/* <Button onClick={() => reset()}>Try again</Button> */}
        </div>
      </body>
    </html>
  );
}
