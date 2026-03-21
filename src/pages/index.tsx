export default function Home() {
  return (
    <>
      <div className="top">
        <h1>Meito</h1>
        <h1>Computer</h1>
        <h1>Club</h1>
      </div>

      <div className="title">
        <h2>About us</h2>
      </div>

      <div className="details">
        <h3>活動内容</h3>
        <ul>
          <li>動画編集</li>
          <li>Pythonを用いたゲーム開発</li>
          <li>Webサイト、Webアプリの開発</li>
          <li>イラスト制作</li>
        </ul>
      </div>

      <div className="time">
        <h3>活動場所・時間</h3>
        <p>木曜日を除いた平日の授業後、15:40から17:00まで</p>
        <p>北校舎3階の小ゼミナール室で活動しています。</p>
      </div>

      <div className="people">
        <h3>活動人数</h3>
        <ul>
          <li>1年生: 11人</li>
          <li>2年生: 11人</li>
        </ul>
        <p>※2025年度時点</p>
      </div>
    </>
  );
}
