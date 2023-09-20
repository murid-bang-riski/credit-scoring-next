import { atom } from "recoil";
import { TSProcessResponse } from "types/dashboard";

export const RequestProcessState = atom<TSProcessResponse>({
  key: "RequestProcess",
  default: {
    code: 0,
    status: "",
    message: "",
    meta: {
      total: 0,
      page_size: 0,
      total_pages: 0,
      page: 0,
    },
    data: [],
  },
});
