import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Avatar } from "@mui/material";
import { isMobileState } from "../../../atoms/profileAtoms.ts";
import { AcademicCapIcon } from "@heroicons/react/24/outline";

type Props = {
  data?: Object;
};

const EduContentRow = ({ data }: Props) => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <div className="font-mono md:text-[15px] text-[12px] space-y-3 ">
      <div className="flex items-center space-x-2">
        <Avatar
          alt="logo"
          src={data?.logo_url}
          sx={{ width: 28, height: 28 }}
        />
        <p className="font-bold text-left">{data.school}</p>
        {data.starts_at.year && data.ends_at.year && (
          <p className="text-xs">{`${data.starts_at.year}-${data.ends_at.year}`}</p>
        )}
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:justify-between">
        {isMobile ? (
          <div className="flex items-center space-x-2">
            <AcademicCapIcon className="h-5 w-5 text-sky-500" />
            <p className="text-[11px] font-light text-left">
              {data.degree_name}
            </p>
          </div>
        ) : (
          <p className="text-[11px] font-light text-left">{data.degree_name}</p>
        )}
        {data.field_of_study && (
          <p className="text-[11px] font-bold text-left md:text-right">{`${data.field_of_study}`}</p>
        )}
      </div>
    </div>
  );
};

export default EduContentRow;
