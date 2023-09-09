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

export const RequestCustomerData = (): UseQueryResult<TCostumerReportData, TMetaErrorResponse> =>
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

export const RequestsReport = (): UseQueryResult<TSRequestResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["report-get"],
    queryFn: async () => await RequestsReportData(),
  });

export const useRequestData = (): TUseRequestReport => {
  const [get, set] = useRecoilState(RequestsReportState);
  return {
    getRequestReport: get,
    setRequestReport: (val) => set(val),
  };
};
