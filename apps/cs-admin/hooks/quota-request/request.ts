import { api } from "@/config/api";
import { TQuotaRequestResponse } from "@/types";

export const quotaRequestRequest = async (): Promise<TQuotaRequestResponse> => {
  const { data } = await api.get(`/dashboard/admin`);
  return data;
};
