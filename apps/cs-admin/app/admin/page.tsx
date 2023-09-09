"use client";
import RequestQuota from "@/modules/quota-request";
import { Suspense } from "react";
interface IPropsParams {
  tab?: string;
}
interface HomeProps {
  SearchParams: IPropsParams;
}

export const dynamic = "force-dynamic";

// disable search params karena error build
// {SearchParams}: HomeProps
export default async function Admin() {
  return (
    <Suspense fallback="loading">
      <RequestQuota />
    </Suspense>
  );
}
