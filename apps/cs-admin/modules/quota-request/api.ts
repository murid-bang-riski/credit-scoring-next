import { TQuotaParams, TQuotaResponse } from "./types";
import api from "../../services/api";

export const getProcessResponse = async (params: TQuotaParams): Promise<TQuotaResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/quotas/superior/request/",
    params,
  });
  return data;
};
