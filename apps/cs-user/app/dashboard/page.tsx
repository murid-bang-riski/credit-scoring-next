"use client";
import { HomeModule } from "modules";
import { Suspense } from "react";
import { Loading } from "./loading";

export default async function Admin() {
  return (
    <Suspense fallback={<Loading />}>
      <HomeModule />
    </Suspense>
  );
}
