import "../styles/globals.css";
import type { AppProps } from "next/app";
import { sora, noto, zen } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

// export const metadata = {
//   title: "MeitoCC",
//   description: "名東高校コンピュータ部",
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={zen.className}>
      <Head>
        <title>MeitoCC</title>
        <meta name="description" content="名東高校コンピュータ部"></meta>
        <meta
          name="google-site-verification"
          content="i4SLLwBEHfq8G249jKdCxgEdzQkPFgTw-h6_ZJNAOAs"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
