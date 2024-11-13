# DraggableArea Component

The `DraggableArea` component provides a drag-and-drop area for users to easily upload files in a **React** application. It also includes a hidden file input field that activates when the drop area is clicked.

## Usage

Below is an example of how to use the `DraggableArea` component:

```tsx
import React from "react";
import { DraggableArea } from "./path-to-your-component";

const MyComponent = () => {
  const handleFileUpload = (files: FileList) => {
    console.log("Uploaded files:", files);
  };

  return (
    <DraggableArea handleUpload={handleFileUpload} accept=".png,.jpg" multiple>
      <div className="border-dashed border-2 border-gray-300 p-4">
        Drag and drop your files here or click to select
      </div>
    </DraggableArea>
  );
};

export default MyComponent;
```

## Props

The `DragAndDrop` component accepts the following props:

| Prop           | Type        | Description                                                     |
| -------------- | ----------- | --------------------------------------------------------------- |
| `handleUpload` | `function`  | Function called when files are uploaded, receives a `FileList`. |
| `accept`       | `string`    | Specifies the allowed file types (e.g., `.png,.jpg`).           |
| `multiple`     | `boolean`   | Allows multiple files to be selected at once.                   |
| `children`     | `ReactNode` | Content to display inside the drop area.                        |
