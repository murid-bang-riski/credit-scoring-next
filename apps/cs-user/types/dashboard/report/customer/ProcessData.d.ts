export type TSRequest = {
  id: string;
  request_number: string;
  feature_name: string;
  requested_at: string;
  result: string;
  document: string;
};

export type TSCustomerReport = {
  _id: string;
  name: string;
  nik: string;
  result: string;
  requests: TSRequest[];
};

export type TCostumerReportData = {
  code: number;
  status: string;
  message: string;
  meta: {
    total: number;
  };
  data: TSCustomerReport[];
};

export type TUseCustomerReport = {
  getCustomerReport: TCostumerReportData;
  setCustomerReport: (val: TCostumerReportData) => void;
};
