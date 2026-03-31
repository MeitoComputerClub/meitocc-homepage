import Image from "next/image";

export default function Home() {
  return (
    <main className="relative z-0 min-h-screen overflow-hidden mb-2.5 bg-[#111] p-10 text-white">
      {/* 背景のグリッド線 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] mb-2.5 bg-size-[40px_40px]" />

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
        <div>
          <p className="opacity-80 text-[#ff8000]">ACTIVITIES</p>
          <h1 className="text-[clamp(1.5rem,3vw,2rem)] underline underline-offset-10 decoration-2 decoration-[#ff8000] mb-5">
            活動内容
          </h1>
        </div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 gap-6">
          <div className="mb-2.5 p-4 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image src="/Play.svg" alt="play" width={35} height={35} />
            <div className="flex-1 min-w-0">
              <h2 className="text-[clamp(1rem,3vw,1.5rem)] break-keep">
                動画編集
              </h2>
              <p className="text-sm opacity-60 break-keep">Video Editing</p>
            </div>
          </div>

          <div className="mb-2.5 p-4 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image src="/Globe.svg" alt="globe" width={35} height={35} />
            <div>
              <h2 className="text-[clamp(1rem,3vw,1.5rem)]">
                Webサイト・Webアプリ開発
              </h2>
              <p className="text-sm opacity-60">
                Website & Web Application Development
              </p>
            </div>
          </div>

          <div className="mb-2.5 p-4 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image src="/Code.svg" alt="code" width={35} height={35} />
            <div>
              <h2 className="text-[clamp(1rem,3vw,1.5rem)]">
                Pythonを用いたゲーム開発
              </h2>
              <p className="text-sm opacity-60">Game Creating With Python</p>
            </div>
          </div>

          <div className="mb-2.5 p-4 bg-[#222] border-l-3 rounded border-l-[#ff8000] flex items-center gap-4">
            <Image
              src="/Edit_Pencil_Line_01.svg"
              alt="pencil"
              width={35}
              height={35}
            />
            <div>
              <h2 className="text-[clamp(1rem,3vw,1.5rem)]">イラスト制作</h2>
              <p className="text-sm opacity-60">Digital Art</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
