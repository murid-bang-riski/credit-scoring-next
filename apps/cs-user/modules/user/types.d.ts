import { TMetaResponse } from '@cs-user/utils';
import { ReactNode } from 'react';
import { Control } from 'react-hook-form';

export type TDataUploader = {
  name: string;
  hasLabel: boolean;
  control: Control;
  required: boolean;
  accept: string;
  label: string;
};

export interface TtoolTip {
  children: ReactNode;
  toolTip: string;
  className?: string;
}

export type TUserItem = {
  _id: string;
  name: string;
  nik: string;
  admin_id: string;
  createdAt: string;
  updatedAt: string;
  file?: string;
  completed_document: number;
  __v: number;
};

export type TUserParams = {
  date_from?: string;
  page?: string;
  per_page?: string;
  search?: string;
};

export type TUserResponse = TMetaResponse<TUserItem>;

export type TUserQueryResponse = {
  getUserQuery: string;
  setUserQuery: (val: string) => void;
};

export type TDataUploaderResponse = { getUploadData: TDataUploader[] };

export type TUploadQueryResponse = {
  getUploadQuery: string;
  setUploadQuery: (val: string) => void;
};

export type StatusReturnTypeCategory = {
  setDataCategory: (val: string) => void;
  getDataCategory: string;
};

export type ReturnTypesDataIdentity = {
  setDataIdentity: (val: boolean) => void;
  getDataIdentity: boolean;
};

export type ReturnTypesDataCharacter = {
  setDataCharacter: (val: boolean) => void;
  getDataCharacter: boolean;
};

export type ReturnTypesDataCapabiity = {
  setDataCapability: (val: boolean) => void;
  getDataCapability: boolean;
};
