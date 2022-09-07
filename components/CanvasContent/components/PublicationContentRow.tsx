import React from "react";

type Props = {
  data?: any;
};

const PublicationContentRow = ({ data }: Props) => {
  return (
    <div className="font-mono flex flex-col md:text-[15px] text-[11px] space-y-3">
      {data.url ? (
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline text-left underline md:no-underline"
        >
          {data.name}
        </a>
      ) : (
        <p className="font-bold cursor-default text-left">{data.name}</p>
      )}

      <p className="text-xs font-extralight cursor-default text-left">{`${data.publisher}(${data.published_on.year}) `}</p>
    </div>
  );
};

export default PublicationContentRow;
