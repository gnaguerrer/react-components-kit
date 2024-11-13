export interface IDraggableArea {
  children: JSX.Element;
  handleUpload?: (file: FileList) => void;
  accept?: string;
  multiple?: boolean;
}
