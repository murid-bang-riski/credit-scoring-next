import { TotalRegisteredBranchesState } from "@/recoil/atoms";
import { TTotalRegisteredBranchesResponse } from "@/types";
import { useRecoilValue } from "recoil";

export const useTotalRegisteredBranches = (): TTotalRegisteredBranchesResponse => {
  const get = useRecoilValue(TotalRegisteredBranchesState);
  return {
    getTotalRegisteredBranchesData: get,
  };
};
