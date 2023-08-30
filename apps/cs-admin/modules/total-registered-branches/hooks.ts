import { useRecoilValue } from "recoil";
import { KantorDummyData } from "./store";
import { TKantorResponse } from "./types";

export const useQuotaData = (): TKantorResponse => {
  const get = useRecoilValue(KantorDummyData);
  return {
    getKantorData: get,
  };
};
