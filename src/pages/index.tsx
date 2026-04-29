import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen overflow-hidden bg-[#111] p-10 text-white">
      {/* 背景のグリッド線 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] mb-2.5 bg-size-[40px_40px]" />

      {/* Hero Section */}
      <section
        className="relative mt-[clamp(40px,6vw,100px)] flex flex-col items-start justify text"
        l-border-l-2
        border-l-
      >
        <div className="relative">
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-[0.9] tracking-tighter text-[#20b2aa] md:tracking-normal">
            MEITO
            <br />
            COMPUTER
            <br />
            <span className="inline-block">
              CLUB
              <div className="mt-2 h-0.5 w-full mb-1 bg-[#ff8000]" />
            </span>
          </h1>

          <p className="mt-0.5 text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-widest md:absolute mdm-5 md-l-border-l-2 border-l-0 md:translate-y-2.5 md:whitespace-nowrap">
            design and development
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-35">
        <div className="">
          <p className="opacity-80 text-[#ff8000]">ACTIVITIES</p>
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] underline underline-offset-10 decoration-2 decoration-[#ff8000] mb-5">
            活動内容
          </h1>
        </div>
        <div className="max-w-5xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image
              className="bg-black rounded p-0.5"
              src="/Play.svg"
              alt="play"
              width={35}
              height={35}
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-[clamp(0.9rem,3vw,1.5rem)] break-keep">
                動画編集
              </h2>
              <p className="text-[clamp(0.77rem,3vw,0.88rem)] opacity-60 break-keep">
                Video Editing
              </p>
            </div>
          </div>

          <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image
              className="bg-black rounded p-0.5"
              src="/Globe.svg"
              alt="globe"
              width={35}
              height={35}
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-[clamp(0.9rem,3vw,1.5rem)] whitespace-nowrap">
                Webサイト・Webアプリ開発
              </h2>
              <p className="text-[clamp(0.77rem,3vw,0.88rem)] opacity-60">
                Website & Web App Development
              </p>
            </div>
          </div>

          <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image
              className="bg-black rounded p-0.5"
              src="/Code.svg"
              alt="code"
              width={35}
              height={35}
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-[clamp(0.9rem,3vw,1.5rem)] whitespace-nowrap">
                Pythonを用いたゲーム開発
              </h2>
              <p className="text-[clamp(0.77rem,3vw,0.88rem)]  opacity-60">
                Game Creating With Python
              </p>
            </div>
          </div>

          <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image
              className="bg-black rounded p-0.5"
              src="/Edit_Pencil_Line_01.svg"
              alt="pencil"
              width={35}
              height={35}
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-[clamp(0.9rem,3vw,1.5rem)]">イラスト制作</h2>
              <p className="text-[clamp(0.77rem,3vw,0.88rem)] opacity-60">
                Digital Art
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center">
          {/* 時間>人数>場所 */}
          <div className="">
            <h2 className="">活動日・時間</h2>
            <p className="text-sm opacity-60">SCHEDULE</p>
            <p className="">15:40-17:00</p>
            <p className="">木曜日を除いた平日の授業後</p>
          </div>
        </div>

        <div className="">
          <h2 className="">活動人数</h2>
          <p className="text-sm opacity-60">MEMBERS</p>
          <ul className="">
            <li className="">1年生: 11人</li>
            <li className="">2年生: 11人</li>
          </ul>
          <p className="">※2025年度時点</p>
        </div>

        <div className="">
          <h2 className="">活動場所</h2>
          <p className="text-sm opacity-60">LOCATION</p>
          <Image
            className="bg-black rounded p-0.5"
            src="/Map_pin.svg"
            alt="Map_Pin"
            width={35}
            height={35}
          />
          <p className="">北校舎3階</p>
          <p className="">小ゼミナール室</p>
        </div>
      </section>
    </main>
  );
}

// メモ　活動内容をカードの左端にそろえる、フッターに使うURLを貼る
//question書く内容: 男女構成、活動場所、時間、兼部、
