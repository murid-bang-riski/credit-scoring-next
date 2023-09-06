"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
  <QueryClientProvider client={queryClient}>
    <SessionProvider>
    {children}
    </SessionProvider>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
