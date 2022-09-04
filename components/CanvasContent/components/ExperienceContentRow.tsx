import { Avatar } from "@mui/material";
import React from "react";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";

type Props = {
  data?: Object;
};

const ExperienceContentRow = ({ data }: Props) => {
  const data_range = dateRangeFormatter(data);
  return (
    <div className="font-mono text-[15px] space-y-3">
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
    </div>
  );
};

export default ExperienceContentRow;
