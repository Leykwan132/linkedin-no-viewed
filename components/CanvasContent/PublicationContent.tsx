import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import PublicationContentRow from "./components/PublicationContentRow.tsx";
type Props = {};

const PublicationContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const publicationData = profileData[canvasData];
  return (
    <div className="space-y-6 fade w-full">
      {publicationData.map((item, i) => (
        <PublicationContentRow key={i} data={item} />
      ))}
    </div>
  );
};

export default PublicationContent;
