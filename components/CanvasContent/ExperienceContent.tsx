import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import ExperienceContentRow from "./components/ExperienceContentRow.tsx";

type Props = {};

const ExperienceContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const expData = profileData[canvasData];
  return (
    <div className="space-y-6 fade w-full">
      {expData.map((item, i) => (
        <ExperienceContentRow key={i} data={item} />
      ))}
    </div>
  );
};

export default ExperienceContent;
