export default function Blog() {
  return (
    <section className="relative z-0 min-h-screen overflow-hidden bg-[#111] p-10 text-white">
      {/* 背景グリッド線 */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] mb-2.5 bg-size-[40px_40px]" />
      <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] text-center underline underline-offset-10 decoration-2 decoration-[#ff8000] ">
        Blog
      </h1>
      <p className="text-[clamp(0.77rem,3vw,1rem)] opacity-80 text-center mt-1.5">
        活動の様子、制作物の宣伝など。不定期更新。
      </p>
    </section>
  );
}
