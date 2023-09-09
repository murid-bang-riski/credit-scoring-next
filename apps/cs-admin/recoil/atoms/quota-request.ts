import { TQuotaRequestResponse } from "@/types";
import { atom } from "recoil";

export const QuotaRequestState = atom<TQuotaRequestResponse>({
  key: "quota-request",
  default: {
    code: 0,
    status: "",
    message: "",
    data: {
      total: {
        company: 0,
        quota: 0,
        cost: 0,
      },
      financial_graph_data: [
        {
          _id: "",
          request_number: "",
          feature: "",
          quantity: 0,
          status: "",
          requested_by: "",
          company: "",
          created_at: "2023-06-06T03:54:27.315Z",
          updated_at: "2023-06-06T03:54:27.315Z",
          __v: 0,
          feature_id: "",
          payment_status: "",
        },
      ],
    },
  },
});
