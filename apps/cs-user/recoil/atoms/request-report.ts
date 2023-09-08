import { atom } from "recoil";
import { TSRequestResponse } from "types/dashboard";
export const RequestsReportState = atom<TSRequestResponse>({
  key: "RequestsReport",
  default: {
    code: 0,
    status: "",
    meta: { total: 0 },
    message: "",
    data: [],
  },
});
