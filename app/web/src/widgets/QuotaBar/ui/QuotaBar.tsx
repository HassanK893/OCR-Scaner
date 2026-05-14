import { Caption, Progress, Spacing, Text } from "@vkontakte/vkui";
import styles from "./QuotaBar.module.css"
function QuotaBar(){
    return (
      <div>
        <div className={styles.quotaBar}>
          <div style={{ flex: 1 }}>
            <Text weight="2" style={{ fontSize: 15, marginBottom: 2 }}>
              Сканов сегодня: 7 / 30
            </Text>
            <Caption style={{ color: "var(--vkui--color_text_secondary)" }}>
              Бесплатный лимит • обновляется в полночь
            </Caption>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 110 }}>
              <Progress value={23} style={{ borderRadius: 3 }} />
            </div>
            <Caption
              weight="2"
              style={{
                color: "var(--vkui--color_text_secondary)",
                whiteSpace: "nowrap",
              }}
            >
              23 осталось
            </Caption>
          </div>
        </div>
        <Spacing size={24} />
      </div>
    );
}

export default QuotaBar




























