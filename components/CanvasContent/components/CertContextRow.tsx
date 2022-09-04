import { Avatar } from "@mui/material";
import React from "react";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";

type Props = {
  data?: Object;
};

const Month = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "Jul",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const CertContextRow = ({ data }: Props) => {
  const start_date = dateRangeFormatter(data, true);

  return (
    <div className="font-mono flex flex-col text-[15px] space-y-3">
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
              className="font-bold hover:underline"
            >
              {data.name}
            </a>
          ) : (
            <p className="font-bold cursor-default">{data.name}</p>
          )}
        </div>
        <p className="text-xs font-extralight ml-9 cursor-default text-right">{`Issued ${start_date}`}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className=" text-[11px] font-extralight">{data.authority}</p>
      </div>
    </div>
  );
};

export default CertContextRow;
