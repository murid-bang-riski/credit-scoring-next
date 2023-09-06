// import { TMetaResponse } from "@cs-user/utils";

export type TFeatureHistoryItem = { _id: string; total_data: number; name: string };

export type TRequestHistoryGraphDataItem = {
  _id: string;
  company: string;
  requested_at: Date;
  finished_at: Date;
  __v: number;
  feature_id: string;
  feature_name: string;
  company_id: string;
};

export type TScoreHistoryItem = {
  _id: string;
  finished_at: Date;
  feature_id: string;
  feature_name: string;
  score: string;
};

export type TUserAge = {
  _id: string;
  finished_at: Date;
  feature_id: string;
  feature_name: string;
  age: number;
};

export type TUserLocation = { _id: string; feature_id: string; feature_name: string; city: string };

export type THomeDataResponse = {
  code: number;
  status: string;
  message: string;
  data: {
    feature_history: TFeatureHistoryItem[];
    request_history_graph_data: TRequestHistoryGraphDataItem[];
    score_history: TScoreHistoryItem[];
    user_age: TUserAge[];
    user_location: TUserLocation[];
  };
};

export type TUseHomeData = {
  getArticleData: THomeDataResponse;
  setArticleData: (val: THomeDataResponse) => void;
};
