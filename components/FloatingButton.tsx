import React from "react";

type Props = {
  title?: String;
};

const FloatingButton = ({ title }: Props) => {
  return (
    <div className="grid place-items-center border border-gray-500 py-7 text-[13px] hover:border-white rounded-xl font-mono cursor-pointer hover:scale-110 ease-in-out duration-200 ">
      <div>{title}</div>
    </div>
  );
};

export default FloatingButton;
