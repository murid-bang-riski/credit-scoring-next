import { atom } from "recoil";
import { TCostumerReportData } from "types/dashboard";
export const RequestCustomerState = atom<TCostumerReportData>({
  key: "RequestCustomer",
  default: {
    code: 0,
    status: "",
    meta: { total: 0 },
    message: "",
    data: [],
  },
});
