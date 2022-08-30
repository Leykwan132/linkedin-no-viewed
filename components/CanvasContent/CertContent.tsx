import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import CertContextRow from "./components/CertContextRow.tsx";

type Props = {};

const CertContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const certData = profileData[canvasData];
  const counter = [0, 1, 2];
  return (
    <div className="space-y-6 fade w-full">
      {certData.length <= 2
        ? certData.map((item, i) => <CertContextRow key={i} data={item} />)
        : counter.map((item, i) => (
            <CertContextRow key={i} data={expData[item]} />
          ))}
    </div>
  );
};

export default CertContent;
