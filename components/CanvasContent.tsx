import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../atoms/profileAtoms.ts";
import CertContent from "./CanvasContent/CertContent.tsx";
import CoursesContent from "./CanvasContent/CoursesContent.tsx";
import EduContent from "./CanvasContent/EduContent.tsx";
import ExperienceContent from "./CanvasContent/ExperienceContent.tsx";
import LanguageContent from "./CanvasContent/LanguageContent.tsx";
import ProjectContent from "./CanvasContent/ProjectContent.tsx";
import TestScore from "./CanvasContent/TestScoreContent.tsx";
import VolunteeringContent from "./CanvasContent/VolunteeringContent.tsx";

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
  Test_Scores: <TestScore />,
  Volunteering: <VolunteeringContent />,
  Certs: <CertContent />,
  Projects: <ProjectContent />,
  Courses: <CoursesContent />,
};
const CanvasContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  return <div>{contentType[canvasData]}</div>;
};

export default CanvasContent;
