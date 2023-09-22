import { api } from "config";
import { TUserDataResponse } from "@cs-user/types";

// export const userDataRequest = async (): Promise<TUserDataResponse> => {
//   const { data } = await api.get(`/user/all`);
//   return data;
// };

export const userDataRequest = async (
  per_page: number,
  search: string,
  sort_by: string,
  order: string,
  page: number,
): Promise<TUserDataResponse> => {
  const { data } = await api.get(
    `/user/all?per_page=${per_page}&search=${search}&sort_by=${sort_by}&order=${order}&page=${page}`,
  );
  return data;
};
