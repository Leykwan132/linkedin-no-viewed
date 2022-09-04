import React from "react";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";

type Props = {
  data?: Object;
};

const ProjectContentRow = ({ data }: Props) => {
  const data_range = dateRangeFormatter(data);
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
        <p className="text-xs font-extralight ml-9 cursor-default text-right">
          {data_range}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <p className=" text-[11px] font-extralight">{data.description}</p>
      </div>
    </div>
  );
};

export default ProjectContentRow;
