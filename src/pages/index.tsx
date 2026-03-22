import styles from "./index.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>
            M~~~~
            <br />
            COMPUTER
            <br />
            CLUB
          </h1>
          <p className={styles.catch}>design and development</p>
        </div>
      </section>

      <section className={styles.info}>
        <h2 className={styles.aboutTitle}>About us</h2>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>活動内容</h3>
            <p>
              動画編集
              <br />
              Pythonを用いたゲーム開発
              <br />
              Webサイト、Webアプリの開発
              <br />
              イラスト制作
            </p>
          </div>

          <div className={styles.card}>
            <h3>活動場所・時間</h3>
            <p>
              木曜日を除いた平日の授業後
              <br />
              15:40から17:00まで
              <br />
              北校舎3階の小ゼミナール室で活動しています。
            </p>
          </div>

          <div className={styles.card}>
            <h3>活動人数</h3>

            <p>
              1年生: 11人
              <br />
              2年生: 11人
            </p>

            <p>※2025年度時点</p>
          </div>
        </div>
      </section>
    </main>
  );
}
