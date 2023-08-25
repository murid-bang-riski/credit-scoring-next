'use client';

import { HomeModule } from 'modules';
import { Suspense } from 'react';

export default async function Admin() {
  return (
    <Suspense fallback="loading">
      <HomeModule />
    </Suspense>
  );
}
