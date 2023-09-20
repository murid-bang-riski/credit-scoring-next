import { api } from "config";
import { TCostumerReportData, TSRequestResponse } from "@cs-user/types";

export const CustomerRequestData = async (): Promise<TCostumerReportData> => {
  const { data } = await api.get(`/report/customer-report`);
  return data;
};

export const RequestsReportData = async (
  page: number,
  per_page: number,
  search?: string,
): Promise<TSRequestResponse> => {
  const { data } = await api.get(
    `/report/request-report?per_page=${per_page}&search=${search}$page=${page}`,
  );
  return data;
};
