import { TotalExpenditureGostsState } from "@/recoil/atoms";
import { TTotalExpenditureCostsResponse } from "@/types";
import { useRecoilValue } from "recoil";

export const useTotalExpenditureCosts = (): TTotalExpenditureCostsResponse => {
  const get = useRecoilValue(TotalExpenditureGostsState);
  return {
    getTotalExpenditureCostsData: get,
  };
};
