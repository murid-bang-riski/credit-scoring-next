import React, { useState, ChangeEvent, DragEvent } from 'react';
import { IconUpload } from 'components/icons';
import Image from 'next/image';
import { TDraggableField } from './types';

interface DraggableFileUploadProps {
  onFileUpload: (files: File[]) => void;
  maxFileSize: number;
  allowedFileTypes: string[];
  multiple: boolean;
  maxPreviewCount: number;
  customStyles?: React.CSSProperties;
}

export const DraggableFileUpload: React.FC<DraggableFileUploadProps> = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previewFile, setPreviewFile] = useState<string[]>([]);
  const [originalFile, setOriginalFile] = useState<File[]>([]);
  const baseURL = `${window.location.protocol}//${window.location.hostname}:8000`;

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const fileList = Array.from(event.dataTransfer.files);
    console.log(fileList);
    const updatedFiles =
      fileList.length > 0 ? [...fileList] : [...originalFile];
    const slicedFiles = updatedFiles.slice(0, 3);
    setFiles(slicedFiles);
    if (slicedFiles.length > 0) {
      const previewURLs = slicedFiles.map((image) =>
        URL.createObjectURL(image)
      );
      setPreviewFile(previewURLs);
    } else {
      setPreviewFile([]);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    const updatedFiles = fileList ? Array.from(fileList) : [...originalFile];

    // Validate file types
    const allowedFileTypes = ['.xls', '.xlsx'];
    const validFiles = updatedFiles.filter((file) => {
      const fileExtension = file.name
        .toLowerCase()
        .slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2);
      return allowedFileTypes.includes(`.${fileExtension}`);
    });

    setFiles(validFiles);

    if (validFiles.length > 0) {
      const previewURLs = validFiles.map((image) => URL.createObjectURL(image));
      setPreviewFile(previewURLs);
    } else {
      setPreviewFile([]);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'copy';
  };

  const handleRemovePreview = (index: number) => {
    const newPreviewFile = [...previewFile];
    newPreviewFile.splice(index, 1);
    setPreviewFile(newPreviewFile);
  };

  return (
    <div>
      <div className="w-full my-5 flex justify-center items-center">
        <div className="w-[80%] bg-gray-light h-auto shadow-xl rounded-[10px]">
          <div
            className="bg-white m-5 rounded-lg gap-2 py-2 justify-center shadow-lg border-2 border-dashed flex flex-col text-center w-auto"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="extraOutline p-4 bg-white w-max m-auto">
              <div
                className="file_upload p-5 relative rounded-lg"
                style={{ width: '450px' }}
              >
                <div className="flex justify-center mb-8">
                  <IconUpload size={50} color="#787878" />
                </div>
                <div className="input_field flex flex-col w-max mx-auto text-center">
                  <label>
                    <input
                      className="text-sm cursor-pointer w-36 hidden"
                      type="file"
                      multiple
                      onChange={handleFileChange}
                    />
                    <div className="text bg-primary-400 text-gray border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-yellow">
                      Select
                    </div>
                  </label>
                  <div className="title text-primary-400 uppercase">
                    or drop files here
                  </div>
                </div>
              </div>
              {previewFile.length > 0 && (
                <div className="flex items-center gap-5 justify-center">
                  {/* {console.log(files)} */}
                  {previewFile.map((image, index) => (
                    <div
                      className="flex flex-col items-center justify-center"
                      key={index}
                    >
                      <Image
                        src={image}
                        alt="Preview"
                        width={0}
                        height={0}
                        style={{ maxWidth: '80px', marginTop: '0.5rem' }}
                      />
                      <button
                        className="mt-1 text-sm text-white bg-[#DE3163] w-[150px] h-[35px]"
                        onClick={() => handleRemovePreview(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {previewFile.length === 0 && (
                <div>
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                      XLS, XLSX (Maximum size: 50MB)
                    </p>
                    <input
                      id="image-upload"
                      type="file"
                      accept=".xls, .xlsx"
                      onChange={handleFileChange}
                      style={{ display: 'none' }}
                      multiple
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
