import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import EduContentRow from "./components/EduContentRow.tsx";

type Props = {};

const EduContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const eduData = profileData[canvasData];

  return (
    <div className="space-y-6  fade">
      {eduData.map((item, i) => (
        <EduContentRow key={i} data={item} />
      ))}
    </div>
  );
};

export default EduContent;
