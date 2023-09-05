"use client";

import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { TLoginPayload, TLoginResponse } from "../../types/authentication";
import { TMetaErrorResponse, TMetaItem } from "@cs-user/utils";
import { loginRequest } from "./request";

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  null
> => {
  return useMutation({
    mutationKey: ["login-cs-user"],
    mutationFn: (params) => loginRequest(params),
  });
};
