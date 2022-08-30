import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../atoms/profileAtoms.ts";
import EduContent from "./CanvasContent/EduContent.tsx";
import ExperienceContent from "./CanvasContent/ExperienceContent.tsx";
import LanguageContent from "./CanvasContent/LanguageContent.tsx";

type Props = {};

interface Content {
  Education?: any;
  Languages?: any;
  Experiences?: any;
  Patents?: any;
  Certs?: any;
  Projects?: any;
  Test_Scores?: any;
  Volunteering?: any;
  Publications?: any;
  Courses?: any;
}
const contentType: Content = {
  Education: <EduContent />,
  Languages: <LanguageContent />,
  Experiences: <ExperienceContent />,
};
const CanvasContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  return <div>{contentType[canvasData]}</div>;
};

export default CanvasContent;
