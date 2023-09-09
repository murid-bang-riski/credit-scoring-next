import { TQuotaRequestParams, TQuotaRequestResponse } from "@/types";
import { api } from "../../config/api";

export const getProcessResponse = async (): Promise<TQuotaRequestResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQ0NjY3Y2RjODAzODliYzE0OTU2YjAxIiwicm9sZV9pZCI6IjY0NDY3OTcwYjNlMzIwZGI2ZjgwNTIwMSIsImNvbXBhbnlfaWQiOiI1ZTk2Y2JlMjkyYjk3MzAwZmM5MDMxMjYiLCJpYXQiOjE2OTQwODczOTgsImV4cCI6MTY5NDE3Mzc5OH0.gKLUZRGnJGgeT_hrU1oGJxXNmWBJR2b9MNka-EEr_Cs`,
    },
    url: "/dashboard/admin",
  });
  return data;
};
