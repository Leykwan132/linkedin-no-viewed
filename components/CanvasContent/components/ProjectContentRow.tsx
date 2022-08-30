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

const ProjectContentRow = ({ data }: Props) => {
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

  console.log(data);
  return (
    <div className="font-mono flex flex-col text-[15px] space-y-3 max-w-[480px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 max-w-sm">
          {data.url ? (
            <a
              href={data.url}
              target="_blank"
              className="font-bold hover:underline"
            >
              {data.name}
            </a>
          ) : (
            <p className="font-bold cursor-default">{data.title}</p>
          )}
        </div>
        <p className="text-xs font-extralight ml-9 cursor-default text-right">{`${start_date} - ${end_date}`}</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className=" text-[11px] font-extralight">{data.description}</p>
      </div>
    </div>
  );
};

export default ProjectContentRow;
