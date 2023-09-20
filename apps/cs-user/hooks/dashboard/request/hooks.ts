import { TSProcessResponse, TSUseProcess } from "types/dashboard";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "utils/types";
import { RequestProcessData } from "./requests";
import { useRecoilState } from "recoil";
import { RequestProcessState } from "recoil/atoms/report-process";

export const DataProcess = (
  per_page: number,
  search: string,
  sort_by: string,
  order: string,
  page: number,
): UseQueryResult<TSProcessResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["process-get", per_page, search, sort_by, order, page],
    queryFn: async () => await RequestProcessData(per_page, search, sort_by, order, page),
  });
};

export const useProcessData = (): TSUseProcess => {
  const [get, set] = useRecoilState(RequestProcessState);
  return {
    getProcess: get,
    setProcess: (val) => set(val),
  };
};
