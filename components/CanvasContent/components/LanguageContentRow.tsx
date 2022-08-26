import { Avatar } from "@mui/material";
import React from "react";

type Props = {
  data?: Object;
};

const LanguageContentRow = ({ data }: Props) => {
  return (
    <div className="font-mono text-white flex items-center space-x-3">
      <Avatar
        alt="logo"
        className="bg-white"
        src={`https://avatars.dicebear.com/api/open-peeps/${
          data || "placeholder"
        }.svg`}
        sx={{ width: 28, height: 28 }}
      />
      <p>{data}</p>
    </div>
  );
};

export default LanguageContentRow;
