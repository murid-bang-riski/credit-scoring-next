"use client";

import RequestQuota from "@/modules/quota-request";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

export default async function Admin() {
  return (
    <RecoilRoot>
      <Suspense fallback="loading">
        <RequestQuota />
      </Suspense>
    </RecoilRoot>
  );
}
