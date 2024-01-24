'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './button';

export default function AddCompanyButtonCopy() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company page
    </Button>
  );
}
