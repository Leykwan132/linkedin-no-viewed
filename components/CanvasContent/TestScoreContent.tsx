import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../atoms/profileAtoms.ts";
import { SiPytest } from "react-icons/si";
import { GiPapers } from "react-icons/gi";
import { TbPaperBag } from "react-icons/tb";
import TestScoresRow from "./components/TestScoresContentRow.tsx";
type Props = {};

const Emoji = {
  1: <SiPytest />,
  2: <GiPapers />,
  3: <TbPaperBag />,
};
const TestScore = (props: Props) => {
  const profileData = useRecoilValue(profileState);
  const canvasData = useRecoilValue(canvasState);
  const testScoreData = profileData[canvasData];

  return (
    <div className="space-y-6 fade w-full">
      {testScoreData.map((item, i) => (
        <TestScoresRow key={i} data={item} emoji={Emoji[i]} />
      ))}
    </div>
  );
};

export default TestScore;
