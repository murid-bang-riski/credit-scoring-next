import { atom } from "recoil";
import { THomeDataResponse } from "@cs-user/types";

export const HomeDataState = atom<THomeDataResponse>({
  key: "HomeData",
  default: {
    code: 0,
    status: "",
    message: "",
    data: {
      feature_history: [],
      request_history_graph_data: [],
      score_history: [],
      user_age: [],
      user_location: [],
    },
  },
});
