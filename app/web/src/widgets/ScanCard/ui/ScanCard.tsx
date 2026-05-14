import { Icon28DocumentOutline } from "@vkontakte/icons";
import { Caption, Card, Text } from "@vkontakte/vkui";
import styles from "./ScanCard.module.css";

function ScanCard({ scan, viewMode }) {
  const isVertical = viewMode === "vertical"; // полоска

  return (
    <div className={styles.scanCardConteyner}>
      <Card
        mode="shadow"
        className={`${styles.scanCard} ${
          isVertical ? styles.scanCardList : styles.scanCardGrid
        }`}
      >
        <div
          className={`${styles.cardInner} ${
            isVertical ? styles.cardInnerList : styles.cardInnerGrid
          }`}
        >
          <div
            className={`${styles.cardPreview} ${
              isVertical ? styles.cardPreviewList : styles.cardPreviewGrid
            }`}
          >
            <span
              className={`${styles.typeBadge} ${
                isVertical ? styles.typeBadgeList : ""
              }`}
            >
              {scan.type}
            </span>
            <Icon28DocumentOutline
              width={52}
              height={52}
              style={{ opacity: 0.12 }}
            />
          </div>
          <div className={styles.cardInfo}>
            <Text
              weight="2"
              style={{
                fontSize: 14,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: 2,
              }}
            >
              {scan.scanText}
            </Text>
            <Caption style={{ color: "var(--vkui--color_text_secondary)" }}>
              {scan.ceatedDate}
            </Caption>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ScanCard;
