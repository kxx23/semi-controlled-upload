export interface UploadProps {
  value?: BizFile[];
  defaultValue?: BizFile[];
  onChange?: (files: BizFile[]) => void;
}

export interface BizFile {
  url: string;
  name?: string;
}
