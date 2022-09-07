import React from "react";
import { dateRangeFormatter } from "../../../utils/dateRangeFormatter.ts";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { isMobileState } from "../../../atoms/profileAtoms.ts";
import { useRecoilState } from "recoil";

type Props = {
  data?: Object;
};

const ProjectContentRow = ({ data }: Props) => {
  const data_range = dateRangeFormatter(data);
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

  return (
    <div className="font-mono flex flex-col text-[15px] space-y-3 max-w-[480px] overflow-y-scroll scrollbar-hide">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 max-w-sm">
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
            <p className="font-bold cursor-default">{data.title}</p>
          )}
        </div>
        {!isMobile && (
          <p className="text-xs font-extralight ml-9 cursor-default text-right">
            {data_range}
          </p>
        )}
      </div>
      {isMobile && (
        <div className="flex items-center space-x-2">
          <CalendarDaysIcon className="w-5 h-5 text-red-500" />
          <p className="text-xs font-extralight cursor-default text-right">
            {data_range}
          </p>
        </div>
      )}
      <div className="flex items-center space-x-2">
        <p className=" text-left text-[11px] font-extralight">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectContentRow;
