import { TQuotaRequestParams, TQuotaRequestResponse } from "@/types";
import { api } from "../../services/api";

export const getProcessResponse = async (
  params: TQuotaRequestParams,
): Promise<TQuotaRequestResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/quotas/superior/request/",
    params,
  });
  return data;
};
