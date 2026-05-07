import "../styles/globals.css";
import type { AppProps } from "next/app";
import { sora, noto, zen } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={zen.className}>
      <Component {...pageProps} />
    </div>
  );
}
