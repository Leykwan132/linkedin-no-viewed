import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  canvasState,
  profileState,
  isMobileState,
} from "../atoms/profileAtoms.ts";
import BioContent from "./CanvasContent/BioContent.tsx";
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
  Bio?: any;
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
  Bio: <BioContent />,
};
const CanvasContent = (props: Props) => {
  const canvasData = useRecoilValue(canvasState);
  const isMobile = useRecoilValue(isMobileState);
  return (
    <div
      className={`${
        isMobile &&
        "fixed  top-[39%] right-[50%] translate-x-[50%] min-w-[300px] max-h-[330px] "
      } max-w-2xl mx-auto overflow-y-scroll scrollbar-hide`}
    >
      {isMobile &&
        canvasData !== "Bio" &&
        (canvasData === "Test_Scores" ? (
          <div className="font-mono text-white text-center font-bold text-xl mb-1">
            Test Scores
          </div>
        ) : (
          <div className="font-mono text-white text-center font-bold text-xl mb-1">
            {canvasData}
          </div>
        ))}
      {contentType[canvasData]}
    </div>
  );
};

export default CanvasContent;
