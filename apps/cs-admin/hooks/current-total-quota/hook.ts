import { CurrentTotalQuotaState } from "@/recoil/atoms";
import { TCurrentTotalQuotaResponse } from "@/types";
import { useRecoilValue } from "recoil";

export const useCuurenTotalQuota = (): TCurrentTotalQuotaResponse => {
  const get = useRecoilValue(CurrentTotalQuotaState);
  return {
    getCurrentTotalQuotaData: get,
  };
};
