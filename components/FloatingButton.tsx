import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { profileState, canvasState } from "../atoms/profileAtoms.ts";
import {
  AcademicCapIcon,
  BeakerIcon,
  DocumentChartBarIcon,
  LanguageIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CubeIcon,
  DocumentTextIcon,
  CommandLineIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
type Props = {
  title?: String;
};

const Title = {
  Languages: "Languages",
  Education: "Education",
  Patents: "Patents",
  Certs: "Certs",
  Projects: "Projects",
  Publications: "Publications",
  Courses: "Courses",
  Volunteering: "Volunteering",
  Test_Scores: "Test Scores",
  Experiences: "Experiences",
};
const Icon = {
  Languages: <LanguageIcon className="w-4 h-4 absolute left-6 " />,
  Education: <AcademicCapIcon className="w-4 h-4  absolute left-6 " />,
  Patents: <BeakerIcon className="w-4 h-4 absolute left-6 " />,
  Certs: <DocumentTextIcon className="w-4 h-4 absolute left-6 " />,
  Projects: <ChartBarIcon className="w-4 h-4 absolute left-6 " />,
  Publications: <CommandLineIcon className="w-4 h-4 absolute left-6 " />,
  Courses: <CubeIcon className="w-4 h-4 absolute left-6 " />,
  Volunteering: <HeartIcon className="w-4 h-4 absolute left-6 " />,
  Test_Scores: <DocumentChartBarIcon className="w-4 h-4 absolute left-6 " />,
  Experiences: <BriefcaseIcon className="w-4 h-4 absolute left-6 " />,
};
const FloatingButton = ({ title }: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const setCanvasState = useSetRecoilState(canvasState);

  const handleClick = () => {
    if (profileData[title].length === 0) {
      toast.error("The user did not enter any information.");
    } else {
      if (canvasData === title) {
        setCanvasState("Bio");
      } else {
        toast.success(`${title} field selected!`);
        setCanvasState(title);
      }
    }
  };
  return (
    <div
      className={`${
        profileData[title].length === 0
          ? "cursor-not-allowed border-gray-500"
          : "cursor-pointer hover:scale-110 ease-in-out duration-200  hover:border-white border-gray-500"
      }  
      ${canvasData === title && "bg-gradient-to-r to-gray-600 from-slate-800"}
      relative grid place-items-center border py-7 text-[13px] rounded-xl font-mono `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        {Icon[title]}
        <div>{Title[title]}</div>
        <span
          className={`absolute text-[12px] right-6 ${
            profileData[title].length === 0 && "text-red-600"
          }`}
        >{`[${profileData[title].length}]`}</span>
      </div>
    </div>
  );
};

export default FloatingButton;
