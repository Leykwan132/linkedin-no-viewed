import React from "react";

type Props = {
  data?: Object;
};

const CoursesContentRow = ({ data }: Props) => {
  return (
    <div className="font-mono flex flex-col text-[13px] md:text-[15px] space-y-3">
      <div className="flex items-center justify-between">
        <p className="font-bold cursor-default text-left">{data.name}</p>
        <p className="text-xs font-extralight ml-9 cursor-default text-right">
          {data.number}
        </p>
      </div>
    </div>
  );
};

export default CoursesContentRow;
