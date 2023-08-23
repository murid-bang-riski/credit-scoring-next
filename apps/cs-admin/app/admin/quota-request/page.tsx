'use client';

import RequestQuota from 'apps/cs-admin/modules/quota-request';
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

export default async function QuotaRequest() {
  return (
    <RecoilRoot>
      <Suspense fallback="loading">
        <RequestQuota />
      </Suspense>
    </RecoilRoot>
  );
}
