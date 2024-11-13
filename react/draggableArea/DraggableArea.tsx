import React, { ChangeEvent, DragEvent, useRef } from "react";
import { IDraggableArea } from "./types";

export const DraggableArea = ({
  children,
  handleUpload,
  accept,
  multiple,
}: IDraggableArea) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files) {
      handleUpload?.(event.dataTransfer.files);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragEnter = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      handleUpload?.(event.target.files);
    }
  };

  return (
    <div
      className="w-full"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onClick={handleClick}
    >
      <input
        type="file"
        multiple={multiple}
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept={accept}
      />
      {children}
    </div>
  );
};
