import { atom } from "recoil";
import { TSQoutaHistoryResponse } from "@cs-user/types";

export const QoutaHistoryState = atom<TSQoutaHistoryResponse>({
  key: "QoutaHistory",
  default: {
    code: 0,
    status: "",
    message: "",
    meta: {
      total: 0,
    },
    data: [],
  },
});
