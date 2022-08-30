import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import ExperienceContentRow from "./components/ExperienceContentRow.tsx";

type Props = {};

const ExperienceContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const expData = profileData[canvasData];
  const counter = [0, 1, 2];
  return (
    <div className="space-y-6 fade w-full">
      {expData.length <= 2
        ? expData.map((item, i) => <ExperienceContentRow key={i} data={item} />)
        : counter.map((item, i) => (
            <ExperienceContentRow key={i} data={expData[item]} />
          ))}
    </div>
  );
};

export default ExperienceContent;
