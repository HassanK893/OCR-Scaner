import { Group, Title } from "@vkontakte/vkui";
import Header from "../../widgets/Header/ui/Header";
import Footer from "../../widgets/Footer/ui/Footer";
import Router from "../Router";
import styles from "./BaseLayout.module.css"





function BaseLayout() {
   
  return (
    <>
      <Header />
      <Group mode="card" className={styles.greetingConteyner}>
        <Title level="1" weight="2" className={styles.greeting}>
          Привет, Алексей! <span className={styles.greetingWave}>👋</span>
        </Title>
      </Group>
      <div style={{ marginInline: "20px", paddingBottom: "40px" }}>
        <Router />
      </div>
      <Footer />
    </>
  );
}

export default BaseLayout;
