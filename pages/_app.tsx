import "../styles/globals.css";
import "@formds/tokens/css/lyse.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
