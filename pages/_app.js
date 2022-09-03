import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Header from "../components/Header.tsx";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <>
      <RecoilRoot>
        <Toaster />
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
