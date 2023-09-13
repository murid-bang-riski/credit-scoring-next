"use client";

import RequestQuota from "@/modules/quota-request";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
        
export default async function Admin() {
  return (
    <Suspense fallback="loading">
      <RequestQuota />
    </Suspense>
  );
}
