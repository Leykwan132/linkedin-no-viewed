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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
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
              className="font-bold hover:underline md:no-underline underline text-left"
            >
              {data.company}
            </a>
          ) : (
            <p className="font-bold cursor-default text-left">{data.company}</p>
          )}
        </div>
        <p className="text-xs font-thin md:ml-9 text-left ml-0 md:text-right">
          {data_range}
        </p>
      </div>
    </div>
  );
};

export default ExperienceContentRow;
