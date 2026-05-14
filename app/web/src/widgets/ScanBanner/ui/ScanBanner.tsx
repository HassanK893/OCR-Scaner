import { Button, ButtonGroup, Caption, Text, Title } from "@vkontakte/vkui";
import styles from "./ScanBanner.module.css"
import { Icon20ArticleBoxOutline, Icon28CameraOutline } from "@vkontakte/icons";
function ScanBanner() {
  return (
    <div className={styles.scanBanner}>
      <div className={styles.scanBannerCircle1} />
      <div className={styles.scanBannerCircle2} />


      <Title
        level="2"
        weight="2"
        style={{
          color: "#fff",
          marginBottom: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        Начните сканирование
      </Title>
      <Text
        style={{
          color: "rgba(255,255,255,0.75)",
          marginBottom: 18,
          position: "relative",
          zIndex: 1,
          fontSize: 14,
        }}
      >
        Распознайте текст из изображения или файла
      </Text>


      <div className={styles.dropzone}>
        <div className={styles.dropzoneIcon}>
          <Icon20ArticleBoxOutline fill="var(--vkui--color_background_secondary)" />
        </div>
        <Text
          style={{
            color: "#fff",
            fontWeight: 500,
            fontSize: 15,
            marginBottom: 4,
          }}
        >
          Перетащите изображение сюда
        </Text>
        <Caption style={{ color: "rgba(255,255,255,0.5)" }}>
          PNG, JPG, PDF — до 5 МБ
        </Caption>
      </div>


      <ButtonGroup
        mode="horizontal"
        gap="m"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <Button
          size="m"
          appearance="positive"
          before={<Icon28CameraOutline width={20} height={20} />}
          style={{
            background: "#fff",
            color: "#0077FF",
            borderRadius: 10,
            fontWeight: 600,
          }}
          className={styles.dragMenuButton}
        >
          Сканировать
        </Button>
        <Button
          size="m"
          mode="outline"
          style={{
            background: "rgba(255,255,255,0.18)",
            color: "#fff",
            border: "none",
            borderRadius: 10,
            fontWeight: 600,
          }}
          className={styles.dragMenuButton}
        >
          Выбрать файл
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default ScanBanner