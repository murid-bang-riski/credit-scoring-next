"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { QuotaRequestState } from "@/recoil/atoms";
import { quotaRequestRequest } from "./request";
import { TMetaErrorResponse } from "@utils";
import { TQuotaRequestResponse, TUseQuotaRequest } from "@/types";

export const useGetQuotaRequest = (): UseQueryResult<TQuotaRequestResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quota-request"],
    queryFn: async () => await quotaRequestRequest(),
  });

export const useQuotaRequestData = (): TUseQuotaRequest => {
  const [get, set] = useRecoilState(QuotaRequestState);
  return {
    getQuotaRequestData: get,
    setQuotaRequestData: (val) => set(val),
  };
};
