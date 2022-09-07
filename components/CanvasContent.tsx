import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  canvasState,
  profileState,
  isMobileState,
} from "../atoms/profileAtoms.ts";
import BioContent from "./CanvasContent/BioContent.tsx";
import CertContent from "./CanvasContent/CertContent.tsx";
import PublicationContent from "./CanvasContent/PublicationContent.tsx";
import CoursesContent from "./CanvasContent/CoursesContent.tsx";
import EduContent from "./CanvasContent/EduContent.tsx";
import ExperienceContent from "./CanvasContent/ExperienceContent.tsx";
import LanguageContent from "./CanvasContent/LanguageContent.tsx";
import ProjectContent from "./CanvasContent/ProjectContent.tsx";
import TestScore from "./CanvasContent/TestScoreContent.tsx";
import VolunteeringContent from "./CanvasContent/VolunteeringContent.tsx";
import {
  BookOpenIcon,
  BeakerIcon,
  DocumentChartBarIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CubeIcon,
  DocumentTextIcon,
  CommandLineIcon,
  HeartIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";

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
const Icon = {
  Languages: <LanguageIcon className="w-5 h-5  " />,
  Education: <BookOpenIcon className="w-5 h-5   " />,
  Patents: <BeakerIcon className="w-5 h-5  " />,
  Certs: <DocumentTextIcon className="w-5 h-5  " />,
  Projects: <ChartBarIcon className="w-5 h-5  " />,
  Publications: <CommandLineIcon className="w-5 h-5  " />,
  Courses: <CubeIcon className="w-5 h-5  " />,
  Volunteering: <HeartIcon className="w-5 h-5  " />,
  Test_Scores: <DocumentChartBarIcon className="w-5 h-5  " />,
  Experiences: <BriefcaseIcon className="w-5 h-5  " />,
};

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
  Publications: <PublicationContent />,
};
const CanvasContent = (props: Props) => {
  const canvasData = useRecoilValue(canvasState);
  const isMobile = useRecoilValue(isMobileState);
  return (
    <div
      className={`${
        isMobile && "min-w-[300px] max-h-[330px] row-span-2"
      } max-w-2xl mx-auto overflow-y-scroll scrollbar-hide`}
    >
      {isMobile &&
        canvasData !== "Bio" &&
        (canvasData === "Test_Scores" ? (
          <div className="font-mono text-white text-center font-bold text-xl mb-1 flex items-center space-x-2">
            <TestScore />
            <p>Test Scores</p>
          </div>
        ) : (
          <div className="font-mono text-whitefont-bold text-xl mb-2 flex items-center space-x-2 justify-center">
            <div>{Icon[canvasData]}</div>
            <div>{canvasData}</div>
          </div>
        ))}
      {contentType[canvasData]}
    </div>
  );
};

export default CanvasContent;
