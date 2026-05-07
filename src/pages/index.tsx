import Image from "next/image";
import { sora } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen overflow-hidden bg-[#111] p-10 text-white">
      {/* 背景のグリッド線 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] mb-2.5 bg-size-[40px_40px]" />

      {/* Hero Section */}
      <section className="mt-[clamp(40px,6vw,100px)]">
        <div className="max-w-5xl mx-auto px-2 md:px-6">
          <h1
            className={`${sora.className} text-[clamp(2.5rem,8vw,6rem)] font-medium leading-[0.9] tracking-tighter text-[#20b2aa] md:tracking-normal`}
          >
            MEITO
            <br />
            COMPUTER
            <br />
            <span className="inline-block">
              CLUB
              <div className="mt-2 h-0.5 w-full mb-1 bg-[#ff8000]" />
            </span>
          </h1>

          <p
            className={`${sora.className} mt-0.5 text-[clamp(0.945rem,2.5vw,1.8rem)] font-thin tracking-widest md:whitespace-nowrap`}
          >
            design and development
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="mt-35 mb-25">
        <div className="max-w-5xl mx-auto px-2 md:px-6">
          <p className="opacity-80 text-[#ff8000]">ACTIVITIES</p>
          <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] underline underline-offset-10 decoration-2 decoration-[#ff8000] mb-5">
            活動内容
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4 h-full">
              <Image
                className="bg-black rounded p-0.5"
                src="/Play.svg"
                alt="play"
                width={35}
                height={35}
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(1.0rem,2.5vw,1.4rem)] break-keep">
                  動画編集
                </h2>
                <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] opacity-60 break-keep leading-snug">
                  Video Editing
                </p>
              </div>
            </div>

            <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4 h-full">
              <Image
                className="bg-black rounded p-0.5"
                src="/Globe.svg"
                alt="globe"
                width={35}
                height={35}
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(1.0rem,1.5vw,1.4rem)] break-keep leading-snug line-clamp-2 md:line-clamp-none">
                  Webサイト・Webアプリ開発
                </h2>
                <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] opacity-60">
                  Website/App Development
                </p>
              </div>
            </div>

            {/* h2の文字列が改行されない問題、ヘッダー、カード、フッターの文字の大きさ、フッターはリンクも */}

            <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4 h-full">
              <Image
                className="bg-black rounded p-0.5"
                src="/Code.svg"
                alt="code"
                width={35}
                height={35}
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(1.0rem,1.5vw,1.4rem)] leading-snug break-keep line-clamp-2 md:line-clamp-none">
                  Pythonを用いた
                  <wbr />
                  ゲーム開発
                </h2>
                <p className="text-[clamp(0.7rem,1.5vw,0.85rem)]  opacity-60">
                  Game Creating With Python
                </p>
              </div>
            </div>

            <div className="mb-2.5 p-2 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4 h-full">
              <Image
                className="bg-black rounded p-0.5"
                src="/Edit_Pencil_Line_01.svg"
                alt="pencil"
                width={35}
                height={35}
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-[clamp(1.0rem,1.5vw,1.4rem)] break-keep leading-snug">
                  イラスト制作
                </h2>
                <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] opacity-60">
                  Digital Art
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-2 grid md:grid-cols-3 gap-6">
        <div className="bg-[#222] border-l-3 rounded border-l-[#ff8000] p-4 flex flex-col gap-2">
          {/* 時間>人数>場所 */}
          <div className="flex items-center gap-3 mb-2">
            <Image
              className="bg-black rounded p-0.5"
              src="/Calendar_Days.svg"
              alt="Calendar"
              width={35}
              height={35}
            />
            <div>
              <h2 className="text-[clamp(1rem,2.5vw,1.4rem)] font-semibold">
                活動日・時間
              </h2>
              <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] opacity-60 tracking-wider">
                SCHEDULE
              </p>
            </div>
          </div>
          <p className="text-[clamp(0.85rem,1.8vw,1.0rem)]">
            15:40-17:00(18:00まで可能)
          </p>
          <p className="text-[clamp(0.85rem,1.8vw,1.0rem)] opacity-50">
            木曜日を除いた平日の授業後
          </p>
        </div>

        <div className="bg-[#222] border-l-3 rounded border-l-[#ff8000] p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <Image
              className="bg-black rounded p-0.5"
              src="/Users_Group.svg"
              alt="Members"
              width={35}
              height={35}
            />
            <div>
              <h2 className="text-[clamp(1rem,2.5vw,1.4rem)] font-semibold">
                活動人数
              </h2>
              <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] opacity-60 tracking-wider">
                MEMBERS
              </p>
            </div>
          </div>
          <ul className="list-disc pl-5">
            <li className="text-[clamp(0.85rem,1.8vw,1.0rem)] ">1年生: 11人</li>
            <li className="text-[clamp(0.85rem,1.8vw,1.0rem)] ">2年生: 11人</li>
          </ul>
          <p className="text-sm mt-1 opacity-60">※2025年度時点</p>
        </div>

        <div className="bg-[#222] border-l-3 rounded border-l-[#ff8000] p-4 flex flex-col gap-2">
          <div className="flex items-center gap-3 mb-2">
            <Image
              className="bg-black rounded p-0.5"
              src="/Map_pin.svg"
              alt="Map_Pin"
              width={35}
              height={35}
            />
            <div>
              <h2 className="text-[clamp(1rem,2.5vw,1.4rem)] font-semibold">
                活動場所
              </h2>
              <p className="text-[clamp(0.7rem,1.5vw,0.85rem)] opacity-60">
                LOCATION
              </p>
            </div>
          </div>
          <p className="text-[clamp(0.85rem,1.8vw,1.0rem)]">北校舎3階</p>
          <p className="text-[clamp(0.85rem,1.8vw,1.0rem)]">小ゼミナール室</p>
        </div>
      </section>
    </main>
  );
}

//question書く内容: 男女構成、活動場所、時間、兼部、
