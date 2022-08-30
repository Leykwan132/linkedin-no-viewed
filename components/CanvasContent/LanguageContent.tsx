import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import LanguageContentRow from "./components/LanguageContentRow.tsx";

type Props = {};

const LanguageContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const languageData = profileData[canvasData];

  return (
    <div className="space-y-6 mx-10 fade w-full">
      {languageData.map((item, i) => (
        <LanguageContentRow key={i} data={item} />
      ))}
    </div>
  );
};

export default LanguageContent;
