import RequestQuota from "@/modules/quota-request";
import { Suspense } from "react";

export default async function Admin() {
  return (
      <Suspense fallback="loading">
        <RequestQuota />
      </Suspense>
  );
}
