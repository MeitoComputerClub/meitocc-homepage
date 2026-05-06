export default function Home() {
  return (
    <main className="relative z-0 min-h-screen overflow-hidden bg-[#444] p-10 text-white">
      {/* 背景のグリッド線 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-size-[40px_40px]" />

      {/* Hero Section */}
      <section className="relative mt-[clamp(40px,6vw,100px)] flex flex-col items-start justify-between">
        <div className="relative">
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter text-[#20b2aa] md:tracking-normal">
            M~~~~
            <br />
            COMPUTER
            <br />
            <span className="inline-block">
              CLUB
              <div className="mt-2 mb-2 h-0.5 w-full bg-[#ff8000]" />
            </span>
          </h1>

          <p className="mt-0.5 text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-widest md:absolute md:-bottom-5 md:left-0 md:translate-y-2.5 md:whitespace-nowrap">
            design and development
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-30 flex flex-col items-center gap-10">
        <h2 className="mb-10 translate-y-2.5 border-b-[5px] border-[#ff8000] pb-1.25 text-[clamp(1.5rem,3vw,2.2rem)] font-bold tracking-widest md:static md:mx-auto md:translate-y-0 md:text-center">
          About us
        </h2>

        <div className="grid w-full max-w-250 grid-cols-1 gap-10 md:grid-cols-3">
          <div className="group rounded-2xl border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 backdrop-blur-md">
            <h3 className="mb-3 text-[clamp(1.2rem,2vw,1.5rem)] font-semibold">
              活動内容
            </h3>
            <p className="leading-relaxed opacity-80">
              動画編集
              <br />
              Pythonを用いたゲーム開発
              <br />
              Webサイト、Webアプリの開発
              <br />
              イラスト制作
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 backdrop-blur-md">
            <h3 className="mb-3 text-[clamp(1.2rem,2vw,1.5rem)] font-semibold">
              活動場所・時間
            </h3>
            <p className="leading-relaxed opacity-80">
              木曜日を除いた平日の授業後
              <br />
              15:40から17:00まで
              <br />
              北校舎3階の小ゼミナール室で活動しています。
            </p>
          </div>

          <div className="group rounded-2xl border border-white/10 p-5 transition-transform duration-300 hover:-translate-y-2 hover:border-white/30 backdrop-blur-md">
            <h3 className="mb-3 text-[clamp(1.2rem,2vw,1.5rem)] font-semibold">
              活動人数
            </h3>
            <p className="leading-relaxed opacity-80">
              1年生: 11人
              <br />
              2年生: 11人
            </p>
            <p className="mt-2 text-sm opacity-60">※2025年度時点</p>
          </div>
        </div>
      </section>
    </main>
  );
}
