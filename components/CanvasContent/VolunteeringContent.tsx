import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import VolunteeringContentRow from "./components/VolunteeringContentRow.tsx";

type Props = {};

const VolunteeringContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const volunteeringData = profileData[canvasData];
  const counter = [0, 1, 2];

  return (
    <div className="space-y-6 fade w-full">
      {volunteeringData.length <= 2
        ? volunteeringData.map((item, i) => (
            <VolunteeringContentRow key={i} data={item} />
          ))
        : counter.map((item, i) => (
            <VolunteeringContentRow key={i} data={volunteeringData[item]} />
          ))}
    </div>
  );
};

export default VolunteeringContent;
