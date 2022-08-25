import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
type Props = {};

export const profileState = atom({
  key: "profileState", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const canvasState = atom({
  key: "canvasState", // unique ID (with respect to other atoms/selectors)
  default: "Bio", // default value (aka initial value)
});
