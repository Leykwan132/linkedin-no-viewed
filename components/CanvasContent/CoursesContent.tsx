import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import CoursesContentRow from "./components/CoursesContentRow.tsx";

type Props = {};

const CoursesContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const coursesData = profileData[canvasData];

  return (
    <div className="space-y-6 fade w-full">
      {coursesData.map((item, i) => (
        <CoursesContentRow key={i} data={item} />
      ))}
    </div>
  );
};

export default CoursesContent;
