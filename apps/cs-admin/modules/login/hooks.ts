import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TLoginPayload, TLoginResponse } from "./types";
import { loginRequest } from "./api";
import TokenService from "../../services/token";
import { TMetaErrorResponse } from "@utils";

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["login-cs"],
    mutationFn: async (payload) => await loginRequest(payload),
    onSuccess: (data) => {
      TokenService.saveToken(data?.data?.token);
    },
  });
