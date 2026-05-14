import { ACCEPTED_MIME, MAX_SIZE_BYTES, MAX_SIZE_MB } from "../model/constans";
import type { AcceptedMime } from "../model/types";

export type ValidationResult =
  | { valid: true }
  | { valid: false; error: string };

export const isAcceptedMime = (type: string): type is AcceptedMime =>
  (ACCEPTED_MIME as readonly string[]).includes(type);

export const validateFile = (file: File): ValidationResult => {
  if (!isAcceptedMime(file.type)) {
    return { valid: false, error: "Поддерживаются только PNG, JPG, PDF" };
  }
  if (file.size > MAX_SIZE_BYTES) {
    return { valid: false, error: `Файл больше ${MAX_SIZE_MB} МБ` };
  }
  return { valid: true };
};
