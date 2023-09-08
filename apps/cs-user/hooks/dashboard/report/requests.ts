import { api } from "config";
import { TCostumerReportData, TSRequestResponse } from "@cs-user/types";

export const CustomerRequestData = async (): Promise<TCostumerReportData> => {
  const { data } = await api.get(`/report/customer-report`);
  return data;
};

export const RequestsReportData = async (): Promise<TSRequestResponse> => {
  const { data } = await api.get(`/report/request-report`);
  return data;
};
