"use client";

import { HomeModule } from "modules";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

export default async function Admin() {
  return (
    <RecoilRoot>
      <Suspense fallback="loading">
        <HomeModule />
      </Suspense>
    </RecoilRoot>
  );
}