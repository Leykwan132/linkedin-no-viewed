import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import VolunteeringContentRow from "./components/VolunteeringContentRow.tsx";

type Props = {};

const VolunteeringContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const volunteeringData = profileData[canvasData];

  return (
    <div className="space-y-6 fade w-full">
      {volunteeringData.map((item, i) => (
        <VolunteeringContentRow key={i} data={item} />
      ))}
    </div>
  );
};

export default VolunteeringContent;
