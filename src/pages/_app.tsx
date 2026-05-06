import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

import { Sora, Noto_Sans, Zen_Kaku_Gothic_New } from "next/font/google";
// import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "500"],
});
const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const zen = Zen_Kaku_Gothic_New({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={zen.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export { sora, noto, zen };
