export default function Footer() {
  const links = [
    {
      name: "名古屋市立名東高等学校",
      url: "https://nagoya.fureai-cloud.jp/_view/meito-h",
    },
    {
      name: "名古屋市立名東高等学校-部活動【文化部】",
      url: "https://nagoya.fureai-cloud.jp/_view/meito-h/home/index/schoollife/b-club",
    },
    { name: "Twitter", url: "https://x.com/MeitoCC" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/meitocc?igsh=MXRiY21xcWNkd3NoYQ==",
    },
    { name: "Github", url: "https://github.com/MeitoComputerClub" },
  ];
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-xl mx-auto px-4 py-10">
        {/* Title */}
        <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] font-semibold mb-6">
          関連リンク
        </h3>
        <ul className="grid grid-cols-1 place-items-center md:grid-cols-2 md:place-items-start gap-4">
          {links.map((link, index) => (
            <li
              key={index}
              className={`
        w-fit
        ${index === 0 ? "md:col-start-1" : ""}
        ${index === 1 ? "md:col-start-2" : ""}
        ${index === 2 ? "md:col-start-1" : ""}
        ${index === 3 ? "md:col-start-2" : ""}
        ${index === 4 ? "md:col-start-3" : ""}
      `}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  relative inline-block
                  text-[clamp(0.85rem,1.8vw,0.95rem)]
                  leading-none
                  whitespace-nowrap
                  opacity-80 hover:opacity-100

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-px
                  after:w-0
                  after:bg-[#ff8000]
                  after:transition-all

                  md:hover:after:w-full
                  md:justify-self-center
                  "
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-[clamp(0.7rem,1.5vw,0.8rem)] opacity-50 mt-10 text-center">
          ©2026 Meito Computer Club
        </p>
      </div>
    </footer>
  );
}
