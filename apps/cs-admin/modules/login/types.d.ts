import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginData = {
  token: string;
};

export type TLoginResponse = TMetaResponseSingle<TLoginData>;
