"use client"

import RequestQuota from "@/modules/quota-request";
import { Suspense, useEffect } from "react";
import { string } from "zod";

interface IPropsParams {
  tab?: string;
}

interface HomeProps {
  SearchParams: IPropsParams;
}

export const dynamic = "force-dynamic";


export default async function Admin({SearchParams}: HomeProps) {

  return (
      <Suspense fallback="loading">
        <RequestQuota />
      </Suspense>
  );
}
