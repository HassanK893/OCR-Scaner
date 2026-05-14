// components/ScanDropZone/ScanDropZone.tsx
import bridge from "@vkontakte/vk-bridge";
import {
  Card,
  Button,
  Title,
  Text,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";
import {
  Icon28CameraOutline,
  Icon28DocumentOutline,
  Icon28PictureOutline,
} from "@vkontakte/icons";

import { ACCEPT_ATTR, MAX_SIZE_MB } from "../model/constans";
import type { ScanDropZoneProps } from "../model/types";
import { useScanFilePicker } from "../model/useScanFilePicker";
import styles from "./ScanDropZone.module.css";

interface VkImage {
  url?: string;
  base64?: string;
}

interface VkBridgeError {
  error_data?: {
    error_reason?: string;
  };
}

export const ScanDropZone: React.FC<ScanDropZoneProps> = ({
  onFileSelected,
}) => {
  const { sizeX } = useAdaptivityConditionalRender();

  const {
    fileInputRef,
    cameraInputRef,
    isDragging,
    snackbar,
    handleFileInput,
    onDragOver,
    onDragLeave,
    onDrop,
    openFileDialog,
    openCamera,
    handleFile,
    showError,
  } = useScanFilePicker({ onFileSelected });

  // ─── VK Bridge: галерея ВК ────────────────────────────────────────────────
  const openVkGallery = async (): Promise<void> => {
    try {
      if (!bridge.supports("VKWebAppGetImages")) {
        // на части платформ метод недоступен — fallback на файловый ввод
        openFileDialog();
        return;
      }
      const result = (await bridge.send("VKWebAppGetImages", {
        max_count: 1,
      })) as { images?: VkImage[] };

      const img = result.images?.[0];
      const url = img?.url || img?.base64;
      if (!url) return;

      const response = await fetch(url);
      const blob = await response.blob();
      const ext = (blob.type.split("/")[1] || "jpg").replace("jpeg", "jpg");
      const file = new File([blob], `vk_image_${Date.now()}.${ext}`, {
        type: blob.type || "image/jpeg",
      });
      handleFile(file);
    } catch (err) {
      const error = err as VkBridgeError;
      if (error?.error_data?.error_reason !== "User denied") {
        console.error("VKWebAppGetImages error:", err);
        showError("Не удалось открыть галерею ВК");
      }
    }
  };

  return (
    <>
      <Card mode="shadow" className={styles.root}>
        <div className={styles.decorCircle} aria-hidden="true" />
        <div className={styles.decorCircleInner} aria-hidden="true" />

        <div className={styles.header}>
          <Title level="2" className={styles.title}>
            Начните сканирование
          </Title>
          <Text className={styles.subtitle}>
            Распознайте текст из изображения или файла
          </Text>
        </div>

        {/* ─── DESKTOP ─────────────────────────────────────────── */}
        {sizeX.regular && (
          <div className={sizeX.regular.className}>
            <div
              className={`${styles.dropZone} ${
                isDragging ? styles.dropZoneActive : ""
              }`}
              onDragOver={onDragOver}
              onDragEnter={onDragOver}
              onDragLeave={onDragLeave}
              onDrop={onDrop}
              onClick={openFileDialog}
              role="button"
              tabIndex={0}
            >
              <div className={styles.dropIcon}>
                <Icon28DocumentOutline />
              </div>
              <div className={styles.dropText}>Перетащите изображение сюда</div>
              <div className={styles.dropHint}>
                PNG, JPG, PDF — до {MAX_SIZE_MB} МБ
              </div>
            </div>

            <div className={styles.actions}>
              <Button
                size="l"
                mode="secondary"
                stretched
                appearance="overlay"
                before={<Icon28PictureOutline width={20} height={20} />}
                onClick={openVkGallery}
              >
                Открыть галерею
              </Button>
              <Button
                size="l"
                mode="primary"
                stretched
                appearance="overlay"
                onClick={openFileDialog}
              >
                Выбрать файл
              </Button>
            </div>
          </div>
        )}

        {/* ─── MOBILE ──────────────────────────────────────────── */}
        {sizeX.compact && (
          <div className={sizeX.compact.className}>
            {/* «Вершина треугольника» — главная кнопка сканирования */}
            <button
              type="button"
              className={styles.scanCta}
              onClick={openCamera}
            >
              <span className={styles.scanCtaIcon}>
                <Icon28CameraOutline width={24} height={24} />
              </span>
              <span className={styles.scanCtaLabel}>Сканировать</span>
            </button>

            {/* Декоративная зона сканирования (видоискатель) */}
            <div
              className={styles.scanFrame}
              aria-hidden="true"
              onClick={openCamera}
              role="presentation"
            >
              <span className={`${styles.corner} ${styles.cornerTL}`} />
              <span className={`${styles.corner} ${styles.cornerTR}`} />
              <span className={`${styles.corner} ${styles.cornerBL}`} />
              <span className={`${styles.corner} ${styles.cornerBR}`} />
              <span className={styles.scanLine} />
              <span className={styles.scanHint}>
                Наведите камеру на документ
              </span>
            </div>

            <Button
              size="l"
              mode="secondary"
              stretched
              appearance="overlay"
              before={<Icon28PictureOutline width={20} height={20} />}
              onClick={openVkGallery}
            >
              Открыть галерею ВК
            </Button>
          </div>
        )}

        {/* скрытые input для проводника / камеры */}
        <input
          ref={fileInputRef}
          type="file"
          accept={ACCEPT_ATTR}
          hidden
          onChange={handleFileInput}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          hidden
          onChange={handleFileInput}
        />
      </Card>
      {snackbar}
    </>
  );
};

export default ScanDropZone;
