import { useRecoilValue } from "recoil";
import { QuotaDummyData } from "./store";
import { TQuotaResponse } from "./types";

export const useQuotaData = (): TQuotaResponse => {
  const get = useRecoilValue(QuotaDummyData);
  return {
    getQuotaData: get,
  };
};
