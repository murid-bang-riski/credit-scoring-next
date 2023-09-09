import { TMetaResponseSingle } from "@cs-user/utils/types";

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TLoginData = {
  id: string;
  token: string;
} & User;

export type TLoginResponse = TLoginData;
