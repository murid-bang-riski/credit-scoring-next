import { api } from "config";
import { TSProcessResponse } from "@cs-user/types";

export const RequestProcessData = async (
  per_page: number,
  search: string,
  sort_by: string,
  order: string,
  page: number,
): Promise<TSProcessResponse> => {
  const { data } = await api.get(
    `/requests/today/process?per_page=${per_page}&search=${search}&sort_by=${sort_by}&order=${order}&page=${page}`,
  );
  return data;
};
