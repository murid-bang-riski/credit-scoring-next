export type TQuotaRequestParams = {
  date_from?: string;
  date_to?: string;
  feature?: string;
  per_page?: string;
  page?: string;
};

export type TQuotaRequestItem = {
  _id: string;
  request_number: string;
  feature: string;
  quantity: number;
  status: string;
  requested_by: string;
  company: string;
  created_at: string;
  updated_at: string;
  __v: number;
  feature_id: string;
  payment_status: string;
};

export type TQuotaRequestResponse = {
  code: number;
  status: string;
  message: string;
  data: {
    total: {
      company: number;
      quota: number;
      cost: number;
    };
    financial_graph_data: TQuotaRequestItem[];
  };
};

export type TUseQuotaRequest = {
  getQuotaRequestData: TQuotaRequestResponse;
  setQuotaRequestData: (val: TQuotaRequestResponse) => void;
};
