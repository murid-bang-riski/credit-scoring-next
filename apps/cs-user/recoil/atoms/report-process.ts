import { atom } from "recoil";
import { TSProcessResponse } from "types/dashboard";

export const RequestProcessState = atom<TSProcessResponse>({
  key: "RequestProcess",
  default: {
    code: 0,
    status: "",
    message: "",
    data: [],
  },
});
