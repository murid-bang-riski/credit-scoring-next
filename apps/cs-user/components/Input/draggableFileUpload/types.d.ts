import { FieldValues, UseControllerProps } from 'react-hook-form';

export type TDraggableField<T extends FieldValues> = UseControllerProps<T> & {
  onFileUpload: (files: File[]) => void;
  maxFileSize: number;
  allowedFileTypes: string[];
  multiple: boolean;
  maxPreviewCount: number;
  customStyles?: React.CSSProperties;
  onFileUpload: (files: File[]) => void;
  maxFileSize: number;
  allowedFileTypes: string[];
  multiple: boolean;
  maxPreviewCount: number;
  customStyles?: React.CSSProperties;
};
