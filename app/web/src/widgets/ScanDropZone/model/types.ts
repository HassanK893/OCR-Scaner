import { ACCEPTED_MIME } from "./constans";

export type AcceptedMime = (typeof ACCEPTED_MIME)[number];

export interface ScanDropZoneProps {
  onFileSelected?: (file: File) => void;
}
