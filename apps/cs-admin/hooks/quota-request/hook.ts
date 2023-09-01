import { QuotaRequestState } from "@/recoil/atoms";
import { TQuotaRequestResponse } from "@/types";
import { useRecoilValue } from "recoil";

export const useQuotaRequest = (): TQuotaRequestResponse => {
  const get = useRecoilValue(QuotaRequestState);
  return {
    getQuotaRequestData: get,
  };
};
