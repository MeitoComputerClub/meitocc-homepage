import "../styles/globals.css";
import type { AppProps } from "next/app";
import { sora, noto, zen } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={zen.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
