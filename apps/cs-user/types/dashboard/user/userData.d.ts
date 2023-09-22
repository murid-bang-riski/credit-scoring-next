import { TMetaResponseSingle } from "@cs-user/utils";

export type TUploadData = {
  name: string;
  control: Control;
  required: boolean;
  accepted: string;
  label: string;
  notif: string;
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  status: "error" | "none" | "success" | "warning" | undefined;
  image: string;
};

export type TUserDataResponse = {
  code: number;
  status: string;
  message: string;
  meta: {
    total: number;
  };
  data?: TUserDataItem[];
};

export type TUserDataItem = {
  _id: string;
  name: string;
  nik: string;
  company: string;
  created_at: string;
  updated_at: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
  completed_document: number;
};
