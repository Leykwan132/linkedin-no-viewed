import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
function MyApp({ Component, pageProps }) {
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
