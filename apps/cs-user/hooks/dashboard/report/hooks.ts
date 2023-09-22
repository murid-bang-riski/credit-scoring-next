"use client";

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  TCostumerReportData,
  TUseCustomerReport,
  TUseRequestReport,
  TSRequestResponse,
} from "@cs-user/types";
import { TMetaErrorResponse } from "@cs-user/utils";
import { CustomerRequestData, RequestsReportData } from "./requests";
import { useRecoilState } from "recoil";
import { RequestCustomerState } from "recoil/atoms/costumer-report";
import { RequestsReportState } from "recoil/atoms/request-report";

export const RequestCustomerData = (
  page?: number,
  limit?: number,
  search?: string,
  sort?: string,
  per_page?: number,
  order?: string,
  sort_by?: string,
  date_from?: string,
  date_to?: string,
): UseQueryResult<TCostumerReportData, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["customer-get"],
    queryFn: async () => await CustomerRequestData(),
  });

export const useCustomerData = (): TUseCustomerReport => {
  const [get, set] = useRecoilState(RequestCustomerState);
  return {
    getCustomerReport: get,
    setCustomerReport: (val) => set(val),
  };
};

export const RequestsReport = (
  page?: number,
  per_page?: number,
  search?: string,
): UseQueryResult<TSRequestResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["report-get"],
    queryFn: async () => await RequestsReportData(page, per_page, search),
  });

export const useRequestData = (): TUseRequestReport => {
  const [get, set] = useRecoilState(RequestsReportState);
  return {
    getRequestReport: get,
    setRequestReport: (val) => set(val),
  };
};
