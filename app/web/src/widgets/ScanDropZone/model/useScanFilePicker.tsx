// hooks/useScanFilePicker.tsx
import {
  useCallback,
  useRef,
  useState,
  type DragEvent,
  type ChangeEvent,
  type ReactNode,
} from "react";
import { Snackbar } from "@vkontakte/vkui";
import { Icon20Cancel } from "@vkontakte/icons";
import { validateFile } from "../helpers/DragDropHelpers";

interface UseScanFilePickerOptions {
  onFileSelected?: (file: File) => void;
}

export const useScanFilePicker = ({
  onFileSelected,
}: UseScanFilePickerOptions) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [snackbar, setSnackbar] = useState<ReactNode | null>(null);

  const showError = useCallback((message: string) => {
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        duration={2500}
        before={<Icon20Cancel fill="var(--vkui--color_icon_negative)" />}
      >
        {message}
      </Snackbar>,
    );
  }, []);

  // ⬇️ Сердце логики. Все остальные обработчики сводятся сюда.
  const handleFile = useCallback(
    (file: File | undefined | null) => {
      if (!file) return;
      const result = validateFile(file);
      if (!result.valid) {
        showError(result.error);
        return;
      }
      onFileSelected?.(file);
    },
    [onFileSelected, showError],
  );

  const handleFileInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      handleFile(e.target.files?.[0]);
      e.target.value = ""; // чтобы можно было выбрать тот же файл повторно
    },
    [handleFile],
  );

  const onDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      handleFile(e.dataTransfer?.files?.[0]);
    },
    [handleFile],
  );

  const openFileDialog = useCallback(() => fileInputRef.current?.click(), []);
  const openCamera = useCallback(() => cameraInputRef.current?.click(), []);

  return {
    // refs для скрытых input'ов
    fileInputRef,
    cameraInputRef,
    // состояние
    isDragging,
    snackbar,
    // обработчики
    handleFileInput,
    onDragOver,
    onDragLeave,
    onDrop,
    openFileDialog,
    openCamera,
    showError, // экспортируем — пригодится для галереи ВК
    handleFile, // тоже экспортируем — для VK Bridge
  };
};
