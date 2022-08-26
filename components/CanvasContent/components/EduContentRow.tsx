import React from "react";
import { useRecoilValue } from "recoil";
import { canvasState, profileState } from "../../../atoms/profileAtoms.ts";
import { Avatar } from "@mui/material";

type Props = {
  data?: Object;
};

const EduContentRow = ({ data }: Props) => {
  return (
    <div className="font-mono text-[15px] space-y-3 ">
      <div className="flex items-center space-x-2">
        <Avatar
          alt="logo"
          src={data?.logo_url}
          sx={{ width: 28, height: 28 }}
        />
        <p className="font-bold">{data.school}</p>
        {data.starts_at.year && data.ends_at.year && (
          <p className="text-xs">{`${data.starts_at.year}-${data.ends_at.year}`}</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs font-light text-left">{data.degree_name}</p>
        {data.field_of_study && (
          <p className="text-xs font-light text-right">{`${data.field_of_study}`}</p>
        )}
      </div>
    </div>
  );
};

export default EduContentRow;
