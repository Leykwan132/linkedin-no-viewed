import { Avatar } from "@mui/material";
import { GiSelfLove } from "react-icons/gi";
import React from "react";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";
import { isMobileState } from "../../../atoms/profileAtoms.ts";
import { useRecoilState } from "recoil";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { BsBoxArrowUpRight } from "react-icons/bs";

type Props = {
  data?: Object;
};

const VolunteeringContentRow = ({ data }: Props) => {
  const data_range = dateRangeFormatter(data);
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <div className="font-mono flex flex-col text-[12px] md:text-[15px] space-y-3">
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
                className="font-bold hover:underline"
              >
                {data.company}
              </a>
            )
          ) : (
            <p className="font-bold cursor-default text-left">{data.company}</p>
          )}
        </div>
        {isMobile && data_range !== "" ? (
          <div className="flex items-center space-x-2">
            <CalendarDaysIcon className="w-5 h-5 " />
            <p className="text-xs font-thin md:text-right text-left md:ml-9">
              {data_range}
            </p>
          </div>
        ) : (
          <p className="text-xs font-thin md:text-right text-left md:ml-9">
            {data_range}
          </p>
        )}
      </div>
      <div className="flex items-center space-x-3">
        <GiSelfLove className="text-red-400 w-5 h-5" />
        <p className=" text-[11px] font-extralight text-left">{data.title}</p>
      </div>
    </div>
  );
};

export default VolunteeringContentRow;
