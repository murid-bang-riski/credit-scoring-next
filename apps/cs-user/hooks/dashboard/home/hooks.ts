"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { THomeDataResponse, TUseHomeData } from "@cs-user/types";
import { TMetaErrorResponse } from "@cs-user/utils";
import { homeDataRequest } from "./requests";
import { useRecoilState } from "recoil";
import { HomeDataState } from "recoil/atoms/home";

export const useGetHomeData = (): UseQueryResult<THomeDataResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["home-get"],
    queryFn: async () => await homeDataRequest(),
  });

export const useArticleData = (): TUseHomeData => {
  const [get, set] = useRecoilState(HomeDataState);
  return {
    getArticleData: get,
    setArticleData: (val) => set(val),
  };
};
