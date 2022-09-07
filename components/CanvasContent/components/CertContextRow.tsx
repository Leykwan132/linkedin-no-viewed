import { Avatar } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { isMobileState } from "../../../atoms/profileAtoms.ts";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";

type Props = {
  data?: Object;
};

const CertContextRow = ({ data }: Props) => {
  const start_date = dateRangeFormatter(data, true);

  return (
    <div className="font-mono flex flex-col md:text-[15px] text-[11px] space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 max-w-sm">
          <Avatar
            alt="logo"
            src={data?.display_source}
            sx={{ width: 28, height: 28 }}
          />
          {data.url ? (
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              {data.name}
            </a>
          ) : (
            <p className="font-bold cursor-default">{data.name}</p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <p className=" text-[11px] font-extralight">{data.authority}</p>
        <p className="text-xs font-extralight md:ml-9 ml-0 cursor-default text-right">{`Issued ${start_date}`}</p>
      </div>
    </div>
  );
};

export default CertContextRow;
