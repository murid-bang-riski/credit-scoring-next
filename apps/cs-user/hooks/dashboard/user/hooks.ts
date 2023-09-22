import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TUserDataResponse } from "@cs-user/types";
import { TMetaErrorResponse } from "@cs-user/utils";
import { userDataRequest } from "./request";

// export const useGetUserData = (): UseQueryResult<TUserDataResponse, TMetaErrorResponse> =>
//   useQuery({
//     queryKey: ["user-get"],
//     queryFn: async () => await userDataRequest(),
//   });

export const useGetUserData = (
  per_page: number,
  search: string,
  sort_by: string,
  order: string,
  page: number,
): UseQueryResult<TUserDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["process-get", per_page, search, sort_by, order, page],
    queryFn: async () => await userDataRequest(per_page, search, sort_by, order, page),
  });
};
