import { Sora, Noto_Sans, Zen_Kaku_Gothic_New } from "next/font/google";

export const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "500"],
});

export const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700"],
});
