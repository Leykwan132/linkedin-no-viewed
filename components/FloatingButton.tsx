import React from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
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
import {
  profileState,
  mobileMenuState,
  canvasState,
} from "../atoms/profileAtoms.ts";

type Props = {
  title?: String;
  mobile?: Boolean;
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
  Languages: <LanguageIcon className="w-4 h-4  " />,
  Education: <AcademicCapIcon className="w-4 h-4   " />,
  Patents: <BeakerIcon className="w-4 h-4  " />,
  Certs: <DocumentTextIcon className="w-4 h-4  " />,
  Projects: <ChartBarIcon className="w-4 h-4  " />,
  Publications: <CommandLineIcon className="w-4 h-4  " />,
  Courses: <CubeIcon className="w-4 h-4  " />,
  Volunteering: <HeartIcon className="w-4 h-4  " />,
  Test_Scores: <DocumentChartBarIcon className="w-4 h-4  " />,
  Experiences: <BriefcaseIcon className="w-4 h-4  " />,
};
const FloatingButton = ({ title, mobile }: Props) => {
  const [profile, setProfile] = useRecoilState(profileState);
  const canvasData = useRecoilValue(canvasState);
  const setCanvasState = useSetRecoilState(canvasState);
  const [showMobileMenu, setShowMobileMenu] = useRecoilState(mobileMenuState);

  const handleClick = () => {
    if (profile[title].length === 0) {
      toast.error("The user did not enter any information.");
    } else {
      if (canvasData === title) {
        setCanvasState("Bio");
      } else {
        toast.success(
          `${title === "Test_Scores" ? "Test Scores" : title} field selected!`
        );
        setCanvasState(title);
      }
      if (mobile) {
        setShowMobileMenu(false);
      }
    }
  };

  if (profile) {
    return (
      <div
        className={`${
          profile[title].length === 0
            ? "cursor-not-allowed border-gray-500"
            : "cursor-pointer hover:scale-110 ease-in-out duration-200  hover:border-white border-gray-500"
        }  
      ${!mobile ? " py-7 text-[13px]" : "py-4 px-2  text-[11px]  text-white"}
      ${canvasData === title && "bg-gradient-to-r to-gray-600 from-slate-800"}
      border rounded-xl font-mono
      
      `}
        onClick={handleClick}
      >
        <div
          className={`flex ${
            mobile ? "justify-between" : "justify-around "
          } items-center`}
        >
          <div className="hidden md:block">{Icon[title]}</div>
          <div>{Title[title]}</div>
          <span
            className={`  ${profile[title].length === 0 && "text-red-600"}
          ${!mobile ? "text-[12px]" : "text-[10px]"}

         `}
          >{`[${profile[title].length}]`}</span>
        </div>
      </div>
    );
  }
};

export default FloatingButton;
