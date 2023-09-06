import {api} from "../../services/api";
import { TLoginPayload, TLoginResponse } from "./types";

export const loginRequest = async (payload: TLoginPayload): Promise<TLoginResponse> => {
  const { data } = await api.post("/auth/signin", payload);
  return data;
};
