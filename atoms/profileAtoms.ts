import React from "react";
import { atom } from "recoil";

type Props = {};

export const profileState = atom({
  key: "profile", // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const canvasState = atom({
  key: "canvas", // unique ID (with respect to other atoms/selectors)
  default: "Bio", // default value (aka initial value)
});

export const linkedinState = atom({
  key: "linkedin", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const mobileMenuState = atom({
  key: "mobileMenu", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const isMobileState = atom({
  key: "isMobile", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
