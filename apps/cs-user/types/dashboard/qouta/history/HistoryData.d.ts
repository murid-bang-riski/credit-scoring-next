export type TSQoutaHistory = {
  _id: number;
  request_number: number;
  feature: string;
  quantity: number;
  status: string;
  transaction: string;
  requested_by: string;
  company: string;
  created_at: string;
  __v: number;
  updated_at: string;
  feature_id: string;
};

export type TSQoutaHistoryResponse = {
  code: number;
  status: string;
  message: string;
  meta: {
    total: number;
  };
  data: TSQoutaHistory[];
};

export type TUseQoutaHistory = {
  getQoutaHistory: TSQoutaHistoryResponse;
  setQoutaHistory: (val: TSQoutaHistoryResponse) => void;
};
