import {
  Icon16Flash,
  Icon16Stars,
  Icon16Cloud,
  Icon16Camera,
  Icon16PictureOutline,
  Icon24DocumentTextOutline,
} from "@vkontakte/icons";
import { Div, Title, Text, Button } from "@vkontakte/vkui";
import styles from "./EmptyPage.module.css";

interface IEmptyPageProps {
  onScanClick?: () => void;
  onGalleryClick?: () => void;
}

function EmptyPage({ onScanClick, onGalleryClick }: IEmptyPageProps) {
  return (
    <Div className={styles.container}>
      <Div className={styles.iconWrapper}>
        <Icon24DocumentTextOutline className={styles.iconMain} />
      </Div>

      <Title level="2" className={styles.mainTitle}>
        Начните сканировать
      </Title>

      <Text className={styles.description}>
        Здесь будут храниться все ваши отсканированные документы для быстрого
        доступа в любое время
      </Text>

      <Div className={styles.spacer} />

      <div className={styles.featuresContainer}>
        <div className={styles.featureCard}>
          <div className={styles.featureIconWrapperBlue}>
            <Icon16Flash className={styles.featureIcon} />
          </div>
          <Text className={styles.featureText}>
            Мгновенное распознавание текста
          </Text>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIconWrapperGreen}>
            <Icon16Stars className={styles.featureIcon} />
          </div>
          <Text className={styles.featureText}>
            Автоматическая категоризация
          </Text>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.featureIconWrapperOrange}>
            <Icon16Cloud className={styles.featureIcon} />
          </div>
          <Text className={styles.featureText}>
            Безопасное хранение в облаке
          </Text>
        </div>
      </div>

      <Div className={styles.spacerLarge} />

      <Button
        mode="primary"
        size="l"
        stretched
        className={styles.scanButton}
        onClick={onScanClick}
        before={<Icon16Camera className={styles.buttonIconWhite} />}
      >
        Сканировать документ
      </Button>

      <Button
        mode="outline"
        size="l"
        stretched
        className={styles.galleryButton}
        onClick={onGalleryClick}
        before={<Icon16PictureOutline className={styles.buttonIconBlue} />}
      >
        Загрузить из галереи
      </Button>
    </Div>
  );
}

export default EmptyPage;
