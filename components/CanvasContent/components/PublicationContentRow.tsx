import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useRecoilValue } from "recoil";
import { isMobileState } from "../../../atoms/profileAtoms.ts";

type Props = {
  data?: any;
};

const PublicationContentRow = ({ data }: Props) => {
  const isMobile = useRecoilValue(isMobileState);

  return (
    <div className="font-mono flex flex-col md:text-[15px] text-[11px] space-y-3">
      {data.url ? (
        isMobile ? (
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline md:no-underline flex items-center text-left space-x-2"
          >
            <p>{data.name}</p>
            <BsBoxArrowUpRight className="w-3 h-3 flex-shrink-0" />
          </a>
        ) : (
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline text-left underline md:no-underline"
          >
            {data.name}
          </a>
        )
      ) : (
        <p className="font-bold cursor-default text-left">{data.name}</p>
      )}

      <p className="text-xs font-extralight cursor-default text-left">{`${data.publisher}(${data.published_on.year}) `}</p>
    </div>
  );
};

export default PublicationContentRow;
