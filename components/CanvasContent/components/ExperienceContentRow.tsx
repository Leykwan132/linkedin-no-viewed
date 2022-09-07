import { Avatar } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";
import { isMobileState } from "../../../atoms/profileAtoms.ts";
import { BsBoxArrowUpRight } from "react-icons/bs";

type Props = {
  data?: Object;
};

const ExperienceContentRow = ({ data }: Props) => {
  const data_range = dateRangeFormatter(data);
  const isMobile = useRecoilValue(isMobileState);

  return (
    <div className="font-mono text-[12px] md:text-[15px] space-y-3">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
        <div className="flex items-center space-x-2 max-w-sm">
          <Avatar
            alt="logo"
            src={data?.logo_url}
            sx={{ width: 28, height: 28 }}
          />
          {data.company_linkedin_profile_url ? (
            isMobile ? (
              <a
                href={data.company_linkedin_profile_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline md:no-underline flex items-center text-left space-x-2"
              >
                <p>{data.company}</p>
                <BsBoxArrowUpRight className="w-3 h-3 flex-shrink-0" />
              </a>
            ) : (
              <a
                href={data.company_linkedin_profile_url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:underline md:no-underline underline text-left"
              >
                {data.company}
              </a>
            )
          ) : (
            <p className="font-bold cursor-default text-left">{data.company}</p>
          )}
        </div>
        <p className="text-[11px] font-thin md:ml-9 text-left ml-0 md:text-right">
          {data_range}
        </p>
      </div>
    </div>
  );
};

export default ExperienceContentRow;
