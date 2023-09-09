import { api } from "config";
import { TLoginPayload, TLoginResponse } from "../../types/authentication";
import axios from "axios";

export const loginRequest = async (payload?: TLoginPayload): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>("/auth/signin", payload);
  return data;
};
