"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingSpinner } from "components/loadingSpinner";
import { Suspense, ReactNode } from "react";
import { RecoilEnv, RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export const Provider = ({ children }: { children: ReactNode }) => {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <RecoilRoot>
          <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        </RecoilRoot>
      </SessionProvider>
    </QueryClientProvider>
  );
};
