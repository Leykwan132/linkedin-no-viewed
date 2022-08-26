import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import EduContentRow from "./components/EduContentRow.tsx";

type Props = {};

const counter = [0, 1, 2];
const EduContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const eduData = profileData[canvasData];
  return (
    <div className="space-y-6 mx-10 min-w-[500px] fade">
      {eduData.length <= 3 &&
        eduData.map((item, i) => <EduContentRow key={i} data={item} />)}
    </div>
  );
};

export default EduContent;
