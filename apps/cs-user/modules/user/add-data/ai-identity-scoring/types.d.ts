export type TUploadData = {
  name: string;
  control: Control;
  required: boolean;
  accepted: string;
  label: string;
  notif: string;
  message?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  status: 'error' | 'none' | 'success' | 'warning' | undefined;
  image: string;
};
