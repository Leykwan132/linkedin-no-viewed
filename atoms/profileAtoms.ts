import React from "react";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
type Props = {};

export const profileState = atom({
  key: "profile", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export const canvasState = atom({
  key: "canvas", // unique ID (with respect to other atoms/selectors)
  default: "Bio", // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});
