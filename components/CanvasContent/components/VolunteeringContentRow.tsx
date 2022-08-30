import { Avatar } from "@mui/material";
import { GiSelfLove } from "react-icons/gi";
import React from "react";

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

const VolunteeringContentRow = ({ data }: Props) => {
  console.log(data);
  let start_date;
  let end_date;
  if (data.starts_at.month) {
    start_date = Month[data.starts_at.month] + data.starts_at.year;
  } else {
    start_date = data.starts_at.year;
  }

  if (data.ends_at.month) {
    end_date = Month[data.ends_at.month] + data.ends_at.year;
  } else {
    if (data.ends_at.year) {
      end_date = data.ends_at.year;
    } else {
      end_date = "Present";
    }
  }

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
        <p className="text-xs font-thin ml-9">{`${start_date} - ${end_date}`}</p>
      </div>
      <div className="flex items-center space-x-2">
        <GiSelfLove className="text-red-400" />
        <p className=" text-[11px] font-extralight">{data.title}</p>
      </div>
    </div>
  );
};

export default VolunteeringContentRow;
