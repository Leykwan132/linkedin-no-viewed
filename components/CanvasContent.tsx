import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../atoms/profileAtoms.ts";
import EduContent from "./CanvasContent/EduContent.tsx";
import LanguageContent from "./CanvasContent/LanguageContent.tsx";

type Props = {};

const contentType = {
  Education: <EduContent />,
  Languages: <LanguageContent />,
};
const CanvasContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  console.log(canvasData);
  return <div>{contentType[canvasData]}</div>;
};

export default CanvasContent;
