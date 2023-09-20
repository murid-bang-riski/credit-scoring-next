export type TSRequestProcess = {
  _id: string;
  company: string;
  feature: string;
  result: string;
  status: string;
  request_number: number;
  problem: string;
  requested_at: string;
  finished_at: string;
  __v: number;
  name: string;
  nik: number;
};

export type MetaData = {
  total: number;
  page_size: number;
  total_pages: number;
  page: number;
};

export type TSProcessResponse = {
  code: number;
  status: string;
  message: string;
  meta: MetaData;
  data: TSRequestProcess[];
};

export type TSUseProcess = {
  getProcess: TSProcessResponse;
  setProcess: (val: TSProcessResponse) => void;
};
