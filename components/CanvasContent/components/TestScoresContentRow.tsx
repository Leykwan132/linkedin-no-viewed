import { Avatar } from "@mui/material";
import React from "react";

type Props = {
  data?: Object;
  emoji?: any;
};

const TestScoresRow = ({ data, emoji }: Props) => {
  return (
    <div className="font-mono text-white flex flex-col md:text-[15px] text-[12px] space-y-3  px-2">
      <p className="font-bold">{data.name}</p>
      <p className="md:text-xs font-thin">{`Score: ${data.score}`}</p>
    </div>
  );
};

export default TestScoresRow;
