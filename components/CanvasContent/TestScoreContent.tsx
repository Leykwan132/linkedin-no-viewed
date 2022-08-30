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
  const counter = [0, 1, 2];

  return (
    <div className="space-y-6 fade w-full">
      {testScoreData.length <= 2
        ? testScoreData.map((item, i) => (
            <TestScoresRow key={i} data={item} emoji={Emoji[i]} />
          ))
        : counter.map((item, i) => (
            <TestScoresRow
              key={i}
              data={testScoreData[item]}
              emoji={Emoji[item]}
            />
          ))}
    </div>
  );
};

export default TestScore;
