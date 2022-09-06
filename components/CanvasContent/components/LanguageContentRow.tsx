import { Avatar } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { isMobileState } from "../../../atoms/profileAtoms.ts";

type Props = {
  data?: Object;
};

const LanguageContentRow = ({ data }: Props) => {
  const [isMobile, setIsMobile] = useRecoilState(isMobileState);

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
      <p className={`${isMobile && "text-sm"}`}>{data}</p>
    </div>
  );
};

export default LanguageContentRow;
