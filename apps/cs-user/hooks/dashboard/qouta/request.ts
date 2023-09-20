import { api } from "config";
import { TSQoutaHistoryResponse } from "types/dashboard";

export const QoutaHistoryData = async (
  per_page: number,
  page: number,
  search: string,
  date_from: string,
  date_to: string,
): Promise<TSQoutaHistoryResponse> => {
  const { data } = await api.get(
    `/quotas/request?per_page=${per_page}&search=${search}&date_from=${date_from}&date_to=${date_to}&page=${page}}`,
  );
  return data;
};
