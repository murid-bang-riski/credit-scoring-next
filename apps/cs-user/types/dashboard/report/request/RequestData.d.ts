export type TSUserRequest = {
  _id: string;
  nik: number;
  name: string;
  date_requested: string;
  result: string;
  document: string;
};

export type TSRequestReport = {
  _id: string;
  request_number: number;
  feature: string;
  finished_at: string;
  requested_at: string;
  user_requests: TSUserRequest[];
  total_user: number;
};

export type TSRequestResponse = {
  code: number;
  status: string;
  message: string;
  meta: {
    total: number;
  };
  data: TSRequestAI[];
};

export type TUseRequestReport = {
  getRequestReport: TSRequestResponse;
  setRequestReport: (val: TSRequestResponse) => void;
};
