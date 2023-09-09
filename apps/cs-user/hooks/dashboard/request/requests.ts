import { api } from "config";
import { TSProcessResponse } from "@cs-user/types";

export const RequestProcessData = async (): Promise<TSProcessResponse> => {
  const { data } = await api.get(`/requests/today/process`);
  return data;
};
