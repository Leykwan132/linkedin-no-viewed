import { Avatar } from "@mui/material";
import { GiSelfLove } from "react-icons/gi";
import React from "react";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";

type Props = {
  data?: Object;
};

const VolunteeringContentRow = ({ data }: Props) => {
  const data_range = dateRangeFormatter(data);
  return (
    <div className="font-mono flex flex-col text-[15px] space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 max-w-sm">
          <Avatar
            alt="logo"
            src={data?.logo_url}
            sx={{ width: 28, height: 28 }}
          />
          {data.company_linkedin_profile_url ? (
            <a
              href={data.company_linkedin_profile_url}
              target="_blank"
              className="font-bold hover:underline"
            >
              {data.company}
            </a>
          ) : (
            <p className="font-bold cursor-default">{data.company}</p>
          )}
        </div>
        <p className="text-xs font-thin ml-9">{data_range}</p>
      </div>
      <div className="flex items-center space-x-2">
        <GiSelfLove className="text-red-400" />
        <p className=" text-[11px] font-extralight">{data.title}</p>
      </div>
    </div>
  );
};

export default VolunteeringContentRow;
