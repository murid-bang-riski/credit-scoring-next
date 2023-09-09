import { TSProcessResponse, TSUseProcess } from "types/dashboard";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "utils/types";
import { RequestProcessData } from "./requests";
import { useRecoilState } from "recoil";
import { RequestProcessState } from "recoil/atoms/report-process";

export const DataProcess = (): UseQueryResult<TSProcessResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["process-get"],
    queryFn: async () => await RequestProcessData(),
  });
};

export const useProcessData = (): TSUseProcess => {
  const [get, set] = useRecoilState(RequestProcessState);
  return {
    getProcess: get,
    setProcess: (val) => set(val),
  };
};
