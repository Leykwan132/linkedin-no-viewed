import Image from "next/image";
import React from "react";
import { useRecoilValue } from "recoil";
import { profileState } from "../../atoms/profileAtoms.ts";

type Props = {};

const BioContent = (props: Props) => {
  const profileData = useRecoilValue(profileState);

  return (
    <div className="flex flex-col space-y-5 items-center">
      <div
        className={`text-gray-300 font-mono font-bold text-xl md:text-3xl fade truncate `}
      >
        {profileData?.full_name}
      </div>
      <div className="text-gray-300 font-mono font-semibold fade text-xs md:text-base">
        {`${profileData?.city}, ${profileData?.country_full_name}`}
      </div>
      <p className="text-gray-300 font-mono font-semibold max-w-[500px] text-xs md:text-base fade text-center">
        {`${profileData?.Education[0]?.degree_name}, ${profileData?.Education[0]?.field_of_study}`}
      </p>
      <div className="flex items-center fade justify-center space-x-2">
        <Image
          src={profileData?.Education[0]?.logo_url}
          className="rounded-full flex-shrink-0"
          objectFit="contain"
          width="25px"
          height="25px"
        />
        <p className="text-gray-300 text-xs md:text-base font-mono font-semibold text-center">
          {profileData?.Education[0]?.school}
        </p>
      </div>
      <p className="text-gray-300 text-xs md:text-base fade font-mono font-semibold text-center max-w-[500px]">
        {`Current ${profileData?.headline}`}
      </p>
    </div>
  );
};

export default BioContent;
