import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import React, { useEffect } from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
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
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default MyApp;
