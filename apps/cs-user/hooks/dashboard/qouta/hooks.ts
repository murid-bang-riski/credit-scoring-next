import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TSQoutaHistoryResponse, TUseQoutaHistory } from "@cs-user/types";
import { TMetaErrorResponse } from "@cs-user/utils";
import { QoutaHistoryData } from "./request";
import { useRecoilState } from "recoil";
import { QoutaHistoryState } from "recoil/atoms/qouta-history";

export const QuotaHistory = (
  per_page: number,
  page: number,
  search: string,
  date_from: string,
  date_to: string,
): UseQueryResult<TSQoutaHistoryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["qouta-get"],
    queryFn: async () => await QoutaHistoryData(per_page, page, search, date_from, date_to),
  });

export const useQoutaData = (): TUseQoutaHistory => {
  const [get, set] = useRecoilState(QoutaHistoryState);
  return {
    getQoutaHistory: get,
    setQoutaHistory: (val) => set(val),
  };
};
